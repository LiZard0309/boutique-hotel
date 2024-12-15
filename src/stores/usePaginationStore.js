import {defineStore} from 'pinia'

export const usePaginationStore = defineStore('pagination', {
    state: () => ({
        currentPage: 1,
        perPage: 5
    }),
    actions: {
        setCurrentPage (currentPage) {
            this.currentPage = currentPage
        }
    }
})