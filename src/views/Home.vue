<template>
  <div class="h-auto">
    <Login />
  </div>
</template>

<script>
import Login from "../components/login/Login.vue";
// import Register from "../components/login/Register.vue";
// import ResetPassword from "../components/login/ResetPassword.vue";

export default {
  name: "Home",
  components: {
    Login,
    // Register,
    // ResetPassword,
  },
};
</script>
