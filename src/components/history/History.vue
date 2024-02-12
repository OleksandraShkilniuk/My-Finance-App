<template>

  <div class="container">

    <toolbar/>


    <month-toggler/>


    <summary-balance/>
    <div class="my-4 day-expenses"
         v-for="(group, date) in groupedObjects" :key="date"
    >

      <div class="d-flex justify-content-between">
        <div>
          {{ date }}
        </div>
        <div>
          Amount
        </div>
      </div>

      <div class="d-flex my-3 justify-content-between align-items-baseline"
      v-for="transaction in group"
           :key="transaction.id"
           @click="editTransaction(transaction)"
      >

        <div class="d-flex align-items-center text-start">

          <div class="icon-category mx-2 d-flex justify-content-center align-items-center">
            <div>
              <font-awesome-icon :icon="`${categoriesStore.getCategory(transaction.category_id)?.icon}`"/>
            </div>
          </div>

          <div>
            <div class="name-category">{{transaction.description}}</div>
            <div class="name-category">{{categoriesStore.getCategory(transaction.category_id)?.title}}</div>
          </div>

        </div>

        <div class="amount-category">{{transaction.amount}}</div>
      </div>
    </div>
    <div class="space"></div>
  </div>

</template>

<script>
import MonthToggler from "@/components/widgets/MonthToggler.vue";
import SummaryBalance from "@/components/widgets/SummaryBalance.vue";
import Toolbar from "@/components/widgets/Toolbar.vue";
import TransactionForm from "@/components/widgets/TransactionForm.vue";
import {mapStores} from "pinia";
import {useTransactionsStore} from "@/stores/transactions.js";
import {useCategoriesStore} from "@/stores/categories.js";


export default {
  name: "History",
  components: {Toolbar, MonthToggler, SummaryBalance, TransactionForm},
  computed:{
    ...mapStores(useTransactionsStore, useCategoriesStore,),
    groupedObjects() {
      return this.transactionsStore.transactions.reduce((groups, item) => {
        const date = new Date(item.created_at).toLocaleDateString(undefined, {
          month: 'short', // Abbreviated month name (e.g., "Feb")
          day: 'numeric', // Numeric day (e.g., "07")
          year: 'numeric' // Full year (e.g., "2024")
        });
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(item);
        console.log(groups[item])
        return groups;
      }, {});
    }
  },

  methods: {
    editTransaction(transaction) {
      this.transactionsStore.formTransaction = {...transaction};
      this.transactionsStore.showDeleteSign = true;
      this.transactionsStore.showForm=true;
    }
  }
}
</script>

