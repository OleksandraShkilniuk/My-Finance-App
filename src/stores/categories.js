import {defineStore} from 'pinia'

export const useCategoriesStore = defineStore('categories', {


    state: () => {
        return {
            categories: []
        }
    },

    getters: {
        incomesCategories:(state) => state.categories.filter((category) =>{
           return category.type === 'incomes'
        }),
        expensesCategories:(state) => state.categories.filter((category) =>{
            return category.type === 'expenses'
        })


    },

    actions: {
        async fetchCategories() {
            axios.get('/categories').then((response) => {
                this.categories = response.data;
            })
                .catch((error) => {
                    console.log(error);
                })
        },
        getCategory(categoryId) {
            return this.categories.find((item)=> item.id === categoryId)
        }

    }


})