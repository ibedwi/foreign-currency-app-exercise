import axios from 'axios';

var main = axios.create({
  baseURL: 'https://api.exchangeratesapi.io'
})


const fetchLatest = ( base ) => {
  console.log('client > base', base);
  return main.get(`/latest?base=${base}`);
}

export default {
  fetchLatest
}