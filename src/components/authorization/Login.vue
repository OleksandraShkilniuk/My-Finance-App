
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



          <input :class="validationErrors.email ? 'is-invalid' : ''" type="text" class="form-control my-2" placeholder="Email" v-model.trim="loginData.email">

<!--          no email-->

          <div v-if="validationErrors.email" class="invalid-feedback">
            *{{validationErrors.email[0]}}
          </div>

          <input :class="{ 'is-invalid': validationErrors.password || (validationErrors.email && !!loginData) }" type="password" class="form-control" placeholder="Password" v-model.trim="loginData.password">

          <!--          no password-->

          <div v-if="validationErrors.password" class="invalid-feedback">
            *{{validationErrors.password[0]}}
          </div>

          <!--          credentials are wrong-->

          <div v-if="validationErrors.password && validationErrors.email && !loginData" class="invalid-feedback">
            *{{validationErrors.email[0]}}
          </div>

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
              this.validationErrors = error.response.data.errors;
              console.error(this.validationErrors);
            }
          });
    },
  }

}
</script>


<style>


</style>