

<template>
  <div class="row justify-content-between align-content-center">

    <div class="col-auto">

      <div class="row">
        <div class="logo-widget col"></div>
        <p class="naming-widget col">Kitty</p>
      </div>

          </div>


      <div class="col-auto">
        <div class="row">
          <font-awesome-icon class="col glass" :icon="'magnifying-glass'"/>
          <div class="user-icon col">M</div>
      </div>
        </div>

          </div>

</template>

<script>
export default {
  name: "Toolbar"
}
</script>

<style>

.logo-widget {
  background: url("../.././icons/Kitty-Logo.svg") no-repeat center;
  background-size: contain;
  width: 32px;
  height: 32px;
}
.naming-widget {
  color: var(--Grey-800, #424242);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
}

.user-icon {
  background-color: mediumpurple;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

}

.glass {
  width: 24px;
  height: 24px;
  margin-right: 16px;
}


</style>