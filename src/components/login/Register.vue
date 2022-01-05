<template>
  <div class="h-screen rounded-md shadow-md flex flex-col items-center">
    <div class="my-16 border rounded-lg w-96 py-10">
      <span class="text-4xl">Register</span>
      <form @submit.prevent="" class="flex flex-col items-center mx-5 my-5">
        <div class="">
          <div id="email" class="flex my-10">
            <img :src="require('@/assets/icons/email.png')" class="mx-2 h-5" />
            <input
              type="text"
              placeholder="Email"
              class="focus:border-b focus:outline-0"
              v-model="email"
            />
          </div>
          <div id="username" class="flex my-10">
            <img :src="require('@/assets/icons/user.png')" class="mx-2 h-5" />
            <input
              type="text"
              placeholder="Username"
              class="focus:border-b focus:outline-0"
              v-model="username"
            />
          </div>
          <div id="password" class="flex">
            <img :src="require('@/assets/icons/lock.png')" class="mx-2 h-5" />
            <input
              :type="passwordShow ? 'text' : 'password'"
              placeholder="Password"
              class="focus:border-b focus:outline-0"
              v-model="password"
            />
            <button :onClick="togglePassword">
              {{ passwordShow ? "Hide" : "Show" }}
            </button>
          </div>
          <div id="actions" class="flex my-10 justify-center">
            <button
              :onClick="submitForm"
              :class="
                validationError.length
                  ? 'mx-5 rounded-full px-3 py border border-gray-500 cursor-not-allowed'
                  : 'mx-5 rounded-full px-3 py border border-green-500 hover:bg-green-500 hover:text-white'
              "
              :disabled="validationError.length"
            >
              Submit
            </button>

            <button
              :onClick="resetForm"
              class="mx-5 rounded-full px-3 py border border-red-500 hover:bg-red-500 hover:text-white"
            >
              Reset
            </button>
          </div>
          <div class="flex flex-col items-center" v-if="validationError.length">
            <span
              v-for="(error, index) in validationError"
              :key="index"
              class="text-red-500"
              >{{ error }}</span
            >
          </div>
        </div>
      </form>
      <span
        >Already a member?
        <router-link
          :to="{ name: 'Login' }"
          class="text-green-900 font-semibold"
        >
          Login
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import db from "../../firebase/firebaseInit";
export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      passwordShow: false,
      validationError: [],
      usernameRules: [
        (value) => {
          if (value.length <= 2) this.validationError.push("Invalid Username");
        },
      ],
      emailRules: [
        (value) => {
          if (value.indexOf("@") == -1)
            this.validationError.push("must contain @");
          console.log(this.validationError);
        },
        (value) => {
          if (value.indexOf(".") == -1)
            this.validationError.push("must have .");
        },
      ],
      passwordRules: [
        (value) => {
          if (value.length < 7)
            this.validationError.push(
              `password char remaining ${7 - this.password.length}`
            );
        },
        (value) => {
          if (value.indexOf("#") == -1)
            this.validationError.push("password must have #");
        },
      ],
    };
  },
  methods: {
    async submitForm() {
      const firebaseAuth = await firebase.auth();
      const createUser = await firebaseAuth.createUserWithEmailAndPassword(
        this.email,
        this.password
      );
      const res = await createUser;
      const database = db.collection("users").doc(res.user.uid);
      await database.set({
        username: this.username,
        email: this.email,
      });
      console.log(res);
    },
    togglePassword() {
      this.passwordShow = !this.passwordShow;
      console.log(this.passwordShow);
    },
    resetForm() {
      this.username = "";
      this.password = "";
      this.passwordShow = false;
      this.validationError = "";
    },
    runValidation() {
      this.validationError = [];
      this.emailRules.forEach((func) => func(this.email));
      this.usernameRules.forEach((func) => func(this.username));
      this.passwordRules.forEach((func) => func(this.password));
    },
  },
  created() {
    this.runValidation();
  },
  updated() {
    this.runValidation();
  },
};
</script>

<style scoped></style>
