
<template>

  <auth-index v-if="!isAuthenticated"/>

  <div v-if="isAuthenticated">

    <div>

      <home v-if="activePage === 'Home'"/>
      <history v-if="activePage === 'History'"/>
      <settings-account-index v-if="activePage === 'UserSettings'"/>

    </div>

      <transaction-form v-if="transactionForm"/>


    <div>
      <div class="d-flex align-items-center toolbar">
        <div class="col" @click="activePage='History'" :class="{active: activePage === 'History'}">
          <font-awesome-icon :icon="'chart-pie'" />
          <a href="#">History</a>
        </div>
        <div class="col" @click="activePage='Home'" :class="{active: activePage === 'Home'}">
          <font-awesome-icon :icon="'house'" />
          <a href="#">Home</a>
        </div>
        <div class="col" @click="activePage='UserSettings'" :class="{active: activePage === 'UserSettings'}">
          <font-awesome-icon :icon="'gear'" />
          <a href="#">Settings</a>
        </div>
      </div>
    </div>
  </div>




</template>

<script>

import AuthIndex from "@/components/authorization/AuthIndex.vue";
import Home from "@/components/home/Home.vue";
import History from "@/components/history/History.vue";
import MonthToggler from "@/components/widgets/MonthToggler.vue";
import SummaryBalance from "@/components/widgets/SummaryBalance.vue";
import SettingsAccountIndex from "@/components/settings_components/SettingsAccountIndex.vue";
import TransactionForm from "@/components/widgets/TransactionForm.vue";
import {useAccountStore} from "@/stores/account.js";
import {mapStores} from 'pinia';
export default {
  data(){
    return {
      registration: false,
      activePage: 'Home',
      transactionForm: true,

    }
  },

  components:{
    SettingsAccountIndex, SummaryBalance,
    MonthToggler, AuthIndex,
    Home, History,TransactionForm,
  },

  computed: {
    ...mapStores(useAccountStore),
    isAuthenticated() {
      console.log(this.accountStore.isAuthenticated)
      return this.accountStore.isAuthenticated;
    }
  },

  created() {
    this.accountStore.fetchMyAccount()
  }

}

</script>


<style>

</style>
