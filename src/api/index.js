import axios from 'axios'

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data.data;
})

export let getHome = function() {
  return axios.get('/static/mock/index.json')
}

export let getCity = function() {
  return axios.get('/static/mock/city.json')
}

export let getDetail = function(id) {
  return axios.get('/static/mock/detail/' + id + '.json')
}

export let getWeek = function(id) {
  return axios.get('./static/mock/week/' + id + '.json')
}

