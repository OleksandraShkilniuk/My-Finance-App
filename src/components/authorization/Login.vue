
<template>

  <div class="container container-fluid">
    <div class="d-flex justify-content-center row">
      <div class="logo"></div>
      <p class="naming">Kitty</p>
    </div>
    <p class="create-acc">Login</p>

    <div class="center">
      <div class="form-inputs">
        <form action="#" method="post">

          <div v-if="validationErrors.email" class="error-container">
            *{{validationErrors.email[0]}}
          </div>

          <input type="text" class="form-control my-2" placeholder="Email" v-model.trim="loginData.email">

          <input type="password" class="form-control" placeholder="Password" v-model.trim="loginData.password">

        </form>
      </div>
    </div>
    <div v-if="validationErrors.length > 0" class="error-container">
      <h3>Validation Errors:</h3>
      <ul>
        <li v-for="(error, index) in validationErrors" :key="index">{{ error }}</li>
      </ul>
    </div>

    <button type="button" class="btn btn-primary m-3" @click="login">Sign In</button>

    <p class="account-no">Don’t have an account?</p>

    <button type="button" class="my-3 btn-style" @click="gotoRegister">Sign Up</button>


  </div>


</template>

<script>

import {useAccountStore} from "@/stores/account.js";
import {mapStores} from "pinia";
import {AxiosError} from "axios";

export default {
  name: "Log in",
  data() {
    return {
      loginData: {
        email: null,
        password: null,
      },
      validationErrors: []
    }
  },

  computed: {
    ...mapStores(useAccountStore),
  },

  methods: {
    gotoRegister() {
      this.$emit('gotoRegister')
    },
    login() {
      this.validationErrors = [];
      axios.post(`/login`, this.loginData).then((response)=> {
        this.accountStore.fetchMyAccount()
      })
          .catch((error) => {

            // Access additional details or validation errors if available
            if (error.response.data && error.response.data.errors) {
              console.error("Validation errors:", error.response.data.errors);
              this.validationErrors = error.response.data.errors;
              console.log(this.validationErrors);
            }
          });
    },
  }

}
</script>


<style>


</style>