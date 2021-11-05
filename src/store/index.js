import Vue from "vue";
import Vuex from "vuex";

// import axios from "axios";
// Base URL for User Authentication
// const domainName = "http://localhost:3000";

// Importing Firebase
import * as firebase from "firebase/compat";

Vue.use(Vuex);

const getUserDetails = (userId) => {
  return new Promise((resolve, reject) => {
    const db = firebase.firestore();

    db.collection("users")
      .doc(userId)
      .get()
      .then((doc) => {
        console.debug("User Details: ", doc.data());
        if (doc.exists) resolve({ ...doc.data(), docId: doc.id });
        else resolve(null);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};

/* Developer Reference - User Object
    user: {
      userId: "",
      firstName: "",
      lastName: "",
      imageURL: "",
      role: ""
    }
*/

export default new Vuex.Store({
  state: {
    user: null,
    isLoggedIn: false,
  },
  mutations: {
    setCurrentUser(state, payload) {
      state.user = payload;
      state.isLoggedIn = true;
    },
    loggedSuccess() {},
  },
  actions: {
    // Create User
    signUserUp({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const newUser = {
            id: user.uid,
            isLoggedIn: true,
          };
          commit("setUser", newUser);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // ################################################################################################
    //                                            User Login
    // ################################################################################################
    signUserIn({ commit }, payload) {
      return new Promise((resolve, reject) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(payload.email, payload.password)
          .then((userData) => {
            console.debug("UserID: ", userData);
            return getUserDetails(userData.user.uid);
          })
          .then((user) => {
            // Check Whether User Doc is Not in the "user" Collection
            if (user === null)
              throw {
                code: "user not found in database",
                message: "User Details Not Found",
              };

            // Check Whether User is Approved by the Admin
            if (!user.is_approved) {
              throw {
                code: "account is not approved",
                message: "Your Account is NOT Approved",
              };
            }

            // If user exists and approved - success case
            if (user.is_approved) {
              const currentUser = {
                userId: user.docId,
                isLoggedIn: true,
                firstName: user.first_name,
                lastName: user.last_name,
                imageURL: user.image_URL,
                role: user.role,
              };

              // Store the user's login status and data to the local storage - Because store will be reset every time page reloads
              localStorage.setItem("isLoggedIn", true);
              localStorage.setItem("user", JSON.stringify(currentUser));

              commit("setCurrentUser", { ...currentUser });
              resolve("success");
            } else {
              throw {
                code: "unknown error",
                message: "Unknown Error Occured",
              };
            }
          })
          .catch((err) => {
            console.error("Login Error ", err);
            reject(err);
          });
      });
    },

    // ################################################################################################
    //     Reset the User State from Local Storage - If Logged In (In Case of Page Refresh / Reload)
    // ################################################################################################
    resetUserState({ commit }) {
      if (localStorage.getItem("isLoggedIn")) {
        commit("setCurrentUser", JSON.parse(localStorage.getItem("user")));
      } else {
        this.$router.push("/login");
      }
    },

    // ################################################################################################
    //                                   To Log Front-End Errors
    // ################################################################################################
    loggerError({ commit }, logData) {
      const db = firebase.firestore();
      const pageURL = logData.pageURL;
      const errorMessage = logData.errorMessage;
      db.collection("client_logs")
        .add({
          type: "error",
          timestamp_client: Date().toString(),
          timestamp_firebase: firebase.firestore.FieldValue.serverTimestamp(),
          message: errorMessage,
          local_storage: { ...localStorage },
          browser: {
            user_agent: navigator.userAgent,
            platform: navigator.platform,
            app_version: navigator.appVersion,
            engine_name: navigator.product,
            cookies_enabled: navigator.cookieEnabled,
            language: navigator.language,
            screen_resolution:
              window.screen.width * window.devicePixelRatio +
              "x" +
              window.screen.height * window.devicePixelRatio,
            viewport_size:
              Math.max(
                document.documentElement.clientWidth || 0,
                window.innerWidth || 0
              ) +
              " | " +
              Math.max(
                document.documentElement.clientHeight || 0,
                window.innerHeight || 0
              ),
          },
          page_URL: pageURL,
        })
        .then(() => {
          console.debug("Error Logged Successfully");
        })
        .catch((err) => {
          console.error(err);
        });

      commit("loggedSuccess");
    },
    // TODO Implement User Logout
    // ################################################################################################
    //                                               Logout
    // ################################################################################################
    userLogout({ commit }) {
      //
      commit("");
    },
  },
  getters: {
    user: (state) => state.user,
    isLoggedIn: (state) => state.isLoggedIn,
  },
  modules: {},
});
