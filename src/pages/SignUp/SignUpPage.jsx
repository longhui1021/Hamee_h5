import React, { Component } from 'react';
import { Row, Col, message, Spin} from 'antd';
import {getSMS,signUp} from '../../api/index.js';
import {setCookie, getCookie} from '../../util/Cookie'
import "./SignUpPage.css"
import InviterUps from '../../components/PopUps/InviterUps'

var height = window.screen.height;

const eye_n = require("../../images/login_icon_invisible@2x.png")
const eye_y = require("../../images/login_icon_visible@2x.png")

const NoAgree = require("../../images/login_icon_disagree@2x.png")
const agree = require("../../images/login_icon_agree@2x.png")
class SignUpPage extends Component {
    constructor(props){
        super(props);
        this.state={
            eyeStatus:false,
            getVFCodeStatus:false,
            timeCount:0,
            countyCode:'62',//国家码
            loading:false,
            visible:false,
            // 用户输入参数
            phone:'',
            password:'',
            code:'',
            RuleAgreedStatus:true,
        }
    }
    // 验证码倒计时
    getVFCode = () => {
        if(this.state.phone.length > 8){
            getSMS({mobile:this.state.countyCode + this.state.phone, type:1}).then((res) => {
                if(res && res.code === 0){
                    if(!this.state.getVFCodeStatus){
                        this.setState({
                            getVFCodeStatus:true,
                            timeCount:60
                        })
                        const timer = setInterval(() => {
                            if(this.state.timeCount < 1){
                                clearTimeout(timer)
                                this.setState({
                                    getVFCodeStatus:false,
                                })
                            }
                            this.setState({
                                timeCount:--this.state.timeCount
                            })
                        },1000)
                    }
                    this.setState({loading:false})
                }else{
                    this.setState({loading:false})
                }
            }).catch((error) => {
                this.setState({loading:false})
            })
        }else{
            message.error("please enter a valid phone number!")
        }
    }
    signUp = () => {
        this.setState({loading:true})
            let data = {
                mobile:this.state.countyCode + this.state.phone,
                referrerId:getCookie("InviterId"),
                code:this.state.code,
                passwd:this.state.password
            }
            //****发送请求*******
            signUp(data).then((res) => {
                this.setState({loading:false})
                if(res && res.code === 0){
                    message.success('registration success!')
                    setCookie('uid',res.data.id,1)
                    setCookie('token',res.data.token,1)
                    let enterType = Number(getCookie("enterType"))
                    let isSelect = getCookie("isSelect")
                    if(enterType === 0){
                        if(isSelect){
                            this.props.history.push('/OrderPage')
                        }else{
                            this.props.history.push('/ProductDetails')
                        }
                    }else if(enterType === 1){
                        if(isSelect){
                            this.props.history.push('/OrderPage')
                        }else{
                            this.props.history.push('/ShareDetails')
                        }
                    }
                }else{
                    this.setState({loading:false})
                }
            }).catch((error) => {
                this.setState({loading:false})
            })
    }
    // 下一步
    nextButton = () => {
        if(this.state.phone.length < 1){
            message.error('Nomor telepon tidak boleh kosong!');
        }else if(this.state.password.length < 8){
            message.error('Panjang kata sandi harus lebih dari atau sama dengan 8 digit!');
        }else if(this.state.code.length < 1){
            message.error('kode verifikasi harus diisi!');
        }else if(!this.state.RuleAgreedStatus){
            message.warning('Harap setujui dan tandai Perjanjian Pengguna!');
        }else{
            this.openModal()
        }
    }

    openModal = () => {this.setState({visible:true})}
    onChangePhone = (event) => {this.setState({phone:event.target.value})}// 手机号输入
    onChangePassword = (event) => {this.setState({password:event.target.value})}//密码输入
    onChangeCode = (event) => {this.setState({code:event.target.value})}//验证码输入

  render() {
    return (
        <Spin spinning={this.state.loading} tip="Loading...">
        <div className="signUp" style={{height:height}}>
            <div className="signUp_title">
                <span className="signUp_log" onClick={this.openModal}>Daftar baru</span>
            </div>
            {/* 账号 */}
            <div className="signUp_userName">
                <img className="login_icon_phone" src={require("../../images/login_icon_phone@2x.png")} alt=""/>
                <span>Nomor telefon</span>
                <Row style={{color:'#fff',border:"1px #fff solid",borderRadius:12,marginTop:10}}>
                    <Col span={4} className="signUp_AreaCode">
                        <img src={require("../../images/login_icon_down@2x.png")} alt=""/>
                        <span>+62</span>
                    </Col>
                    <Col span={20}>
                        <input type="number" placeholder="Masukkan nomor telepon anda" value={this.state.phone} onChange={this.onChangePhone}/>
                    </Col>
                </Row>
            </div>
            {/* 密码 */}
            <div className="signUp_password">
                <img src={require("../../images/login_icon_password@2x.png")} />
                <span>sandi</span>
                <Row className="signUp_password_input">
                    <Col span={21}>
                        <input type={this.state.eyeStatus ? "text" : "password"} placeholder="Masukkan nomor password anda" value={this.state.password} onChange={this.onChangePassword}/>
                    </Col>
                    <Col span={3}>
                        <img src={this.state.eyeStatus ? eye_y : eye_n} onClick={()=>{
                            this.setState({
                                eyeStatus:!this.state.eyeStatus
                            })
                        }}/>
                    </Col>
                </Row>
            </div>
            {/* 验证码 */}
            <div className="signUp_vfcode">
                <img src={require("../../images/login_icon_verification@2x.png")} />
                <span>Kode verifikasi</span>
                <Row className="signUp_vfcode_input">
                    <Col span={16} style={{color:'#fff'}}><input type="text" placeholder="Please enter" value={this.state.code} onChange={this.onChangeCode}/></Col>
                    <Col span={1}></Col>
                    <Col span={7}><div className="signUp_vfButton" onClick={this.getVFCode}>{this.state.getVFCodeStatus ? this.state.timeCount + " s" : "Verifikasi"}</div></Col>
                </Row>
            </div>
            <div className="signUp_selectRule">
                <img src={this.state.RuleAgreedStatus?agree:NoAgree} onClick={() => {
                    this.setState({RuleAgreedStatus:!this.state.RuleAgreedStatus})
                }}/>
                <span onClick={() => {
                    this.props.history.push('/UserAgreement')
                }}>Saya setuju dengan ketentuan & kondisi</span>
            </div>
            <div className="signUp_nextButton" onClick={this.nextButton}>
                <span>Next</span>
            </div>
        </div>
        <InviterUps visible={this.state.visible} 
            height={height}
            closeModal={() => {this.setState({visible:false})}}
            determine={() => {
                this.setState({visible:false})
                this.signUp()
            }}/>
      </Spin>
    );
  }
}

export default SignUpPage;
