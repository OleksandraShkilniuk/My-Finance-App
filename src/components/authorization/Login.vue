
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

          <input type="text" class="form-control my-2" placeholder="Email">
          <input type="password" class="form-control" placeholder="Password">
        </form>
      </div>
    </div>

    <button type="button" class="btn btn-primary m-3">Sign In</button>

    <p class="account-no">Don’t have an account?</p>

    <button type="button" class="my-3 btn-style" @click="gotoRegister">Sign Up</button>


  </div>


</template>

<script>
export default {
  name: "Log in",

  methods: {
    gotoRegister() {
      this.$emit('gotoRegister')
    }
  }

}
</script>


<style>


</style>