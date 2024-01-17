

<template>
  <h3>HOME</h3>

  <toolbar/>

  <month-toggler/>

  <summary-balance/>

<!--  todo: make a mark up for it-->
  <div>Today</div>
  <div>Yesterday</div>

  <settings/>


</template>

<script>
import Toolbar from "@/components/widgets/Toolbar.vue";
import MonthToggler from "@/components/widgets/MonthToggler.vue";
import SummaryBalance from "@/components/widgets/SummaryBalance.vue";
import TransactionForm from "@/components/widgets/TransactionForm.vue";
import Settings from "@/components/settings/Settings.vue";
export default {
  name: "Home",
  components:{Toolbar, MonthToggler, SummaryBalance, TransactionForm, Settings}
}
</script>

<style>

</style>