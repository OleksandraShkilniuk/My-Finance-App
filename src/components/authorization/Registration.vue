<template>

  <div class="container container-fluid">

    <!--    Logo-->
    <div class="container container-fluid">
      <div class="d-flex justify-content-center row">
        <div class="logo"></div>
        <p class="naming">Kitty</p>
      </div>
      <p class="create-acc">Create an account</p>

      <!--      Form-->

      <div class="center">
        <div class="form-inputs">


          <input type="text" :class="{'is-invalid': validationErrors.name && validationErrors.name.length}" class="form-control my-2"
                 placeholder="Name" v-model.trim="registerData.name">

          <div v-if="validationErrors.name" class="invalid-feedback" v-for="error in validationErrors.name"
          :key="error">
            {{ error }}
          </div>


          <input type="email" :class="{'is-invalid': validationErrors.email && validationErrors.email.length}" class="form-control my-2"
                 placeholder="Email" v-model.trim="registerData.email">


          <div v-if="validationErrors.email" class="invalid-feedback"
          v-for="emaliError in validationErrors.email">
            {{ emaliError }}
          </div>


          <input type="password" :class="{'is-invalid': validationErrors.password && validationErrors.password.length}" class="form-control my-2"
                 placeholder="Password" v-model.trim="registerData.password">

          <div v-if="validationErrors.password" class="invalid-feedback">
            {{ validationErrors.password[0] }}
          </div>


          <input type="password" :class="{'is-invalid': validationErrors.password && validationErrors.password.length}" class="form-control"
                 placeholder="Password confirmation" v-model.trim="registerData.password_confirmation">
          <div v-if="validationErrors.password" class="invalid-feedback">
            {{ validationErrors.password[1]}}
          </div>
        </div>
      </div>

      <!--      Form end-->

      <button type="button" class="btn btn-primary m-3" @click="register">Sign Up</button>

      <p class="account-no">Have an account?</p>

      <button type="button" class="my-2 btn-style" @click="gotoLogin">Sign In</button>


    </div>
  </div>

</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      registerData: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
      validationErrors: []
    }
  },

  methods: {
    gotoLogin() {
      this.$emit('gotoLogin')
    },

    register() {
      axios.post(`/register`, this.registerData).then((response) => {
        this.accountStore.fetchMyAccount()
        console.log(response)
      })
          .catch((error) => {

            // Access additional details or validation errors if available
            if (error.response.data && error.response.data.errors) {
              this.validationErrors = error.response.data.errors;
              console.error(this.validationErrors);
            }
          });
    }
  },
}
</script>

<style>

</style>