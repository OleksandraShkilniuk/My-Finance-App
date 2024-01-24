
<template>

  <div class="container">

    <toolbar/>


    <month-toggler/>


    <summary-balance/>

<!--    ROW 1-->

<!--ROW 2-->
      <div class="categories my-3 d-flex justify-content-around">

        <div class="d-flex flex-column align-items-center">
          <p class=" mb-0">Title</p>

          <div>
            <div class="icon-category d-flex justify-content-center align-items-center">
              <font-awesome-icon :icon="'basket-shopping'" />
            </div>
          </div>

          <p class=" mt-0">600</p>
        </div>


        <div class="d-flex flex-column align-items-center">
          <p class=" mb-0">Title</p>

          <div>
            <div class="icon-category d-flex justify-content-center align-items-center">
              <font-awesome-icon :icon="'basket-shopping'" />
            </div>
          </div>

          <p class=" mt-0">600</p>
        </div>


        <div class="d-flex flex-column align-items-center">
          <p class=" mb-0">Title</p>

          <div>
            <div class="icon-category d-flex justify-content-center align-items-center">
              <font-awesome-icon :icon="'basket-shopping'" />
            </div>
          </div>

          <p class=" mt-0">600</p>
        </div>


          </div>

  </div>



</template>

<script>
import MonthToggler from "@/components/widgets/MonthToggler.vue";
import SummaryBalance from "@/components/widgets/SummaryBalance.vue";
import Toolbar from "@/components/widgets/Toolbar.vue";

export default {
  name: "History",
  components: {Toolbar, MonthToggler, SummaryBalance}
}
</script>


<style scoped>


</style>