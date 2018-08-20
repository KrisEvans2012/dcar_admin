import axios from 'axios'
axios.defaults.headers.common['token'] = '123'
const serviceBase = {
  url: 'http://192.168.1.100:3000/',
  headers: new Headers({ 'Content-Type': 'application/json' })
}
export default serviceBase
