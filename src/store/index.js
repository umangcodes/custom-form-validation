import { createStore } from "vuex";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from "../firebase/firebaseInit";
export default createStore({
  state: {
    user: "",
    profileEmail: "",
    profileFirstname: "",
    profileLastname: "",
    profileId: "",
    profileInitials: "",
  },
  mutations: {
    SET_PROFILE_INFO(state, payload) {
      state.profileId = payload.id;
      state.profileEmail = payload.data().email;
    },
    SET_PROFILE_INITIALS(state, payload) {
      state.profileInitials = payload.id;
    },
    UPDATE_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      console.log("getCurrentUserDispatched");
      const database = await db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
      const dbResults = database.get();
      commit("SET_PROFILE_INFO", dbResults);
      commit("SET_PROFILE_INITIALS", dbResults);
      console.log(`result: ${dbResults}`);
    },
  },
  modules: {},
});
