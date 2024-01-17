
<template>

  <h1>Login</h1>
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

.btn-style {
  text-decoration: none;
  padding: 5px 12px;
  width: 80px;
  height: 30px;
  border: black solid 1px;
  color: black;

}

.form-inputs{
  width: 300px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.account-no {
  color: var(--Grey-800, #424242);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
}

</style>