import React, { Component } from 'react';
import { Row, Col, Switch, Spin, message,Drawer,Icon} from 'antd';
import "./addAreaPage.css"
import {addArea} from "../../api/index"
import {getProvince,getCity} from "../../util/address"
import { getCookie } from '../../util/Cookie';

var height = window.screen.height;
class addAreaPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading:false,
            saveButtonStatus:true,
            visible: false,
            selectStatus:1,//1省，2市
            ProvinceData:[],
            CityData:[],
            
            province:'',
            city:'',
            // 用户输入参数
            receiver:'',
            phone:'',
            area:'',
            address:'',
            checked:true,
        }
    }
    componentDidMount () {
        if(this.props.location.state){

        }
    }
    
    
    onChange = (checked) => {
        this.setState({
            checked:checked
        })
        checked ? message.success('Set the default address successfully!') : message.success('Cancel the default address successfully!')
    }
    svaeButton = () => {
        if(this.state.saveButtonStatus){
            if(this.state.receiver.length < 1){
                message.error('The recipient cannot be empty!');
            }else if(this.state.phone.length < 1){
                message.error('Phone number cannot be empty!');
            }else if(this.state.province.length < 1 || this.state.city.length < 1){
                message.error('Please select the correct area!');
            }else if(this.state.address.length < 1){
                message.error('Address cannot be empty!');
            }else{
                //******发送请求*******
                let uid = getCookie('uid')

                let data = {
                    name:this.state.receiver,
                    mobile:"86" + this.state.phone,
                    address:this.state.address,
                    area:this.state.province + "," + this.state.city,
                    isDefault:this.state.checked ? "1" : "0",
                    uid:uid
                }
                addArea(data).then((res) => {
                    if(res && res.code === 0){
                        this.props.history.push({pathname: `/OrderPage`})
                    }
                })
            }            
        }
        
    }
    // 验证保存按钮是否可点击
    // verificationButton=()=>{
    //     if(this.state.receiver.length>0&&this.state.phone.length>0&&this.state.area.length>0&&this.state.address.length>0){
    //         this.setState({saveButtonStatus:true})
    //     }else{this.setState({saveButtonStatus:false})}
    // }
    showDrawer = () => {
        this.setState({
            visible: true,
            ProvinceData:getProvince()
        });
    };
    onClose = () => {this.setState({visible: false})}
    selectProvinceButton = () => {this.setState({selectStatus : 1})}
    selectCityButton = () => {this.setState({selectStatus : 2})}
    selectProvince = (event) => {
        this.setState({
            province:event.target.innerHTML,
            CityData:getCity(event.target.innerHTML),
            selectStatus:2
        });
    }
    selectCity = (event) => {
        this.setState({
            city:event.target.innerHTML,
            visible:false
        });
    }


    onChangeReceiver = (event) => {this.setState({receiver:event.target.value})}//接收者输入
    onChangePhone = (event) => {this.setState({phone:event.target.value})}// 手机号输入
    onChangeArea = (event) => {this.setState({area:event.target.value})}//区域输入
    onChangeAddress = (event) => {this.setState({address:event.target.value})}//详细地址输入
    render() {
      return (
          <Spin spinning={this.state.loading} tip="Loading...">
            <div className="addAreaPage" style={{height:height}}>
                <div className="form">
                    <div className="Receiver">
                        <p><span>*</span> Penerima</p>
                        <input type="text" value={this.state.receiver} onChange={this.onChangeReceiver}/>
                    </div>
                    <div className="CellphoneNumber">
                        <p><span>*</span> Nomor Telepon</p>
                        <input type="number" value={this.state.phone} onChange={this.onChangePhone}/>
                    </div>

                    <div className="Area">
                        <p><span>*</span> Provinsi, kota</p>
                        <div className="AreaButton" onClick={this.showDrawer}>
                            <span>{this.state.province === '' && this.state.city === '' ? '' : this.state.province + "," + this.state.city}</span>
                            <Icon type="down" />
                        </div>
                        {/*<input type="text" value= onChange={this.onChangeArea}/>*/}
                    </div>

                    <div className="Address">
                        <p><span>*</span> Alamat</p>
                        <input type="text" value={this.state.address} onChange={this.onChangeAddress}/>
                    </div>
                    <Row className="defaultAddress">
                        <Col span={18}>Jadikan sebagai alamat Utama </Col>
                        <Col span={2}></Col>
                        <Col span={4} className="defaultAddressButton"><Switch disabled={true} checked={this.state.checked} onChange={this.onChange} /></Col>
                    </Row>
                    <div className={this.state.saveButtonStatus ? "SaveButton" : "SaveButton_N"} onClick={this.svaeButton}>
                        Simpan
                    </div>
                    {/* 地区选择弹框 */}
                    <Drawer
                        className="drawer"
                        placement="bottom"
                        height={400}
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        bodyStyle={{padding:16}}
                        >
                        <p className="DrawerTitle">Please Choose</p>
                        <Row>
                            <Col span={6} onClick={this.selectProvinceButton}><span style={this.state.selectStatus === 1 ? styles.selected : styles.noSelect}>Province</span></Col>
                            <Col span={6} onClick={this.selectCityButton}><span style={this.state.selectStatus === 2 ? styles.selected : styles.noSelect}>City</span></Col>
                            <Col span={12}></Col>
                        </Row>
                        <div className="addressOption">
                            {
                                this.state.selectStatus === 1 ? (
                                    this.state.ProvinceData.map((item,index) => {
                                        return <p key={index} onClick={this.selectProvince} 
                                        style={this.state.province === item ? {backgroundColor:"#fc575e",paddingTop:2,paddingBottom:2,paddingLeft:2,color:"#fff",borderRadius:5} : {paddingLeft:2}}>
                                        {item}</p>
                                    })
                                ):(
                                    this.state.selectStatus === 2 ? (
                                        this.state.CityData.map((item,index) => {
                                            return <p key={index} onClick={this.selectCity} 
                                            style={this.state.city === item ? {backgroundColor:"#fc575e",paddingTop:2,paddingBottom:2,paddingLeft:2,color:"#fff",borderRadius:5} : {paddingLeft:2}}>
                                            {item}</p>
                                        })
                                    ):(null)
                                )
                            }
                        </div>
                    </Drawer>
                </div>
            </div>
          </Spin>
      )
    }
}

const styles={
    selected:{
        fontSize: 14,
        color: "#f83a5e",
        paddingBottom: 2,
        borderBottom: "2px #f83a5e solid"
    },
    noSelect:{
        fontSize: 14,
        color: "#9b9b9b",
        paddingBottom: 2,
    }
}

export default addAreaPage;