
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

          <input type="text" class="form-control my-2" placeholder="Email" v-model.trim="loginData.email">
          <input type="password" class="form-control" placeholder="Password" v-model.trim="loginData.password">
        </form>
      </div>
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
      }
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
      axios.post(`/login`, this.loginData).then((response)=> {
        this.accountStore.fetchMyAccount()
      })
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
    }
  }

}
</script>


<style>


</style>