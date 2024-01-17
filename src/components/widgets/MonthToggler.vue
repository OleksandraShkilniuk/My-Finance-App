

<template>

  <div class="container my-4 d-flex justify-content-between">

    <div class="arrow-left"></div>

    <div class="date d-flex justify-content-between align-items-center">
      <font-awesome-icon :icon="'calendar'" />
      <div>May, 2021</div>
    </div>


    <div class="arrow-right"></div>
  </div>

</template>

<script>
export default {
  name: "MonthToggler"
}
</script>

<style scoped>

.arrow-left {
  background: url("../.././icons/Arrow.svg") no-repeat center;
  width: 24px;
  height: 24px;
}
.arrow-right {
  background: url("../.././icons/Arrow.svg") no-repeat center;
  width: 24px;
  height: 24px;
  transform: scaleX(-1);
}

.date {
  background: var(--Grey-100, #F5F5F5);
  border-radius: 50px;
  width: 124px;
  height: 32px;
  padding: 8px 12px;
}


</style>