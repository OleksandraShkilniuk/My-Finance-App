import {defineStore} from 'pinia'

export const useTransactionsStore = defineStore('transactions', {


    state: () => {
        return {
            showForm: false,
            formTransaction: {},
            transactions: [],
            showDeleteSign: false,
        }
    },

    getters: {

    },

    actions: {
        async fetchTransactions() {
            axios.get('/transactions').then((response) => {
                this.transactions = response.data;
            })
                .catch((error) => {
                    console.log(error);
                })
        },

        save() {

            if (this.formTransaction.id) {

                axios.put(`/transactions/${this.formTransaction.id}`, this.formTransaction)
                    .then((response) => {
                        let index = this.transactions.findIndex((item) => item.id === this.formTransaction.id)

                        if(index !== -1) {
                            this.transactions[index] = response.data
                        }
                        this.showForm = false;
                    })
                    .catch((error) => {
                        console.log('Error', error)
                    })

            } else {
                axios.post('/transactions', this.formTransaction)
                    .then((response) => {
                        this.transactions.push(response.data)
                        this.showForm = false;
                    })
                    .catch((error) => {
                        console.log('Error', error)
                    })
            }

        },

        deleteTransaction() {
            if (this.formTransaction.id) {
                axios.delete(`/transactions/${this.formTransaction.id}`)
                    .then((response) => {
                        let index = this.transactions.findIndex((item) => item.id === this.formTransaction.id)

                        if(index !== -1) {
                            this.transactions.splice(index,1)
                        }
                        this.showForm = false;
                    })
                    .catch((error) => {
                        console.log('Error', error)
                    })
            }

        }
    }

})