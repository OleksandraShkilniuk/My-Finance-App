
<template>

  <auth-index v-if="!isAuthenticated"/>

  <!--  todo: fix container so it will be equal-->

  <div class="container" v-if="isAuthenticated">
    <div v-if="activePage === 'Home'">



<!--     todo pass value from child component-->

      <home/>

    </div>
    <div v-if="activePage === 'History'">

      <history/>

    </div>
  </div>



</template>

<script>

import AuthIndex from "@/components/authorization/AuthIndex.vue";
import Home from "@/components/home/Home.vue";
import History from "@/components/history/History.vue";
import Settings from "@/components/settings/Settings.vue";
import MonthToggler from "@/components/widgets/MonthToggler.vue";
import SummaryBalance from "@/components/widgets/SummaryBalance.vue";

export default {
  data(){
    return {
      registration: true,
      activePage: 'Home'

    }
  },

  components:{SummaryBalance, MonthToggler, AuthIndex, Home, History, Settings},

  computed: {
    isAuthenticated() {
      return true;
    }
  }

}

</script>


<style scoped>

</style>
