import request from '../util/request.js';
import {getCookie} from '../util/Cookie';
import {encryption} from '../util/encryption'

// const ED_UUID = getCookie('publicKey')

const encryptionPW=(data)=>{
  if(data.passwd){
    let jsonData={
      timestamp:(new Date()).getTime(),
      passwrd:data.passwd
    }
    let pwd = encryption(data.passwd,getCookie('publicKey'))
    data.passwd = pwd
  }
  return data
}

// 获取弹幕
const getBarrageList=()=>{
  return request({
    url:'/user/name/list',
    method:'post',
    headers:{
      "ED-UUID":getCookie('publicKey'),
      "NETWORKSTATE":"wifi",
      "User-Platform":"web",
      "Market":"default",
      "Accept-Language":navigator.language,
      "n":"web",
      "t":'web'
    },
  })
}

// 获取商品列表
const getProducts=(params)=>{
  return request({
    url: '/product/getProductsForVip',
    method: 'get',
    headers:{
      "ED-UUID":getCookie('publicKey'),
      "NETWORKSTATE":"wifi",
      "User-Platform":"web",
      "Market":"default",
      "Accept-Language":navigator.language,
      "n":"web",
      "t":'web'
    },
    params
  })
}

// 获取商品详情
const getProductDetails=(id)=>{
  return request({
    url: '/product/detail/'+Number(id),
    headers:{
      "ED-UUID":getCookie('publicKey'),
      "NETWORKSTATE":"wifi",
      "User-Platform":"web",
      "Market":"default",
      "Accept-Language":navigator.language,
      "n":"web",
      "t":'web'
    },
    method: 'get',
  })
}

//新增收货地址
const addArea=(data)=>{
  return request({
    url:'/user/address/add',
    method:'post',
    headers:{
      "Content-Type":"application/json",
      "ED-UUID":getCookie('publicKey'),
      "NETWORKSTATE":"wifi",
      "User-Platform":"web",
      "Market":"default",
      "Accept-Language":navigator.language,
      "n":"web",
      "t":'web'
    },
    data
  })
} 
// 获取用户信息
const getUserInfo=(params)=>{
  return request({
    url:'/user/info',
    method:'post',
    headers:{
      "ED-UUID":getCookie('publicKey'),
      "NETWORKSTATE":"wifi",
      "User-Platform":"web",
      "Market":"default",
      "Accept-Language":navigator.language,
      "n":"web",
      "t":'web'
    },
    params
  })
}
//获取邀请人信息
const getInviterInfo=(params)=>{
  return request({
    url:'/user/info',
    method:'get',
    headers:{
      "ED-UUID":getCookie('publicKey'),
      "NETWORKSTATE":"wifi",
      "User-Platform":"web",
      "Market":"default",
      "Accept-Language":navigator.language,
      "n":"web",
      "t":'web'
    },
    params
  })
}

//获取收货地址
const getAddress=(params)=>{
  return request({
    url:'/user/address/list',
    headers:{
      "ED-UUID":getCookie('publicKey'),
      "NETWORKSTATE":"wifi",
      "User-Platform":"web",
      "Market":"default",
      "Accept-Language":navigator.language,
      "n":"web",
      "t":'web'
    },
    method:'post',
    params
  })
}
//创建订单
const createOrder=(data)=>{
  return request({
    url:'/order/create',
    method:'post',
    headers:{
      "Content-Type":"application/json",
      "ED-UUID":getCookie('publicKey'),
      "NETWORKSTATE":"wifi",
      "User-Platform":"web",
      "Market":"default",
      "Accept-Language":navigator.language,
      "n":"web",
      "t":'web'
    },
    data
  })
}
//发起支付
const initiatePay=(data)=>{
  return request({
    url:'/order/pay',
    method:'post',
    headers:{
      "Content-Type":"application/json",
      "ED-UUID":getCookie('publicKey'),
      "NETWORKSTATE":"wifi",
      "User-Platform":"web",
      "Market":"default",
      "Accept-Language":navigator.language,
      "n":"web",
      "t":'web'
    },
    data
  })
}
//价格预计算
const priceCalculation=(data)=>{
  return request({
    url:'/order/prepare',
    method:'post',
    headers:{
      "Content-Type":"application/json",
      "ED-UUID":getCookie('publicKey'),
      // "User-Agent":navigator.userAgent,
      "NETWORKSTATE":"wifi",
      "User-Platform":"web",
      "Market":"default",
      "Accept-Language":navigator.language,
      "n":"web",
      "t":'web'
    },
    data
  })
}

//获取验证短信
const getSMS=(params)=>{
  return request({
    url:'/sms/send',
    method:'post',
    headers:{
      "ED-UUID":getCookie('publicKey'),
      // "User-Agent":navigator.userAgent,
      "NETWORKSTATE":"wifi",
      "User-Platform":"web",
      "Market":"default",
      "Accept-Language":navigator.language,
      "n":"web",
      "t":'web'
    },
    params
  })
}

//手机注册
const signUp=(data)=>{
  return request({
    url:'/user/register',
    method:'post',
    headers:{
      "Content-Type":"application/json",
      "ED-UUID":getCookie('publicKey'),
      // "User-Agent":navigator.userAgent,
      "NETWORKSTATE":"wifi",
      "User-Platform":"web",
      "Market":"default",
      "Accept-Language":navigator.language,
      "n":"web",
      "t":'web'
    },
    data
  })
} 

// 手机登录
const login=(data)=>{
  // data = encryptionPW(data)
  return request({
    url:'/user/login',
    method:'post',
    headers:{
      "Content-Type":"application/json",
      "ED-UUID":getCookie('publicKey'),
      // "User-Agent":navigator.userAgent,
      "NETWORKSTATE":"wifi",
      "User-Platform":"web",
      "Market":"default",
      "Accept-Language":navigator.language,
      "n":"web",
      "t":'web'
    },
    data
  })
}
// 获取邀请人信息
const getReferrerInfo=()=>{
  return request({
    url:'/user/getReferrerInfo',
    method:'get',
    headers:{
      "ED-UUID":getCookie('publicKey'),
      "NETWORKSTATE":"wifi",
      "User-Platform":"web",
      "Market":"default",
      "Accept-Language":navigator.language,
      "n":"web",
      "t":'web'
    }
  })
}

const getReferrerInfoSetu=(params)=>{
  return request({
    url:'/user/getReferrerInfo',
    method:'get',
    headers:{
      "ED-UUID":getCookie('publicKey'),
      "NETWORKSTATE":"wifi",
      "User-Platform":"web",
      "Market":"default",
      "Accept-Language":navigator.language,
      "n":"web",
      "t":'web'
    },
    params
  })
}

//获取公钥
const getPublicKey=()=>{
  return request({
    url:'/user/getKey',
    method:'post'
  })
}

export{
  getProducts,
  login,
  getProductDetails,
  addArea,
  getUserInfo,
  getSMS,
  signUp,
  priceCalculation,
  getAddress,
  createOrder,
  initiatePay,
  getPublicKey,
  getInviterInfo,
  getBarrageList,
  getReferrerInfo,
  getReferrerInfoSetu
}