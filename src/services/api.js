import axios from 'axios'

const ApiService = {
  get(url, options) {
    return axios.get(url, options)
  },

  post(url, data) {
    return axios.post(url, data)
  },

  put(url, data) {
    return axios.put(url, data)
  },

  patch(url, data) {
    return axios.patch(url, data)
  },

  delete(url) {
    return axios.delete(url)
  }
}

export default ApiService
