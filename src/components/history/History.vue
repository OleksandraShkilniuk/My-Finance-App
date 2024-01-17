
<template>

  <toolbar/>

  <month-toggler/>

  <summary-balance/>

  <settings/>



</template>

<script>
import MonthToggler from "@/components/widgets/MonthToggler.vue";
import SummaryBalance from "@/components/widgets/SummaryBalance.vue";
import Settings from "@/components/settings/Settings.vue";
import Toolbar from "@/components/widgets/Toolbar.vue";

export default {
  name: "History",
  components: {Toolbar, MonthToggler, SummaryBalance, Settings}
}
</script>


<style scoped>

</style>