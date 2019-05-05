import React, { Component } from 'react';
import { Row, Col,Spin,message } from 'antd';
import {setCookie, getCookie} from '../../util/Cookie'
import "./InvitePage.css"
import Product from "../../components/Product/Product"
import {getProducts,getBarrageList,getReferrerInfo,getReferrerInfoSetu} from "../../api/index"
import {PublicKey} from '../../util/encryption'
import {Invite} from '../../Language/id'

// import { Player } from 'video-react';
// import "../../../node_modules/video-react/dist/video-react.css";

if(!getCookie("publicKey")||getCookie("publicKey")===''){
  PublicKey()
}

let timeid = null//定时器

const height = document.documentElement.clientHeight
const fromImg = require("../../images/member_img_avatar@2x.png")

class InvitePage extends Component {
  constructor(props){
    super(props);
    this.state={
      fromInfo:[],
      userNames:[],
      nameIndex:1,
      data:[
        {
          id:1,
          imgUrl:'',
          name:'',
          desc:'',
          price:'',
          vipPrice:'',
          productStatus:1,
        },
      ],
      InviterId:'',
      loading:true,
      userType:0,
      // 动画参数
      MoveUp:90,
      transparency:1,
      backColor:'rgba(232,231,246,1)',
      textColor:'rgba(7,7,7,1)',
      testName:'xxx'
    }
    if(getCookie('name')){
      this.getAppCookie()
    }
    if(getCookie("type")){
      this.state.userType=Number(getCookie("type"))
    }
  }
  componentDidMount(){
    setCookie("enterType",0,1)//在cookie中标记用户的进入类型，0首页会员礼包进入，1商品分享进入
    // 判断用户是否是会员
    if(this.state.userType !== 0){
      this.setState({
        MoveUp:20
      })
    }
    // 滚动条回到顶部
    window.scrollTo(0,0)
    this.getProductList()
    this.getBarrageList()
    const url = window.location.href
    let InviterIdArray = url.match(/[^a-zA-Z0-9]InviterId{1,9}=([0-9\-]+)/)//获取地址栏邀请人id
    if(InviterIdArray&&InviterIdArray){
      if(InviterIdArray.length>1){
        let InviterId = InviterIdArray[1]
        setCookie('InviterId',InviterId,1)
        this.setState({InviterId:InviterId})
        // 获取邀请人信息
        this.getInviterInfo(InviterId)
      }
    }else{
        // 获取用户上线
        this.getUserInfo()
    }
    
    this.ScrollAnimation()// 开始动画
  }
  componentWillUnmount(){
    clearInterval(timeid)
  }
  // 获取app传递过来的cookie
  getAppCookie(){
    let appCookies = getCookie('name')
    if(appCookies){
      appCookies = JSON.parse(appCookies)
      if(appCookies.key){
        setCookie('publicKey',appCookies.key,1)
      }
      if(appCookies.isVip){
        setCookie('type',appCookies.isVip ? 1 : 0,1)
      }
      if(appCookies.id){
        setCookie('uid',appCookies.id,1)
      }
      if(appCookies.token){
        setCookie('token',appCookies.token,1)
      }
    }
  }
  // 获取邀请人信息 无id
  getUserInfo = () => {
    setTimeout(() => {
      getReferrerInfo().then((res) => {
        if(res && res.code === 0){
          this.setState({fromInfo:res.data})
          let fromInfoStr = JSON.stringify(res.data)
          setCookie("fromInfoStr",fromInfoStr,1)
          setCookie("InviterId",res.data.id,1)
        }
      })
    },500)
  }
  // 获取邀请人信息 有id
  getInviterInfo = (InviterId) => {
    let data = {
      uid:parseInt(InviterId)
    }
    setTimeout(() => {
      getReferrerInfoSetu(data).then((res) => {
        if(res && res.code === 0){
          this.setState({fromInfo:res.data})
          let fromInfoStr = JSON.stringify(res.data)
          setCookie("fromInfoStr",fromInfoStr,1)
          setCookie("InviterId",res.data.id,1)
        }
      })
    },500)
  }
  //获取弹幕名单
  getBarrageList = () => {
    getBarrageList().then((res) => {
      if(res && res.code === 0){
        if(this.state.userNames.length > 0){
          let data = this.state.userNames.concat(res.data)
          this.setState({
            userNames:data
          })
        }else{
          this.setState({
            userNames:res.data
          })
        }
      }
    })
  }
  // 获取礼包列表
  getProductList = () => {
    getProducts().then((res) => {
      if(res && res.code === 0){
        let data
        if(res.data.products.length > 6){
         data = res.data.products.slice(0,6)
        }else{
          data = res.data.products
        }
        data.map((item) => {
          if(item.title.length > 30){
            item.title = item.title.substring(0,27) + "..."
          }
        })
        this.setState({
          data:data,
          loading:false
        })
      }else{
        message.warning(res.msg)
        this.setState({
          loading:false
        })
      }
    }).catch((error) => {
      this.setState({
        loading:false
      })
    })
  }

