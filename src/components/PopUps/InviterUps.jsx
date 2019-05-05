import React, { Component } from 'react';
import {getCookie} from '../../util/Cookie'
import "./InviterUps.css"
import copy from 'copy-to-clipboard';
import { message } from 'antd';


class InviterUps extends Component {
  constructor(props){
    super(props);
    this.state={
      info:{}
    }
  }
  componentDidMount(){
    let info = getCookie('fromInfoStr')
    if(info){
      this.setState({
        info:JSON.parse(info)
      })
    }
  }
 copy=()=>{
  if(copy(this.state.info.id)){
      message.success('Copy berhasil!')
  }else{
      message.error('Copy gagal!')
  }
 }
  render() {
      return(
        this.props.visible?(
          <div style={{height:this.props.height,width:'100%',position:'absolute',top:0,backgroundColor:'rgba(0,0,0,0.4)'}}>
              <div className='UplineInfo' style={{marginTop:(this.props.height-294)/3}}>
                <p style={{textAlign:'center',color:"#fff",fontSize:22,paddingTop:10}}>Informasi Upline</p>
                <div className="image">
                  <img src={require("../../images/login_img_avatar@2x.png")} alt=""/>
                </div>
                <p style={{fontSize:16,color:'#333',marginLeft:60,marginBottom:0,marginTop:8}}>User Name: <span> {this.state.info.nickName}</span></p>
                <p style={{fontSize:16,color:'#333',marginLeft:60,marginBottom:0}}>
                  ID: 
                  <span> {this.state.info.id}</span> 
                  <span style={styles.copyButton} onClick={this.copy}>copy</span>
                </p>
                  <div className='button_box'>
                    <div className="cancel_button"><p onClick={()=>{this.props.closeModal()}}>Batalkan</p></div>
                  <div className="determine_button"><p onClick={()=>{this.props.determine()}}>Konfirmasi</p></div>
                  </div>
              </div>
          </div>
        ):null
      )
  }
}

const styles={
 copyButton:{
  height:20,
  backgroundColor:'#f83a5e',
  paddingLeft:4,
  paddingRight:4,
  borderRadius:10,
  color:'#fff',
  fontSize:14,
  marginLeft:5,
  lineHeight:'14px'
 }
}
export default InviterUps;
