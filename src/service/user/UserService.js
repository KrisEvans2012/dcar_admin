import axios from 'axios'
import serviceBase from '../serviceBase'
const CurrentInterface = serviceBase.url
const UserService = {
  // 获取所有用户信息
  loadUserList: (info) => {
    return axios.get(CurrentInterface + 'user', info)
  }

}
export default UserService
