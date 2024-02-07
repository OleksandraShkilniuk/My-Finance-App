
<template>

  <div class="d-flex my-4 justify-content-around summary-balance">

    <div @click="coreState('expenses')">
      <font-awesome-icon :icon="'money-bills'"/>
      <p class="text-danger">-12000</p>
      <div class="expenses">Expenses</div>
    </div>

    <div @click="coreState('incomes')">
      <font-awesome-icon :icon="'building-columns'"/>
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
import {mapStores} from "pinia";
import {useCoreStore} from "@/stores/core.js";

export default {
  name: "SummaryBalance",

  computed: {
    ...mapStores(useCoreStore)
  },
  methods: {
    coreState(state) {
      this.coreStore.state = state
    }

  }
}
</script>


<style scoped>

</style>