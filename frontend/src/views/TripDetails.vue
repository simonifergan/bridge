<template>
  <section v-if="trip" class="trip-details">
    <div class="user-section">
      <router-link :to="'/user/' + trip.userId" tag="div" class="profile-img" :style="profilePic"/>
      <div class="user-details-content">
        <router-link :to="'/user/' + trip.userId" tag="h2">{{trip.user.firstname}}&nbsp;{{trip.user.lastname}}</router-link>
        <h3>{{trip.user.birthdate | calcAge}}, {{trip.user.from | countryCodeToName}}</h3>
        <div class="btns-like-msg">
          <button
            v-if="!loggedInUser || (loggedInUser && trip.userId !== loggedInUser._id)"
            @click="initChat(trip.userId)"
            :title="'Start a chat with ' + trip.user.firstname">
            <i class="far fa-comment-dots"></i>
          </button>
          <p class="likes-count">
            <button :title="'Like ' + trip.user.firstname" @click="toggleUserLike">
              <i :class="isLike"></i>
            </button>
            <span>&nbsp;({{this.trip.user.likes.length}})</span>
          </p>
        </div>
      </div>
    </div>

    <div class="trip-section">
      <div class="trip-header">
        <h1>{{trip.title}}</h1>
        <button
          class="btn-join-trip"
          @click="joinLeaveTrip"
          v-if="!loggedInUser || trip.userId !== loggedInUser._id"
        >{{whoIsUser}}</button>
      </div>
      <p class="trip-desc">{{trip.desc}}</p>
      <div class="trip-time">
        <i class="far fa-calendar-alt"></i>
        <p>On {{trip.startsAt | monthAndYearName}}, for a {{trip.duration}}</p>
      </div>
      <div class="trip-dest">
        <i class="fas fa-globe-europe"></i>
        <ul>
          <li v-for="(value,key) in citiesForRender" :key="value + key + '_-'" >
            {{citiesForRender[key] | cityList}} in {{key}}
          </li>
        </ul>
      </div>
      <div class="trip-activities">
        <div v-for="(activity, idx) in trip.activities" :key="idx">{{activity}}</div>
      </div>

      <div class="map">
        <our-super-awesome-map v-if="isDesktop" :enable="false" :value="trip.destinations.countries"/>
      </div>
    </div>

    <div class="trip-users">
      <h3 v-if="loggedInUser && trip.pending.length && trip.userId === loggedInUser._id">Pending:</h3>
      <pending-list
        :isSpotsLeft="isSpotsLeft"
        @requestPendingUsers="requestPendingUsers"
        @requestApproved="requestApproved"
        @requestRejected="requestRejected"
        v-if="loggedInUser && loggedInUser._id === trip.userId && trip.pending.length"
      />
      <h3>Group members:</h3>
      <div class="registered">
        <p>
          <i class="fas fa-users"></i>&nbsp;
          {{registered}}
        </p>
      </div>
      <div class="btns-group">
        <button
          class="btn-join-trip"
          @click="joinLeaveTrip"
          v-if="(!loggedInUser || (!isUserMember && trip.userId !== loggedInUser._id))">
            {{whoIsUser}}
          </button>
        <button
          @click="initGroupChat(trip.chatId)"
          v-if="isUserMember || (loggedInUser && loggedInUser._id === trip.userId)"
          :title="'Chat with group members'">
            <i class="far fa-comments"></i>
        </button>
      </div>
      <ul class="trip-members">
        <userPreview v-for="user in trip.members" :key="user._id" :user="user"/>
      </ul>
    </div>
  </section>
</template>

<script>
// CMPS
import UserPreview from "@/components/UserPreview.vue";
import OurSuperAwesomeMap from "@/components/OurSuperAwesomeMap.vue";
import PendingList from "@/components/PendingList.vue";

