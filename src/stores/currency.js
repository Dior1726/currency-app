import { defineStore } from 'pinia'
import CurrencyService from '../services/currency'

export const useCurrencyStore = defineStore({
  id: 'currency',
  state: () => ({
    currencyList: [],
    symbols: [],
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
      try {
        const response = await CurrencyService.get(payload)
        console.log(response);
        // this.currencyList = response.data
      } catch (error) {
        console.error(error);
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