
<template>

  <div class="d-flex my-4 justify-content-around summary-balance">

    <div>
      <font-awesome-icon :icon="'money-bills'" />
      <p class="text-danger">-12000</p>
      <div class="expenses">Expenses</div>
    </div>

    <div>
      <font-awesome-icon :icon="'building-columns'" />
      <p class="text-success">-12000</p>
      <div class="income">Income</div>
    </div>


    <div>
      <font-awesome-icon :icon="'wallet'" />
      <p>-12000</p>
      <div class="balance">Balance</div>
    </div>

  </div>

</template>

<script>
export default {
  name: "SummaryBalance"
}
</script>


<style scoped>

</style>