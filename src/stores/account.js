import {defineStore} from 'pinia'

export const useAccountStore = defineStore('account', {


state: ()=> {
  return {
    account: null,
  }
},

  getters: {

    isAuthenticated: (state) => !!state.account,

  },

  actions: {
  async fetchMyAccount() {
    axios.get(`/my-account`).then((response)=> {
      console.log(response.data)
      this.account = response.data;
    }).catch((error) => {
<<<<<<< HEAD
=======
          console.log('Error');
>>>>>>> f8fc1191a9571902b96b061b1007b5e92f75cac6
          this.account = null;
        })
  }

  }


})