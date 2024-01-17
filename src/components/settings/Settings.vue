

<template>

  <div class="d-flex align-items-center toolbar">
    <div class="col chosen">
      <font-awesome-icon :icon="'chart-pie'" />
      <a href="#">History</a>
    </div>
    <div class="col">
      <font-awesome-icon :icon="'house'" />
      <a href="#">Home</a>
    </div>
    <div class="col">
      <font-awesome-icon :icon="'gear'" />
      <a href="#">Settings</a>
    </div>
  </div>

</template>

<script>
export default {
  name: "Settings.vue"
}
</script>

<style scoped>
.toolbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
  background: var(--Grey-50, #FAFAFA);
  box-shadow: 0px -1px 0px 0px #E0E0E0;
  color: var(--Grey-800, #424242);
  height: 60px;
}

a{
  display: block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}


.chosen {
  color: black;
  border-bottom: dotted 1px mediumpurple;
}


</style>