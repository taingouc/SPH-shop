import axios from 'axios'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
const request = axios.create({
  baseURL: 'http://gmall-h5-api.atguigu.cn',
  timeout: 5000
})
request.interceptors.request.use((config) => {
  nProgress.start()
  return config
})
request.interceptors.response.use(
  (res) => {
    nProgress.done()
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default request
