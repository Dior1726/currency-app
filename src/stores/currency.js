import { defineStore } from 'pinia'
import CurrencyService from '../services/currency'

export const useCurrencyStore = defineStore({
  id: 'currency',
  state: () => ({
    convertResult: null,
    symbols: [],
    loading: false,
  }),
  getters: {
    transformedSymbols: (state) => {
      const result = []

      for (const [key, value] of Object.entries(state.symbols)) {
        result.push({
          value: key,
          label: value
        })
      }

      return result
    }
  },
  actions: {
    async getCurrency(payload) {
      this.loading = true
      try {
        const response = await CurrencyService.get(payload)
        this.convertResult = response.data.result
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false
      }
    },
    async getSymbols(payload) {
      try {
        const response = await CurrencyService.getSymbols(payload)
        this.symbols = response.data.symbols
      } catch (error) {
        console.error(error);
      }
    }
  }
})