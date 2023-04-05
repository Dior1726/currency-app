import ApiService from './api'
const API_KEY = "5DIWNdTaypDSN3ITzaoi6DzQXIhjvrX2"

const CurrencyService = {
  async get(params) {
    const options = {
      params,
      headers: {'apiKey': API_KEY}
    }

    const response = await ApiService.get('https://api.apilayer.com/fixer/convert', options)
    return response
  },

  async getSymbols(params) {
    const options = {
      params,
      headers: {'apiKey': API_KEY}
    }

    const response = await ApiService.get('https://api.apilayer.com/fixer/symbols', options)
    return response
  },

  async getCurrencyRates() {
    const options = {
      headers: {'apiKey': API_KEY},
      params: {
        base: 'KZT',
        symbols: 'KWD,GBP,EUR,USD,AED,AUD,RUB,KGS,KRW,UZS'
      },
    }

    const response = await ApiService.get('https://api.apilayer.com/fixer/latest', options)
    return response
  }
}

export default CurrencyService