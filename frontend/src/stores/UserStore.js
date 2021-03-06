import UserService from '@/services/UserService'
import FacebookService from '@/services/FacebookService'
import NotificationService from '@/services/NotificationService';
import { PUSH_URL, getEmptyPushNotification, subUserForPush } from '@/services/PushNotificationService';

const isDevMode = (process.env.NODE_ENV === 'development');

export default {
    state: {
        loggedUser: UserService.getLoggedUser(),
        usersToDisplay: [], // multiple users
        userToDisplay: null, // single user
    },
    mutations: {
        setLoggedUser(state, { user }) {
            state.loggedUser = user;
        },
        joinTripToUser(state, { tripId }) {
            state.loggedUser.pendingIn.push(tripId);
        },
        leaveTripToUser(state, { tripId }) {
            const idx = state.loggedUser.pendingIn.findIndex(trip => trip === tripId);
            state.loggedUser.pendingIn.splice(idx, 1);
        },
        // USER LIST FOR: Pending list
        setUsersToDisplay(state, { users }) {
            state.usersToDisplay = users;
        },
        // ONE USER TO DISPLAY:
        setUserToDisplay(state, { user }) {
            state.userToDisplay = user;
        },
        toggleUserInUsersToDisplay(state, { user }) {
            const idx = state.usersToDisplay.find(inUser => inUser._id === user._id);
            if (idx !== -1) state.usersToDisplay.splice(idx, 1);
            else state.usersToDisplay.push(user);
        },
        removeUserInUsersToDisplay(state, { user }) {
            const idx = state.usersToDisplay.find(inUser => inUser._id === user._id);
            if (idx !== -1) state.usersToDisplay.splice(idx, 1);
        },
        toggleUserLikeUser(state, { userId }) {
            const idx = state.userToDisplay.likes.findIndex(id => id === userId);
            if (idx !== -1) state.userToDisplay.likes.splice(idx, 1);
            else state.userToDisplay.likes.push(userId);
        },
    },
    getters: {
        loggedUser(state) {
            return state.loggedUser;
        },
        getEmptyUser() {
            return UserService.getEmptyUser();
        },
        userListToDisplay(state) {
            return state.usersToDisplay;
        },
        userToDisplay(state) {
            return state.userToDisplay;
        },
        userToEdit(state) {
            if (state.userToDisplay) return JSON.parse(JSON.stringify(state.userToDisplay))
            else return null;
        }
    },
    actions: {
        async login({ commit, dispatch }, { credentials }) {
            try {
                if (!isDevMode) await subUserForPush();
                const user = await UserService.login(credentials)
                commit({ type: 'setLoggedUser', user })
                dispatch({ type: "socketConnect" });
                dispatch({ type: "getUserChats" });
                dispatch({ type: "getUserRequests" });
                return true;
            } catch {
                return false;
            }
            // dispatch({ type: "loadNotification" });
        },


        // If localStorage already has user - check if he is real, otherwise remove him.
        async relogin({ dispatch, getters }) {
            try {
                if (!isDevMode) await subUserForPush();
                const user = getters.loggedUser;
                const res = await UserService.relogin(user);
                if (res) {
                    dispatch({ type: "socketConnect" });
                    dispatch({ type: "getUserChats" });
                    dispatch({ type: "getUserRequests" });
                    // dispatch({ type: "loadNotification" });
                    return true;
                }
            } catch (err) {
                dispatch({ type: 'logout'});
                return false;
            }
        },

        async logout(context) {
            try {
                await UserService.logout();
                context.commit({ type: 'setLoggedUser', user: null });
                context.commit({ type: 'setUserChats', chats: [] });
                context.commit({ type: 'setNotification', notifications: [] });
                context.commit({ type: 'setUserRequests', requests: [] });
                context.dispatch('socketDisconnect');
                return true;
            } catch {

            }
        },

        async signup({ commit, dispatch }, { newUser }) {
            const user = await UserService.signup(newUser);
            commit({ type: 'setLoggedUser', user });
            dispatch({ type: "socketConnect" });
            return true;
        },

        async getUserById({ commit }, { userId }) {
            try {
                const user = await UserService.getById(userId);
                commit({ type: 'setUserToDisplay', user });
                return true;

            } catch {
                return false;
            }
        },

        async joinLeaveTripToUser({ commit, getters }, { userToTripId }) {

            try {
                const updatedUser = await UserService.updateTripToUser(userToTripId);
                return updatedUser;
            } catch {
                throw 'failed to update user';
            }
        },
        async getUsers(context, { userIds }) {
            const users = await UserService.getUsers(userIds)
            context.commit({ type: 'setUsersToDisplay', users });
        },
        async getUserToEdit(context, { userId }) {
            let userToEdit = await UserService.getById(userId)
            userToEdit.confirmPassword = null;
            userToEdit.newPassword = null;
            return userToEdit
        },
        async saveUser({ commit, getters }, { user }) {
            let backupUser = getters.loggedUser;
            let userCopy = JSON.parse(JSON.stringify(user));
            delete userCopy.confirmPassword;
            delete userCopy.newPassword;


            commit({ type: 'setLoggedUser', user: userCopy })
            try {
                let updatedUser = await UserService.update(user)
                return updatedUser
            } catch {
                commit({ type: 'setLoggedUser', user: backupUser })
            }
        },


        async toggleUserLike({ commit, getters, dispatch }, { userId }) {
            const loggedUserId = getters.loggedUser._id;
            let action = 'like';
            // update on trip store
            let trip = JSON.parse(JSON.stringify(getters.tripToDisplay));
            if (trip) {
                const idx = trip.user.likes.findIndex(currUserId => currUserId === loggedUserId);
                if (idx !== -1) action = 'unlike';
                commit({ type: 'toggleUserLikeTrip', userId: loggedUserId });
            }

            // update on user store
            let user = JSON.parse(JSON.stringify(getters.userToDisplay));
            if (user) {
                const idx = user.likes.findIndex(currUserId => currUserId === loggedUserId);
                if (idx !== -1) action = 'unlike';
                commit({ type: 'toggleUserLikeUser', userId: loggedUserId });
            }

            try {
                let like = {
                    action,
                    likingUserId: loggedUserId
                }
                const updatedUser = await UserService.updateLikesToUser(like, userId);
                if (action === 'like') {
                    const payload = {
                        action: NotificationService.USER_LIKE_USER,
                        user: getters.loggedUser,
                        // tripId: updatedTrip._id,
                    }
                    dispatch({ type: 'socketSendNotification', userId, payload });

                    let notification = getEmptyPushNotification();
                    // Looks like:
                    //   return {
                    //       title: 'Together',
                    //       payload: {
                    //           body: '',
                    //           icon: '',
                    //       } ,
                    //   }
                    notification.title = `Together`;
                    notification.payload.body = `${getters.loggedUser.firstname} ${getters.loggedUser.lastname} has liked your profile!`
                    notification.payload.icon = `${getters.loggedUser.profilePic}`
                    notification.payload.actions.unshift({ action: 'go', title: `See ${getters.loggedUser.firstname}'s profile.` })
                    notification.payload.data.url = `${PUSH_URL}/user/${loggedUserId}`;
                    dispatch({ type: 'socketPushNotification', userId, notification });
                }
                return updatedUser;
            } catch {
                if (trip) commit({ type: 'toggleUserLikeTrip', userId: loggedUserId });
                else if (user) commit({ type: 'toggleUserLikeUser', userId: loggedUserId });
            }
        },


        // SOCIAL MEDIA user behavior:
        async checkFacebookUser({ commit, dispatch }, { userFBInfo }) {
            if (!userFBInfo) userFBInfo = await FacebookService.getUserInfo();
            if (!userFBInfo) return false;
            else {
                // Prepare object for our database and decide whether to register or auth him
                const { id, first_name, last_name, picture, email } = userFBInfo;
                let user = UserService.getEmptyUser();
                user.facebookId = id;
                user.firstname = first_name;
                user.lastname = last_name;
                user.profilePic = picture.data.url;
                user.email = email;
                try {
                    const loggedUser = await UserService.login(user);
                    commit({ type: 'setLoggedUser', user: loggedUser });
                    dispatch({ type: "socketConnect" });
                    dispatch({ type: "getUserChats" });
                    dispatch({ type: "getUserRequests" });
                    // dispatch({ type: "loadNotification" });
                    return true;

                } catch (err) {
                    // TODO simon
                }
            }

        }
    }
}
