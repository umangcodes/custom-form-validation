<template>
  <div class="h-auto flex text-2xl justify-center m-5">
    <router-link :to="{ name: 'Login' }" class="mx-10">Login</router-link>
    <router-link :to="{ name: 'Register' }" class="mx-10">Register</router-link>
    <router-link :to="{ name: 'ResetPassword' }" class="mx-10"
      >Reset</router-link
    >
  </div>
</template>

<script>
// import Login from "../components/login/Login.vue";
// import Register from "../components/login/Register.vue";
// import ResetPassword from "../components/login/ResetPassword.vue";

export default {
  name: "Home",
  components: {
    // Login,
    // Register,
    // ResetPassword,
  },
};
</script>
