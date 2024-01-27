
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

            <input type="text" class="form-control my-2" placeholder="Name" v-model.trim="registerData.name">
            <input type="email" class="form-control my-2" placeholder="Email" v-model.trim="registerData.email">


              <div v-if="validationErrors.email" class="error-container">
                *{{validationErrors.email[0]}}
              </div>

            <input type="password" class="form-control my-2" placeholder="Password" v-model.trim="registerData.password">

          <div v-if="validationErrors.password" class="error-container">
            *{{validationErrors.password[0]}}
          </div>

            <input type="password" class="form-control" placeholder="Password confirmation" v-model.trim="registerData.password_confirmation">
          <div v-if="validationErrors.password" class="error-container">
            *{{validationErrors.password[1]}}
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
    return{
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
      axios.post(`/register`, this.registerData).then((response)=> {
        this.accountStore.fetchMyAccount()
        console.log(response)
      })
          .catch((error) => {

            // Access additional details or validation errors if available
            if (error.response.data && error.response.data.errors) {
              console.error("Validation errors:", error.response.data.errors.email[0]);
              console.error("Validation errors:", error.response.data.errors.password[0]);
              console.error("Validation errors:", error.response.data.errors.password[1]);
              this.validationErrors = error.response.data.errors;
              console.log(this.validationErrors);

            }
          });
  }
},}
</script>

<style>
.error-container {
  color: red;
  text-align: left;
}

</style>