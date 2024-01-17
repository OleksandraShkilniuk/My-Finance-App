
<template>
  <h2>Registration</h2>

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
.container {
  font-family: Inter, sans-serif;
  font-size: 13px;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  margin-left: 16px;
  margin-right: 16px;
}

.logo {
  background: url("../.././icons/Kitty-Logo.svg") center;
  background-size: contain;
  width: 86px;
  height: 86px;
}
.naming {
  color: var(--Grey-800, #424242);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 44px;
  margin-top: 12px;
}

.create-acc {
  color: var(--Grey-800, #424242);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}



</style>