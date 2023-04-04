import ApiService from './api'

const CurrencyService = {
  async get(params) {
    const options = {
      params,
      headers: {'apiKey': 'r0ifMhS3OpJV67E8qX6TShTeyOcumztX'}
    }

    const response = await ApiService.get('https://api.apilayer.com/fixer/convert', options)
    return response
  },
  async getSymbols(params) {
    const options = {
      params,
      headers: {'apiKey': 'r0ifMhS3OpJV67E8qX6TShTeyOcumztX'}
    }

    const response = await ApiService.get('https://api.apilayer.com/fixer/symbols', options)
    return response
  }
}

export default CurrencyService