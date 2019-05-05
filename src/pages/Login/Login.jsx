import React, { Component } from 'react';
import { Row, Col, message, Spin} from 'antd';
import {setCookie,getCookie} from '../../util/Cookie'
import "./Login.css"
import {login,getUserInfo,getInviterInfo} from "../../api/index";

var height = window.screen.height;

const eye_n = require("../../images/login_icon_invisible@2x.png")
const eye_y = require("../../images/login_icon_visible@2x.png")

const NoAgree = require("../../images/login_icon_disagree@2x.png")
const agree = require("../../images/login_icon_agree@2x.png")

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:false,
            eyeStatus:false,
            countyCode:'62',//国家码
            RuleAgreedStatus:true,
            // 用户输入参数
            phone:'',
            password:''
        }
    }
    login = () => {
        if(!this.state.RuleAgreedStatus){
            message.error('please agreed to the Terms & Conditions!');
        }else if(this.state.phone.length<1){
            message.error('Phone number cannot be empty!');
        }else{
            if(this.state.password.length<1){
                message.error('password can not be blank!');
            }else{
                this.setState({loading:true})

                //*****发送请求*******
                let data = {
                    mobile:this.state.countyCode+this.state.phone,
                    passwd:this.state.password
                }
                login(data).then((res) => {
                    if(res && res.code === 0){
                        setCookie('uid',res.data.id,1)
                        setCookie('token',res.data.token,1)
                        setCookie('type',res.data.level,1)
                        message.success('login successful!')
                        if(getCookie('InviterId')){
                            this.setState({loading:false})
                            this.props.history.goBack()
                            // this.props.history.push('/OrderPage')
                        }else{
                            this.getUserInfo()
                        }
                    }else{
                        this.setState({loading:false})
                    }
                }).catch((error) => {
                    this.setState({loading:false})
                })
            }
        }
    }

    // 获取用户信息
  getUserInfo = () => {
    let data={
      uid:getCookie('uid')
    }
    getUserInfo(data).then((res) => {
      if(res && res.code === 0){
        this.setState({
          InviterId:res.data.refUid
        })
        setCookie('InviterId',res.data.refUid,1)
      }else{
        this.setState({loading:false})
      }
    }).catch((error) => {
        this.setState({loading:false})
    })
  }

    
    onChangePhone = (event) => {this.setState({phone:event.target.value})}// 手机号输入
    onChangePassword = (event) => {this.setState({password:event.target.value})}//密码输入

  render() {
    return (
        <Spin spinning={this.state.loading} tip="Loading...">
            <div className="Login" style={{height:height}}>
                <div className="title">
                    <span className="log">masuk id</span>
                </div>

                <div className="userName">
                    <img src={require("../../images/login_icon_phone@2x.png")} alt=""/>
                    <span>Nomor telefon</span>
                    <Row style={{color:'#fff',border:"1px #fff solid",borderRadius:12,marginTop:10}}>
                        <Col span={4} className="AreaCode">
                            <img src={require("../../images/login_icon_down@2x.png")} alt=""/>
                            <span>+62</span>
                        </Col>
                        <Col span={20}>
                            <input type="number" placeholder="Silahkan masukkan nomor telefon anda" value={this.state.phone} onChange={this.onChangePhone}/>
                        </Col>
                    </Row>
                </div>

                <div className="password">
                    <img src={require("../../images/login_icon_password@2x.png")} />
                    <span>sandi</span>
                    <Row className="password_input">
                        <Col span={21}>
                            <input type={this.state.eyeStatus ? "text" : "password"} placeholder="Silahkan masukkan password anda" value={this.state.password} onChange={this.onChangePassword}/>
                        </Col>
                        <Col span={3}>
                            <img src={this.state.eyeStatus ? eye_y : eye_n} onClick={() => {
                                this.setState({
                                    eyeStatus:!this.state.eyeStatus
                                })
                            }}/>
                        </Col>
                    </Row>
                </div>
                <Row className="text_button">
                    {/* <Col span={12} className="forget"><span>Forget password</span></Col> */}
                    <Col span={24} className="sign"><span onClick={()=>{
                        if(getCookie('InviterId')){
                            this.props.history.push('/SignUp')
                        }else{
                            message.error("Jika Anda belum menerima rujukan, silakan hubungi wasit untuk mendapatkan tautan lagi!")
                        }
                    }}>Daftar baru</span></Col>
                </Row>
                 <div className="selectRule">
                    <img src={this.state.RuleAgreedStatus?agree:NoAgree} onClick={() => {
                        this.setState({RuleAgreedStatus:!this.state.RuleAgreedStatus})
                    }}/>
                    <span onClick={() => {
                        this.props.history.push('/UserAgreement')
                    }}>Menyetujui syarat dan ketentuan</span>
                </div>
                <div className="loginButton" onClick={this.login}>
                    <span>masuk id</span>
                </div>
            </div>
      </Spin>
    );
  }
}

export default Login;
