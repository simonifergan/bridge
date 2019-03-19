(function(t){function e(e){for(var n,s,a=e[0],u=e[1],c=e[2],l=0,p=[];l<a.length;l++)s=a[l],r[s]&&p.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,s=1;s<o.length;s++){var u=o[s];0!==r[u]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},i=[];function s(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"494770a4"}[t]+".js"}function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise(function(e,n){o=r[t]=[e,n]});e.push(o[2]=n);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=s(t),i=function(e){u.onerror=u.onload=null,clearTimeout(c);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+i+")");s.type=n,s.request=i,o[1](s)}r[t]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:u})},12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container",attrs:{id:"app"}},[o("header",{staticClass:"flex space-between align-center"},[t._m(0),o("nav",[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n      "),o("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" |\n      "),o("router-link",{attrs:{to:"/toys"}},[t._v("Toys")])],1)]),o("router-view")],1)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h1",[o("i",{staticClass:"fas fa-place-of-worship"}),t._v(" missToy's Playground\n    ")])}],s=o("2877"),a={},u=Object(s["a"])(a,r,i,!1,null,null,null),c=u.exports,l=o("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("div",[t._v(t._s(t.response))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.username,expression:"credentials.username"}],attrs:{placeholder:"username"},domProps:{value:t.credentials.username},on:{input:function(e){e.target.composing||t.$set(t.credentials,"username",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],attrs:{placeholder:"password"},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}}),n("button",[t._v("Login")])]),n("router-link",{attrs:{to:"/signup",tag:"button"}},[t._v("Sign up")]),t._v("\n  "+t._s(t.loggedUser)+"\n")],1)},p=[],f={name:"home",data:function(){return{credentials:{username:"",password:""},response:null}},created:function(){this.loggedUser&&this.$router.push("/toys")},computed:{loggedUser:function(){return this.$store.getters.loggedUser}},methods:{login:function(){var t=this;this.$store.dispatch({type:"login",credentials:this.credentials}).then(function(){t.$router.push("/toys")}).catch(function(e){return t.response=e})}}},m=f,y=Object(s["a"])(m,d,p,!1,null,null,null),v=y.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"signup"},[o("h1",[t._v("Sign Up")]),o("form",{staticClass:"flex column justify-center align-center",on:{submit:function(e){return e.preventDefault(),t.signup(e)}}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.errMsg,expression:"errMsg"}]},[t._v(t._s(t.errMsg))]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.username,expression:"newUser.username"}],attrs:{placeholder:"Username",type:"text",required:""},domProps:{value:t.newUser.username},on:{input:function(e){e.target.composing||t.$set(t.newUser,"username",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],attrs:{placeholder:"Password",type:"password",required:""},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirm,expression:"passwordConfirm"}],attrs:{placeholder:"Confirm Password",type:"password",required:""},domProps:{value:t.passwordConfirm},on:{input:function(e){e.target.composing||(t.passwordConfirm=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.firstName,expression:"newUser.firstName"}],attrs:{placeholder:"First name. e.g. John",type:"text",required:""},domProps:{value:t.newUser.firstName},on:{input:function(e){e.target.composing||t.$set(t.newUser,"firstName",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.lastName,expression:"newUser.lastName"}],attrs:{placeholder:"Last name. e.g. Doe",type:"text",required:""},domProps:{value:t.newUser.lastName},on:{input:function(e){e.target.composing||t.$set(t.newUser,"lastName",e.target.value)}}}),o("button",{attrs:{type:"submit"}},[t._v("Sign up")])])])},g=[],w={data:function(){return{errMsg:null,passwordConfirm:""}},methods:{signup:function(){var t=this;if(this.newUser.password!==this.passwordConfirm)return this.errMsg="Password confirmation failed. Please re-type it.",void setTimeout(function(){t.errMsg=""},2500);this.$store.dispatch({type:"signup",newUser:this.newUser}).then(function(){t.$router.push("/toys")}).catch(function(e){t.errMsg=e,setTimeout(function(){t.errMsg=""},2500)})}},computed:{newUser:function(){return this.$store.getters.emptyUser}}},T=w,_=Object(s["a"])(T,h,g,!1,null,null,null),b=_.exports,$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"toy-app"},[o("button",{on:{click:t.logout}},[t._v("Logout")]),o("router-view",{attrs:{toys:t.toys,isAdmin:!!t.loggedUser&&!!t.loggedUser.isAdmin},on:{"remove-toy":t.removeToy}})],1)},S=[],k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("toy-filter"),o("router-link",{directives:[{name:"show",rawName:"v-show",value:t.isAdmin,expression:"isAdmin"}],staticClass:"btn-add-toy",attrs:{tag:"button",to:"/toys/edit/"}},[t._v("Add Toy")]),o("ul",{staticClass:"toy-list grid"},t._l(t.toys,function(e){return o("toy-preview",{key:e._id,attrs:{toy:e,isAdmin:t.isAdmin},on:{"remove-toy":function(e){return t.$emit("remove-toy",e)}}})}),1)],1)},U=[],E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{staticClass:"toy-filter",on:{submit:function(e){return e.preventDefault(),t.filterToys(e)}}},[o("div",{staticClass:"searchbar-container"},[t._m(0),o("input",{directives:[{name:"model",rawName:"v-model",value:t.filterBy.term,expression:"filterBy.term"}],attrs:{type:"search",list:"toySearchTerms",placeholder:"Search for a toy"},domProps:{value:t.filterBy.term},on:{input:[function(e){e.target.composing||t.$set(t.filterBy,"term",e.target.value)},t.generateSuggestedTerms]}}),o("button",{on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.clearSearch(e)}}},[o("i",{staticClass:"fas fa-times"})]),o("datalist",{attrs:{id:"toySearchTerms"}},t._l(t.suggestedTerms,function(t){return o("option",{key:t,domProps:{value:t}})}),0),o("select",{directives:[{name:"model",rawName:"v-model",value:t.filterBy.inStock,expression:"filterBy.inStock"}],on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.filterBy,"inStock",e.target.multiple?o:o[0])},t.filterToys]}},[o("option",{domProps:{value:""}},[t._v("All")]),o("option",{domProps:{value:!0}},[t._v("In Stock")]),o("option",{domProps:{value:!1}},[t._v("Sold Out")])])]),o("div",{staticClass:"sort-container"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.filterBy.sortBy,expression:"filterBy.sortBy"}],on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.filterBy,"sortBy",e.target.multiple?o:o[0])},function(e){t.filterBy.order=1,t.filterToys()}]}},[o("option",{attrs:{value:"title"}},[t._v("Title")]),o("option",{attrs:{value:"price"}},[t._v("Price")])]),o("label",[t._v("\n      Order:\n      "),o("button",{on:{click:function(e){t.filterBy.order*=-1}}},[t._v("⇕")])])])])},x=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",[o("i",{staticClass:"fas fa-search"})])}],I=(o("6762"),o("2fdb"),{data:function(){return{filteredTerms:[]}},methods:{filterToys:function(){this.$store.dispatch({type:"loadToys",filterBy:this.filterBy})},generateSuggestedTerms:function(){var t=this;this.filteredTerms=this.toyTerms.filter(function(e){return e.toLowerCase().includes(t.filterBy.term.toLowerCase())},[])},clearSearch:function(){this.filterBy.term="",this.filterToys()}},computed:{filterBy:function(){return this.$store.getters.filterToysBy},toyTerms:function(){return this.$store.getters.toyTerms},suggestedTerms:function(){return this.filteredTerms}}}),C=I,P=Object(s["a"])(C,E,x,!1,null,null,null),B=P.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("router-link",{staticClass:"toy-preview",attrs:{title:"See "+t.toy.title,tag:"li",to:"/toys/display/"+t.toy._id}},[o("img",{staticClass:"img-toy",attrs:{src:t.loadThumbnail,alt:t.toy.title+"'s Logo'"}}),o("h1",[t._v(t._s(t.toy.title))]),o("p",[t._v("$"+t._s(t.toy.price))]),o("p",{staticClass:"toy-stock-badge",class:{"in-stock":t.toy.inStock}},[t._v(t._s(t.isInStock))]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isAdmin,expression:"isAdmin"}],staticClass:"btns-container"},[o("router-link",{attrs:{tag:"button",to:"/toys/edit/"+t.toy._id},on:{click:function(t){t.stopPropagation()}}},[o("i",{staticClass:"fas fa-edit"})]),o("button",{on:{click:function(e){return e.stopPropagation(),t.$emit("remove-toy",t.toy._id)}}},[o("i",{staticClass:"fas fa-times"})])],1)])},A=[],N={name:"ToyPreview",props:{toy:Object,isAdmin:Boolean},computed:{isInStock:function(){return this.toy.inStock?"In Stock":"Sold Out"},loadThumbnail:function(){return"https://api.adorable.io/avatars/120/".concat(this.toy.title,"@adorable.pngCopy")}}},O=N,j=Object(s["a"])(O,R,A,!1,null,null,null),D=j.exports,L={name:"ToyList",props:{toys:Array,isAdmin:Boolean},components:{ToyPreview:D,ToyFilter:B}},M=L,q=Object(s["a"])(M,k,U,!1,null,null,null),J=q.exports,F={name:"ToyApp",components:{ToyList:J},methods:{removeToy:function(t){this.$store.dispatch({type:"removeToy",toyId:t})},logout:function(){var t=this;this.$store.dispatch("logout").then(function(){t.$router.push("/")})}},created:function(){var t=this;this.$store.dispatch("loadToys").then(function(){t.$store.commit("setToyTerms")}),this.loggedUser||this.$router.push("/")},computed:{toys:function(){return this.$store.getters.toys},loggedUser:function(){return this.$store.getters.loggedUser}}},H=F,W=Object(s["a"])(H,$,S,!1,null,null,null),V=W.exports,z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"toy-edit"},[o("h2",[t._v(t._s(t.toyToEdit&&t.toyToEdit._id?"Edit Toy:":"Add a new Toy:"))]),t.toyToEdit?o("form",{staticClass:"flex column align-center justify-center",on:{submit:function(e){return e.preventDefault(),t.save(e)}}},[o("label",[t._v("\n      Title: \n      "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.toyToEdit.title,expression:"toyToEdit.title"}],domProps:{value:t.toyToEdit.title},on:{input:function(e){e.target.composing||t.$set(t.toyToEdit,"title",e.target.value)}}})]),o("label",[t._v("\n      Price: \n      "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.toyToEdit.price,expression:"toyToEdit.price",modifiers:{number:!0}}],domProps:{value:t.toyToEdit.price},on:{input:function(e){e.target.composing||t.$set(t.toyToEdit,"price",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),o("label",[t._v("\n      Type: \n      "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.toyToEdit.type,expression:"toyToEdit.type"}],domProps:{value:t.toyToEdit.type},on:{input:function(e){e.target.composing||t.$set(t.toyToEdit,"type",e.target.value)}}})]),o("label",[t._v("\n      Available in stock? \n      "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.toyToEdit.inStock,expression:"toyToEdit.inStock"}],staticClass:"checkbox-instock",attrs:{type:"checkbox"},domProps:{checked:!t.toyToEdit.inStock,checked:Array.isArray(t.toyToEdit.inStock)?t._i(t.toyToEdit.inStock,null)>-1:t.toyToEdit.inStock},on:{change:function(e){var o=t.toyToEdit.inStock,n=e.target,r=!!n.checked;if(Array.isArray(o)){var i=null,s=t._i(o,i);n.checked?s<0&&t.$set(t.toyToEdit,"inStock",o.concat([i])):s>-1&&t.$set(t.toyToEdit,"inStock",o.slice(0,s).concat(o.slice(s+1)))}else t.$set(t.toyToEdit,"inStock",r)}}})]),o("button",{attrs:{type:"submit"}},[t._v("Save")])]):t._e()])},G=[],K={name:"ToyEdit",created:function(){this.loggedUser&&this.loggedUser.isAdmin||this.$router.push("/");var t=this.$route.params.toyId;t&&this.$store.dispatch({type:"getToyById",toyId:t})},destroyed:function(){this.$store.commit("clearSelectedToy")},methods:{save:function(){var t=this;this.$store.dispatch({type:"saveToy",toy:this.toyToEdit}).then(function(){t.$router.push("/toys")})}},computed:{toyToEdit:function(){return this.$store.getters.toyToEdit},loggedUser:function(){return this.$store.getters.loggedUser}}},Q=K,X=Object(s["a"])(Q,z,G,!1,null,null,null),Y=X.exports,Z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.toy?o("section",{staticClass:"toy-details"},[o("article",{staticClass:"details-container"},[o("h1",[t._v(t._s(t.toy.title))]),o("h3",[t._v(t._s(t.toy.type))]),o("p",[t._v(t._s(t.toy.price))]),o("p",{staticClass:"toy-stock-badge",class:{"in-stock":t.toy.inStock}},[t._v(t._s(t.isInStock))])]),o("review-add"),o("review-list",{attrs:{toyId:t.toy._id}})],1):t._e()},tt=[],et=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",[o("button",{on:{click:function(e){t.isReviewing=!t.isReviewing}}},[t._v(t._s(t.isReviewing?"Discard Review":"Add Review"))]),t.isReviewing?o("form",{on:{submit:function(e){return e.preventDefault(),t.save(e)}}},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newReview.content,expression:"newReview.content"}],attrs:{placeholder:"Write your review here"},domProps:{value:t.newReview.content},on:{input:function(e){e.target.composing||t.$set(t.newReview,"content",e.target.value)}}}),o("button",[t._v("Save")])]):t._e()])},ot=[],nt={data:function(){return{isReviewing:!1}},methods:{save:function(){var t=this;this.$store.dispatch({type:"saveReview",newReview:this.newReview}).then(function(){t.isReviewing=!1})}},computed:{newReview:function(){return this.$store.getters.newReview}}},rt=nt,it=Object(s["a"])(rt,et,ot,!1,null,null,null),st=it.exports,at=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",[o("h1",[t._v("Reviews:")]),o("div",[t._v("toyId: "+t._s(t.toyId))]),o("ul",{staticClass:"review-list"},t._l(t.reviews,function(e){return o("li",{key:e._id},[o("router-link",{attrs:{tag:"p",to:"/user/"+e.userId}},[t._v(t._s(e.user.username))]),t._v("\n      "+t._s(e)+";\n    ")],1)}),0)])},ut=[],ct={props:{toyId:String},created:function(){this.$store.dispatch({type:"loadReviews",toyId:this.toyId})},computed:{reviews:function(){return this.$store.getters.reviews}}},lt=ct,dt=Object(s["a"])(lt,at,ut,!1,null,null,null),pt=dt.exports,ft={name:"ToyDetails",components:{ReviewList:pt,ReviewAdd:st},created:function(){this.loggedUser||this.$router.push("/");var t=this.$route.params.toyId;t&&this.$store.dispatch({type:"getToyById",toyId:t})},destroyed:function(){this.$store.commit("clearSelectedToy")},methods:{},computed:{toy:function(){return this.$store.getters.toyToDisplay},loggedUser:function(){return this.$store.getters.loggedUser},isInStock:function(){return this.toy.inStock?"In Stock":"Sold Out"}}},mt=ft,yt=Object(s["a"])(mt,Z,tt,!1,null,null,null),vt=yt.exports,ht=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("h1",[t._v("User:")]),o("pre",[t._v(t._s(t.user))]),o("h2",[t._v("Reviews:")]),o("pre",[t._v(t._s(t.userReviews))])])},gt=[],wt={created:function(){console.log("Hi");var t=this.$route.params.userId;console.log(t),t&&this.$store.dispatch({type:"loadReviews",userId:t})},destroyed:function(){this.$store.commit("clearSelectedUser")},computed:{userReviews:function(){return this.$store.getters.reviews},user:function(){return this.$store.getters.userToDisplay}}},Tt=wt,_t=Object(s["a"])(Tt,ht,gt,!1,null,null,null),bt=_t.exports;n["a"].use(l["a"]);var $t=new l["a"]({routes:[{path:"/",component:v},{path:"/signup",component:b},{path:"/toys",component:V,children:[{path:"",component:J},{path:"display/:toyId",component:vt},{path:"edit/:toyId?",component:Y},{path:"user/:userId",component:bt}]},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}]}),St=o("2f62"),kt=o("f499"),Ut=o.n(kt),Et=(o("20d6"),o("b6d0")),xt=o.n(Et),It=o("75fc"),Ct=o("0a0d"),Pt=o.n(Ct),Bt=o("bc3a"),Rt=o.n(Bt),At=Rt.a.create({withCredentials:!0}),Nt={query:jt,getById:Dt,getEmpty:Lt,add:Mt,update:qt,remove:Jt},Ot="/toy";function jt(t){var e="";return t&&(e+="?",t.term&&(e+="title=".concat(t.term,"&type=").concat(t.term,"&")),t.price&&(e+="price=".concat(t.price,"&")),!0!==t.inStock&&!1!==t.inStock||(e+="inStock=".concat(t.inStock,"&")),t.sortBy&&(e+="sortBy=".concat(t.sortBy,"&order=").concat(t.order))),At.get("".concat(Ot).concat(e)).then(function(t){return t.data})}function Dt(t){return At.get("".concat(Ot,"/").concat(t)).then(function(t){return t.data})}function Lt(){return{title:"",price:0,createdAt:null,inStock:!0,type:""}}function Mt(t){return t.createdAt=Pt()(),At.post(Ot,t).then(function(t){return t.data})}function qt(t){return At.put("".concat(Ot,"/").concat(t._id),t).then(function(t){return t.data})}function Jt(t){return At.delete("".concat(Ot,"/").concat(t)).then(function(t){return t.data})}var Ft={state:{toys:[],toyTerms:[],toyToDisplay:null,filterToysBy:{term:"",inStock:"",price:null,sortBy:"title",order:1}},mutations:{loadToys:function(t,e){var o=e.toys;t.toys=o},setToyToDisplay:function(t,e){var o=e.toy;t.toyToDisplay=o},setToyTerms:function(t){t.toyTerms=Object(It["a"])(t.toys.reduce(function(t,e){return t.add(e.title),t.add(e.type),t},new xt.a))},clearSelectedToy:function(t){t.toyToDisplay=null},addToy:function(t,e){var o=e.newToy;t.toys.unshift(o)},updateToy:function(t,e){var o=e.toy,n=t.toys.findIndex(function(t){return t._id===o._id});t.toys.splice(n,1,o)},removeToy:function(t,e){var o=e.toyId,n=t.toys.findIndex(function(t){return t._id===o});t.toys.splice(n,1)}},getters:{toys:function(t){return t.toys},toyTerms:function(t){return t.toyTerms},toyToEdit:function(t){return t.toyToDisplay?JSON.parse(Ut()(t.toyToDisplay)):Nt.getEmpty()},toyToDisplay:function(t){return t.toyToDisplay},filterToysBy:function(t){return JSON.parse(Ut()(t.filterToysBy))}},actions:{loadToys:function(t,e){var o=e&&e.filterBy?e.filterBy:null;return Nt.query(o).then(function(e){t.commit({type:"loadToys",toys:e})})},getToyById:function(t,e){var o=e.toyId;return Nt.getById(o).then(function(e){t.commit({type:"setToyToDisplay",toy:e})})},saveToy:function(t,e){var o=e.toy;return o._id?Nt.update(o).then(function(){t.commit({type:"updateToy",toy:o}),t.commit("clearSelectedToy")}):Nt.add(o).then(function(e){t.commit({type:"addToy",newToy:e})})},removeToy:function(t,e){var o=e.toyId;return Nt.remove(o).then(function(){t.commit({type:"removeToy",toyId:o})})}}},Ht=Ft,Wt={loadFromLocal:Vt,saveToLocal:zt,removeFromLocal:Gt};function Vt(t){return JSON.parse(localStorage.getItem(t))}function zt(t,e){localStorage.setItem(t,Ut()(e))}function Gt(t){localStorage.removeItem(t)}var Kt=Rt.a.create({withCredentials:!0}),Qt={query:oe,login:ne,signup:re,autoLogin:ie,logout:se,getById:ae,getEmpty:ue,update:ce,remove:le},Xt="loggedUser",Yt="/user",Zt="/login",te="/signup",ee="/logout";function oe(t){var e="";return Kt.get("".concat(Yt).concat(e)).then(function(t){return t.data})}function ne(t){return Kt.post(Zt,t).then(function(t){return t.data}).then(function(t){return Wt.saveToLocal(Xt,t),t}).catch(function(t){throw"Wrong Username and/or Password."})}function re(t){return t.createdAt=Pt()(),Kt.post(te,t).then(function(t){return t.data}).catch(function(t){throw"Username is already taken. Please choose another one."})}function ie(){return Wt.loadFromLocal(Xt)}function se(){return Kt.post(ee).then(function(t){Wt.removeFromLocal(Xt)})}function ae(t){return Kt.get("".concat(Yt,"/").concat(t)).then(function(t){return t.data})}function ue(){return{username:"",password:"",firstName:"",lastName:"",isAdmin:!1,createdAt:null}}function ce(t){return Kt.put("".concat(Yt,"/").concat(t._id),t).then(function(t){return t.data})}function le(t){return Kt.delete("".concat(Yt,"/").concat(t)).then(function(t){return t.data})}var de={state:{loggedUser:Qt.autoLogin(),emptyUser:Qt.getEmpty(),userToDisplay:null},mutations:{setUser:function(t,e){var o=e.user;t.loggedUser=o},clearSelectedUser:function(t){t.userToDisplay=null}},getters:{loggedUser:function(t){return t.loggedUser},emptyUser:function(t){return JSON.parse(Ut()(t.emptyUser))},userToDisplay:function(t){return t.userToDisplay}},actions:{login:function(t,e){var o=e.credentials;return Qt.login(o).then(function(e){t.commit({type:"setUser",user:e})}).catch(function(t){throw t})},signup:function(t,e){var o=e.newUser;return Qt.signup(o).then(function(e){t.commit({type:"setUser",user:e})}).catch(function(t){throw t})},logout:function(t){return Qt.logout().then(function(){t.commit({type:"setUser",user:null})})}}},pe=de,fe=Rt.a.create({withCredentials:!0}),me={query:ve,add:he},ye="/review";function ve(t,e){var o="?";return e&&(o+="userId=".concat(e,"&")),t&&(o+="toyId=".concat(t)),fe.get("".concat(ye).concat(o)).then(function(t){return t.data})}function he(t){return fe.post(ye,t).then(function(t){return t.data})}var ge={state:{reviews:[],newReview:{toyId:"",userId:"",content:""}},mutations:{loadReviews:function(t,e){var o=e.reviews;t.reviews=o},addReview:function(t,e){var o=e.review;t.reviews.unshift(o)},clearReviews:function(t){reviews=[]}},getters:{reviews:function(t){return t.reviews},newReview:function(t,e){return{toyId:e.toyToDisplay._id,content:""}}},actions:{loadReviews:function(t,e){var o=e.toyId,n=void 0===o?null:o,r=e.userId,i=void 0===r?null:r;return me.query(n,i).then(function(e){t.commit({type:"loadReviews",reviews:e})})},saveReview:function(t,e){var o=e.newReview;return me.add(o).then(function(e){t.commit({type:"addReview",review:e})})}}},we=ge;n["a"].use(St["a"]);var Te=new St["a"].Store({modules:{ToyStore:Ht,UserStore:pe,ReviewStore:we},state:{},mutations:{},actions:{}});o("a0d8");n["a"].config.productionTip=!1,new n["a"]({router:$t,store:Te,render:function(t){return t(c)}}).$mount("#app")},a0d8:function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.05e48a3a.js.map