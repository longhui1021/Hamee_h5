import axios from 'axios'
import { message } from 'antd';
import {encryption} from './encryption'

// 创建axios实例
const service = axios.create({
  baseURL: 'https://api.hamee.id', // http://staging.yogrt.co:801   https://api.hamee.id
  timeout: 15000 // 请求超时时间
})

axios.defaults.withCredentials = true

// request拦截器
service.interceptors.request.use(config => {
  if(config.url !== "/user/getKey"){
    config.headers['decry-content'] = encryption()
  }
  return config
}, error => {
  console.error(error) 
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if(res.code){
        if (res.code !== 0) {
            message.error(res.msg);
            // console.log(res)
        }
    }
    return response.data
  },
  error => {
    message.error(error.message)
    // console.log(error)
  }
)

export default service
