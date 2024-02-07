

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

    <div class="categories my-3 row category-balance-box">
        <div
            v-for="category in categories"
            :key="category.id"
            class="d-flex flex-column col-4 align-items-center"
            @click="addTransactionToCategory(category)"
        >
          <p class="title mb-0">{{category.title}}</p>

          <div>
            <div class="icon-category d-flex justify-content-center align-items-center">
              <font-awesome-icon :icon="`${category.icon}`"/>
            </div>
          </div>

          <p class=" mt-0"
             :class="{
              'income' : coreStore.state === 'incomes',
              'expenses' : coreStore.state === 'expenses'}"
          >600</p>


      </div>
      </div>

  </div>


</template>

<script>
import Toolbar from "@/components/widgets/Toolbar.vue";
import MonthToggler from "@/components/widgets/MonthToggler.vue";
import SummaryBalance from "@/components/widgets/SummaryBalance.vue";
import TransactionForm from "@/components/widgets/TransactionForm.vue";
import {mapStores} from "pinia";
import {useCategoriesStore} from "@/stores/categories.js";
import {useCoreStore} from "@/stores/core.js";
import {useTransactionsStore} from "@/stores/transactions.js";

export default {
  name: "Home",
  data() {
    return{

    }
  },
  components:{Toolbar, MonthToggler, SummaryBalance, TransactionForm},
  computed: {
    ...mapStores(useCategoriesStore, useCoreStore, useTransactionsStore),

    categories() {
      if(this.coreStore.state === 'incomes') {
        return this.categoriesStore.incomesCategories
      }

      else if(this.coreStore.state === 'expenses') {
        return this.categoriesStore.expensesCategories
      }

      else {
        return this.categoriesStore.categories

      }
    }
  },
  methods: {
    addTransactionToCategory(category) {
      this.transactionsStore.formTransaction = {
        category_id: category.id,
        type: category.type,
      };
      this.transactionsStore.showDeleteSign = false;

      this.transactionsStore.showForm=true;
    }

  },
  created() {
    this.categoriesStore.fetchCategories()
    this.transactionsStore.fetchTransactions()
  }

}
</script>

<style>
p.income {
  color: green
}

p.expenses{
  color: red
}


</style>