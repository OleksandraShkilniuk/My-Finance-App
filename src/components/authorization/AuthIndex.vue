

<template>


  <h2>auth Indec</h2>
  <login v-if="activePage === 'login'" @gotoRegister="activePage='registration'"/>

  <registration v-if="activePage === 'registration'" @gotoLogin="activePage='login'"/>

</template>

<script>

import Login from "@/components/authorization/Login.vue";
import Registration from "@/components/authorization/Registration.vue";


export default {
  name: "AuthIndex.vue",
  data() {
    return{
      activePage: 'login'
    }
  },

  components: {Login, Registration}
}
</script>

<style scoped>

</style>