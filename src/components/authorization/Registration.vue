
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
            <input type="password" class="form-control my-2" placeholder="Password" v-model.trim="registerData.password">
<<<<<<< HEAD
            <input type="password" class="form-control" placeholder="Password confirmation" v-model.trim="registerData.password_confirmation">
=======
            <input type="password" class="form-control" placeholder="Password confirmation" v-model.trim="registerData.confirmPassword">
>>>>>>> f8fc1191a9571902b96b061b1007b5e92f75cac6

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
      }
    }
  },

  methods: {
    gotoLogin() {
      this.$emit('gotoLogin')
    },

    register() {
      axios.post(`/register`, this.registerData).then(()=> {
        this.accountStore.fetchMyAccount()
        axios.post('/register', this.registerData).then((response) => {
          console.log(response);
        })
      })
  }
},}
</script>

<style>

</style>