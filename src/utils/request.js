import axios from 'axios'
import { toast } from 'react-toastify';
// import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_BASE_API, // api的base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')// 让每个请求携带自定义token 请根据实际情况自行修改
    }
    config.headers['Cache-Control'] = 'no-cache';
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== 0) {
      if(res.code === -1000){
        return Promise.reject(res)
      }

      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 401) {
          localStorage.clear()
          toast('請鏈接錢包重新登錄', {type: 'error'})
          return Promise.reject(res)
      }
      toast(res.msg, {type: 'error'})
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log(error) // for debug
    let msg = '網絡出錯了'
    if (error.response && error.response.data && error.response.data.msg) {
      msg = error.response.data.msg
    }
    toast(msg, {type: 'error'})
    return Promise.reject(error)
  }
)

export default service