export default {
  name: "trip-details",
  components: {
    UserPreview,
    OurSuperAwesomeMap,
    PendingList
  },
  methods: {
    joinLeaveTrip() {
       if (!this.loggedInUser) {
        this.$router.push(this.$route.path + '#login');
        return;
      }
      if (this.isUserMember)
        this.$store.dispatch({
          type: "leaveTrip",
          userToLeave: this.loggedInUser,
          tripIdToLeave: this.trip._id
        });
      else if (this.loggedInUser && this.trip.pending.some(id => id === this.loggedInUser._id)) {
        this.$store.dispatch({ type: "cancelTripJoinRequest" });
      } else this.$store.dispatch({ type: "userRequestToJoinTrip" });
    },
    initChat(userId) {
       if (!this.loggedInUser) {
        this.$router.push(this.$route.path + '#login');
        return;
      }
      this.$store.dispatch({ type: "socketJoinPrivateChat", userId });
    },
    initTrip() {
      const { tripId } = this.$route.params;
      if (!this.trip || tripId !== this.trip._id) {
        this.$store.dispatch({ type: "loadTrip", tripId });
      }
    },
    requestPendingUsers() {
      this.$store.dispatch({ type: "getUsers", userIds: this.trip.pending });
    },
    requestApproved(pendingUser) {
      this.$store.dispatch({
        type: "approveUserToTrip",
        userToJoin: pendingUser,
        tripIdToJoin: this.trip._id
      });
    },
    requestRejected(pendingUser) {
      this.$store.dispatch({
        type: "removeUserFromTrip",
        userToLeave: pendingUser,
        tripIdToLeave: this.trip._id
      });
    },
    initGroupChat(chatId) {
       if (!this.loggedInUser) {
        this.$router.push(this.$route.path + '#login');
        return;
      }
      this.$store.dispatch({ type: "socketInitGroupChat", chatId });
    },
    toggleUserLike() {
       if (!this.loggedInUser) {
        this.$router.push(this.$route.path + '#login');
        return;
      }
      this.$store.dispatch({type: 'toggleUserLike', userId: this.trip.userId});
    }
  },
  created() {
    this.initTrip();
  },
  updated() {
      this.requestPendingUsers();
  },
  beforeDestroy() {
    this.$store.commit({ type: "clearTrip" });
  },
  computed: {
    trip() {
      return this.$store.getters.tripToDisplay;
    },
    loggedInUser() {
      return this.$store.getters.loggedUser;
    },
    profilePic() {
      return { "background-image": `url('${this.trip.user.profilePic}')` };
    },
    isUserMember() {
      if (!this.loggedInUser) return false;
      return this.trip.members.some(user => user._id === this.loggedInUser._id);
    },
    whoIsUser() {
      if (!this.loggedInUser) return "Ask to join";
      else if (this.isUserMember) return "Leave";
      else if (
        this.loggedInUser && this.trip.pending.some(userId => userId === this.loggedInUser._id)
      ) {
        return "Cancel request";
      } else return "Ask to join";
    },
    isLike() {
      let classKey = (this.loggedInUser && this.trip.user.likes.some(userId => userId === this.loggedInUser._id))
        ? "fas fa-heart"
        : "far fa-heart";
      return { [classKey]: true };
    },
    citiesForRender() {
      if (!this.trip || !this.trip.destinations || !this.trip.destinations.cities) return [];
      // TODO Yanai: Found a bug where city was like: "Singapore" without a country next to it
      // (Changed it to: "Singapore, Singapore" and it worked)
      // Run some checks...
      const cities = this.trip.destinations.cities.reduce((acc, city) => {
        const splitComma = city.split(',')
        const splitDash = city.split('-')
        let country
        if (splitComma.length > 1) country = splitComma.splice(-1) 
        else if (splitDash.length > 1) country = splitDash.splice(-1)
        if (country) {
          if (acc[country]) acc[country].push(city.match(/^.*?(?=[,\-]|$)/)[0])
          else acc[country] = city.match(/^.*?(?=[,\-]|$)/)
        }
        else acc[city] = []
        return acc
      }, {})
      return cities
    },
    isSpotsLeft() {
      return (this.trip.groupSize - this.trip.members.length > 0)
    },
    registered() {
      let maxGroupSize = this.trip.groupSize;
      let membersSize = this.trip.members.length;
      if (maxGroupSize - membersSize <= 0) return 'No spots remaining.'
      else if (membersSize === 0) return 'Be the first  to join!'
      else return `Only ${maxGroupSize - membersSize} out of ${maxGroupSize} spots left!`
    },
    isDesktop() {
      return window.matchMedia("(min-width: 750px)").matches;
    }
  },
  watch: {
    $route: {
      handler(newRoute) {
        this.initTrip();
      },
      deep: true
    }
  }
};
</script>