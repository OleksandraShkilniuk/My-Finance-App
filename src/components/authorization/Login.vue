
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
    }
  }

}
</script>


<style>


</style>