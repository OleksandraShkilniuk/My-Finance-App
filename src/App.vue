
<template>

  <div v-if="registration">
    <registration/>
  </div>

    <div v-if="registration===false">
      <login/>

    </div>







</template>

<script>

import Registration from "@/components/Registration.vue";
import Login from "@/components/Login.vue";

export default {
  data(){
    return {
      registration: true,

    }
  },

  components:{Registration, Login}

}

</script>


<style scoped>

</style>
