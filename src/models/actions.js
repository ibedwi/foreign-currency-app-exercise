import services from './services'

const fetchLatest = ( base ) => {
  return new Promise((resolve, reject) => {
    services.fetchLatest(base).then( res => {
      resolve(res)
    }).catch( err => {
      reject(err);
    })
  })
}

export default {
  fetchLatest
}