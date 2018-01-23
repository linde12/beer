import Vue from 'vue'
const endpoint = 'https://api.punkapi.com/v2/beers'

export default {
  beers(params = {}) {
    return Vue.http.get(endpoint, {
      params: params,
    })
  }
}
