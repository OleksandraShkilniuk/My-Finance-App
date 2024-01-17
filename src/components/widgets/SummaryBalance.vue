
<template>

  <div class="d-flex justify-content-around summary-balance">

    <div>
      <font-awesome-icon :icon="'money-bills'" />
      <p>-12000</p>
      <div class="expenses">Expenses</div>
    </div>

    <div>
      <font-awesome-icon :icon="'wallet'" />
      <p>-12000</p>
      <div class="balance">Balance</div>
    </div>

    <div>
      <font-awesome-icon :icon="'building-columns'" />
      <p>-12000</p>
      <div class="income">Income</div>
    </div>

  </div>

</template>

<script>
export default {
  name: "SummaryBalance"
}
</script>


<style scoped>

.summary-balance {
  border: 1px solid var(--Grey-300, #E0E0E0);
  padding: 16px 24px;
  margin-left: 100px;
  margin-right: 100px;
  border-radius: 8px;
}

</style>