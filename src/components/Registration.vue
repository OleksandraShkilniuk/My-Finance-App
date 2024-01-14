
<template>
  <div class="container container-fluid">

    <p>Registration</p>

    <div class="logo"></div>
    <p class="naming">Kitty</p>
    <p class="create-acc">Create an account</p>

  </div>

  <button class="btn btn-primary">
      Click on be
    <font-awesome-icon icon="magnifying-glass" />
  </button>
</template>

<script>
export default {
  name: "Registration"
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
}

.logo {
  background: url(".././icons/Kitty-Logo.svg") center;
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
}

.create-acc {
  color: var(--Grey-800, #424242);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}



</style>