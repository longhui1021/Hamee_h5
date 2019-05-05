    // 设置cookie
    const setCookie=(key,value,exdays)=>{//(cookie的key值,cookie的value值,cookie保存的天数)
        value = escape(value+'')//编码
        let exdate = new Date();//获取时间
        key=key.trim();
        exdate.setTime(exdate.getTime()+24*60*60*1000*exdays);//保存天数
        window.document.cookie=key+"="+value+";path=/;expires="+exdate.toGMTString();
    }
    // 获取cookie
    const getCookie=(key)=>{//所要获取的cookie的key值
        if(document.cookie.length>0){
            let arr=document.cookie.split(';');
            for(let i = 0;i<arr.length;i++){
                let arr2 = arr[i].split('=');
                if(arr2[0].trim()===key){
                    let str = unescape(arr2[1])//解码
                    return str
                }
            }
        }
    }
    // 清除cookie
    const clearCookie=(key)=>{
        setCookie(key,'',-1)
    }

export {setCookie,getCookie,clearCookie}