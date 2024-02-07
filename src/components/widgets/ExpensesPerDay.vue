<script>
export default {
  name: "ExpensesPerDay"
}
</script>

<template>
  <div class="my-2 day-expenses">

    <div class="d-flex justify-content-between">
      <div>
        Date
      </div>
      <div>
        Amount
      </div>
    </div>

    <div class="d-flex my-3 justify-content-between">

      <div class="d-flex align-items-baseline">

        <div class="icon-category mx-2 d-flex justify-content-center align-items-center">
          <div>
            <font-awesome-icon :icon="'basket-shopping'" />
          </div>
        </div>

        <div class="name-category">Name of category</div>

      </div>

      <div class="amount-category">-500</div>
    </div>

  </div>


  <!--  NEXT DAY-->
  <div class="my-4 day-expenses">

    <div class="d-flex justify-content-between">
      <div>
        Date
      </div>
      <div>
        Amount
      </div>
    </div>

    <div class="d-flex my-3 justify-content-between">

      <div class="d-flex align-items-baseline">

        <div class="icon-category mx-2 d-flex justify-content-center align-items-center">
          <div>
            <font-awesome-icon :icon="'screwdriver-wrench'" />
          </div>
        </div>

        <div class="name-category">Name of category</div>

      </div>

      <div class="amount-category">-500</div>
    </div>

  </div>

  <div class="space"></div>
</template>

<style scoped>

</style>