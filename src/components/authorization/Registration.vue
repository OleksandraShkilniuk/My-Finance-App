
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
          <form action="#" method="post">

            <input type="text" class="form-control my-2" placeholder="Name">
            <input type="email" class="form-control my-2" placeholder="Email">
            <input type="password" class="form-control my-2" placeholder="Password">
            <input type="password" class="form-control" placeholder="Password confirmation">
          </form>
        </div>
      </div>

<!--      Form end-->

      <button type="button" class="btn btn-primary m-3">Sign In</button>

      <p class="account-no">Have an account?</p>

      <button type="button" class="my-2 btn-style" @click="gotoLogin">Sign In</button>


    </div>
  </div>

</template>

<script>
export default {
  name: "Registration",

  methods: {
    gotoLogin() {
      this.$emit('gotoLogin')
    }
  }
}
</script>

<style>

</style>