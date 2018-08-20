import axios from 'axios'
import serviceBase from '../serviceBase'
const CurrentInterface = serviceBase.url + 'user/'
const PostService = {
  // 获取所有公告信息
  loadPostList: (info) => {
    return axios.get(CurrentInterface + 'post', info)
  }

}
export default PostService
