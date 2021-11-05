import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/compat";
import firebaseConfig from "../firebaseConfig";

Vue.config.productionTip = false;

// Event Bus
export const bus = new Vue();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  created() {
    // Firebase initialization
    firebase.initializeApp(firebaseConfig);

    // Reset the User State - In Case of Page Reloading
    this.$store.dispatch("resetUserState");
  },
}).$mount("#app");
