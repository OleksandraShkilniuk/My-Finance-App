<template>
  <div class="background-container" v-if="transactionsStore.showForm===true"
       @click.self="transactionsStore.showForm=false"
  >

    <div class="form-container">

      <div class="d-flex align-items-baseline justify-content-between">
        <div class="row flex-nowrap align-items-baseline">
          <div class="icon-category mx-2 d-flex justify-content-center align-items-center">
            <font-awesome-icon :icon="`${categoriesStore.getCategory(transactionsStore.formTransaction.category_id)?.icon}`"/>
          </div>
          <p>{{categoriesStore.getCategory(transactionsStore.formTransaction.category_id)?.title}}</p>
        </div>

        <font-awesome-icon
            :icon="'trash'"
            v-if="transactionsStore.showDeleteSign"
            @click="transactionsStore.deleteTransaction"
        />

      </div>


      <div class="d-flex justify-content-center align-items-center flex-column">

        <input type="text"
               class=" form-inputs-transaction my-2"
               placeholder="    Enter amount"
               v-model="transactionsStore.formTransaction.amount"
        >

        <input type="text"
               class=" form-inputs-transaction my-2"
               placeholder="    Description (optional)"
               v-model="transactionsStore.formTransaction.description"
        >

      </div>
      <div class="d-flex justify-content-center align-items-center">
        <button type="button" class="btn btn-primary my-1 button-add"
                @click="transactionsStore.save">Add</button>
      </div>

    </div>

  </div>


</template>

<script>
import {mapStores} from "pinia";
import {useTransactionsStore} from "@/stores/transactions.js";
import {useCategoriesStore} from "@/stores/categories.js";

export default {
  name: "TransationForm",

  computed: {
    ...mapStores(useTransactionsStore, useCategoriesStore)
  }
}
</script>

<style scoped>


</style>