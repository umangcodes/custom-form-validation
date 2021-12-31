<template>
  <div class="h-screen flex flex-col items-center">
    <div id="reset-component" class="rounded border h-96 w-96 py-10">
      <span class="text-3xl">Reset Password</span>
      <form @submit.prevent="submitResetForm">
        <div class="flex justify-center items-center mt-16">
          <img :src="require('@/assets/icons/user.png')" class="mx-2 h-5" />
          <input
            type="text"
            v-model="username"
            placeholder="Username"
            :rules="nameRules"
          />
        </div>
        <div id="actions" class="flex my-10 justify-center">
          <button
            :onClick="submitResetForm"
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
export default {
  data() {
    return {
      username: "",
      validationError: [],
      usernameRules: [
        (value) => {
          if (value.length <= 2) this.validationError.push("Invalid Username");
        },
      ],
    };
  },
  methods: {
    submitResetForm() {
      return;
    },
    resetForm() {
      this.username = "";
      this.validationError = "";
    },
    resetValidation() {
      this.validationError = [];
    },
    runValidation() {
      this.validationError = [];
      this.usernameRules.forEach((func) => func(this.username));
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

<style lang="scss" scoped></style>
