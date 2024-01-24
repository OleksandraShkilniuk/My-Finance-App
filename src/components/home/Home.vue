

<template>
<!--  container for home page-->
  <div class="container">

<!--    toolbar-->

    <toolbar/>

<!--    month toggler-->
    <month-toggler/>

<!--    summary balance-->

    <summary-balance/>

<!--    day expenses list-->

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

  </div>


</template>

<script>
import Toolbar from "@/components/widgets/Toolbar.vue";
import MonthToggler from "@/components/widgets/MonthToggler.vue";
import SummaryBalance from "@/components/widgets/SummaryBalance.vue";
import TransactionForm from "@/components/widgets/TransactionForm.vue";

export default {
  name: "Home",
  components:{Toolbar, MonthToggler, SummaryBalance, TransactionForm}
}
</script>

<style>


</style>