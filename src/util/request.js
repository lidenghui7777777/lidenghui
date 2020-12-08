import axios from 'axios'
import qs from 'qs'
axios.interceptors.response.use(res=>{
    console.log('======================请求的路径:'+res.config.url+'========================')
    console.log(res)
    return res
})


export const reqMenuAdd=()=>{
    return axios({
        url:'/api/menuadd',
        method:'post',
    })
}