import {getCookie,setCookie} from "./Cookie"
import {getPublicKey} from "../api/index"

const CryptoJS =  require("crypto-js");
const AuthTokenIv = 'ham@123456--java'; //AES向量

const encryption=()=>{
    let requestHeader={}
    let encryptHeader={}

    requestHeader['User-Agent'] =navigator.userAgent;
    encryptHeader['User-Agent'] =navigator.userAgent;
    let publicKey = getCookie("publicKey")
    if(publicKey){
        requestHeader['ED-UUID'] = publicKey;
        encryptHeader['ED-UUID'] = publicKey;
    }
    requestHeader['NETWORKSTATE'] = "wifi";
    encryptHeader['NETWORKSTATE'] = "wifi";

    encryptHeader['t'] = "web";
    
    requestHeader['User-Platform'] = "web";
    encryptHeader['User-Platform'] = "web";
    requestHeader['Market'] = "default";
    encryptHeader['Market'] =  "default";
    requestHeader['Accept-Language'] =  navigator.language;
    encryptHeader['Accept-Language'] = navigator.language;
    requestHeader['n'] = "web";
    encryptHeader['n'] = "web";
    encryptHeader['time'] = new Date().getTime();
    let token = getCookie("token")
    if (token) {   //token 和time 需要加密 但是不能明文放在请求header 里面
        encryptHeader['token'] = token
    }
    return Encrypt(encryptHeader,publicKey)
}

const PublicKey = () => {
    getPublicKey().then((res) => {
        if(res&&res.code === 0){
            if(res.data){
                setCookie("publicKey",res.data,1)
                return res.data
            }
        }
    })
}

const Encrypt = (data,key) => {
    let AES_KEY = CryptoJS.enc.Latin1.parse(key); //16位
    let iv = CryptoJS.enc.Latin1.parse(AuthTokenIv);
    let encrypted = '';
    if (typeof(data) === 'string') {

        let srcs = CryptoJS.enc.Utf8.parse(data);
        encrypted = CryptoJS.AES.encrypt(srcs, AES_KEY, {
            iv:iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    } else if (typeof(data) === 'object') {//对象格式的转成json字符串
        data = JSON.stringify(data);
        let srcs = CryptoJS.enc.Utf8.parse(data);
        encrypted = CryptoJS.AES.encrypt(srcs, AES_KEY, {iv:iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        })    }
    return encrypted.toString();
}

export {encryption,PublicKey}