  OneClickOpening = () => {
    if(this.state.userType > 0){
      // 分享
      window.postMessage("Share")
    }else{
      const GiftPackages_height = document.getElementById("GiftPackages").offsetTop;
      document.getElementsByClassName("InvitePage")[0].scrollTop = GiftPackages_height
    }
  }
  // 跳转至商品详情页
  gotoProductDetails = (id) => {
    if(this.state.userType > 0){
      message.warning(Invite.You_are_already_a_member_of_our_Hame)
    }else{
      setCookie('isSelect',true,1)
      this.props.history.push({pathname: `/ProductDetails`, state: {id:id}})
    }
  }
  // 滚动通知动画
  ScrollAnimation = () => {
    let limit
    this.state.userType !== 0 ? limit = 0 : limit = 70
    let count = 0
    this.setState({
      testName:this.getname()
    })
    timeid = setInterval(() => {
        if(count > 10){
          this.setState({
            MoveUp:this.state.MoveUp - 1,
            transparency:this.state.transparency - 0.05
          })
          this.setState({
            backColor:'rgba(232,231,246,' + this.state.transparency + ')',
            textColor:'rgba(7,7,7,' + this.state.transparency + ')',
          })
        }
        ++count
        // 如果上升到某个位置，回到原点显示下一个用户
        if(this.state.MoveUp < limit - 5){
          this.setState({
            MoveUp:limit + 20,
            transparency:1,
            backColor:"rgba(232,231,246,1)",
            textColor:'rgba(7,7,7,1)',
            testName:this.getname()
          })
        }
    },100)
  }
  getname = () => {
    let a = Number(this.state.nameIndex)
    if(a > 120 && a > this.state.userNames.length - 10){
      this.getBarrageList()
    }
    this.setState({nameIndex:++this.state.nameIndex})
    let name = this.state.userNames[a]
    return name
  }
  render() {
    return (
      <Spin spinning={this.state.loading} tip="Loading...">
        <div className="InvitePage" style={{height:height}} id="abc">
        {/*头部邀请人信息*/}
        {
          this.state.userType>0?null:(
            <div className="InviteText">
                <Row>
                    <Col span={4}><img src={fromImg} alt=""/></Col>
                    <Col span={20}><p>{!this.state.fromInfo.nickName?"Hamee" : this.state.fromInfo.nickName} mengajak Anda untuk menjadi member Hamee</p></Col>
                </Row>
            </div>
          )
        }
          <div className="InviteHeader">
                {/* <div style={{height:10}}></div> */}
                <div style={{height:70}}></div>
                {/* 头部文字 */}
                <div className='Invite_title'>
                  <p>{Invite.SPEND_LESS}</p>
                  <p className="fontBig">{Invite.MONEY}</p>
                  <p>{Invite.BUY_BETTER}</p>
                  <p className="fontBig">{Invite.GOODS}</p>
                  <p className="year">——— 2019 ———</p>
                </div>
          </div>
          {/* 视频 */}
          {/* <div style={{padding:16,marginTop:10,marginBottom:30}}>
            <Player
              playsInline
              // poster="images/member_bg3@2x.jpg"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
          </div> */}
          {/* 会员福利 */}
          <div className="VipWelfare">
              <p>{Invite.Member_Benefits}</p>
          </div>
          <div className="VipWelfare_info">
              <Row>
                  <Col span={8}>
                      <div className="Left">
                        <p>{Invite.off_shopping_full_of_goods}</p>
                      </div>
                  </Col>
                  <Col span={15} style={{marginLeft:10}}>
                    <div className="Top">
                      <p>{Invite.Member_spree_shopping_coupon_300K}</p>
                    </div>
                    <div className="Center">
                      <p>{Invite.B_A_M_O_V_E_H_O_S_W_S}</p>
                    </div>
                    <div className="Bottom">
                      <p>{Invite.O_V_G_C_S_O_A_S_S_W}</p>
                    </div>
                  </Col>
              </Row>
            </div>
            {/* 购物礼包 */}
            <div className="GiftPackages" id="GiftPackages">
              <p>{Invite.Gift_Packages}</p>
          </div>
          <div className="giftList">
              <div className="list">
                {
                  this.state.data.map((item,index)=>{
                    return <Product key={index} goto={this.gotoProductDetails} product={item} borderStatus={false}/>
                  })
                }
              </div>
              <p className="viewMore" onClick={()=>{
                if(this.state.userType>0){
                  message.warning(Invite.You_are_already_a_member_of_our_Hame)
                }else{
                  this.props.history.push('/ProductList')
                }
              }}>{Invite.View_More}</p>
          </div>
          <div className="viewMoreImg">
            <img src={require("../../images/member_bg_sliding down@2x.png")} alt=""/>
          </div>
          {/* 优惠说明 */}
          <div className="qualityshopping_title">
                <p>{Invite.Save_money_by_purchasing_quality_shopping}</p>
          </div>
          <div className="qualityshopping">
                <ul className="ul_out">
                  <li>
                    {Invite.Invite_Commission}
                    <ul className="ul_top">
                      <li>{Invite.D_L_O_M_U_I_F_T_B_M_A_G_C_T_H_T_L_T_H_T_C}</li>
                      <li>{Invite.sales_of_goods_get_rebates}</li>
                    </ul>
                  </li>
                  <li>
                    {Invite.share_it}
                      <ul className="ul_bottom">
                        <li>{Invite.Member_shopping_membership_price}</li>
                      </ul>
                  </li>
                </ul>
          </div>
          {/* 关于 */}
          <div className="About_title">
            <p>{Invite.About_Hamme}</p>
          </div>
          <div className="About">
            <p>{Invite.HWBIETBTAYAEPWSTULSRTMSPSTMSTPOTESOTOTSAPTDOIS}</p>
          </div>
          <div className="openingButton" onClick={this.OneClickOpening}>
                <p>{this.state.userType>0?Invite.One_click_sharing:Invite.One_Click_Opening}</p>
          </div>
          {/* 滚动通知 */}
          {
            this.state.userNames.length>1?(
              <div style={{height:26,backgroundColor:this.state.backColor,borderRadius:15,position:'absolute',top:this.state.MoveUp,left:10,paddingRight:8}}>
                <img style={{height:26,width:26,position:'relative',bottom:1,opacity:this.state.transparency,marginRight:5}} src={require("../../images/home_img_avatar@2x.png")} alt=""/>
                <span style={{color:this.state.textColor,fontSize:12,lineHeight:'25px'}}>User {this.state.testName} telah menjadi Member...</span>
              </div>
            ):null
          }
        </div>
      </Spin>
    );
  }
}

export default InvitePage;