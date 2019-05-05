import React, { Component } from 'react';
import { Row, Col,Spin,message} from 'antd';
import {getProductDetails} from "../../api/index"
import "./Detail.css"

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:false,
            productId:null,
            data:{},
            image:{},
            variants:[{}]
        }
    }
    componentDidMount(){
        const url = window.location.href
        let InviterIdArray = url.match(/[^a-zA-Z0-9]productId{1,9}=([0-9\-]+)/)
            if(InviterIdArray&&InviterIdArray.length>1){
                let productId = InviterIdArray[1]
                this.setState({productId:productId})
                this.getProductInfo(productId)
            }else{
                message.error("Link does not carry item id!")
            }
    }
    getProductInfo=(productId)=>{
        getProductDetails(productId).then((res)=>{
            if(res && res.code === 0){
                for(let i=0;i < res.data.images.length;i++){
                    for(let j=0;j<res.data.variants.length;j++){
                        if(res.data.images[i].id === res.data.variants[j].image_id){
                            res.data.variants[j].image=res.data.images[i].src
                        }
                    }
                }
                this.setState({
                    data:res.data,
                    image:res.data.image,
                    variants:res.data.variants
                })
            }
        })
    }
   
  render() {
    return (
        <Spin spinning={this.state.loading} tip="Loading...">
            <div>
                <div>
                    <img style={styles.image} src={this.state.image.src} alt=""/>
                </div>
                <p style={styles.Detailstitle}>{this.state.data.title} {this.state.data.tags}</p>
                <div style={styles.Detailsprices}>
                    <p style={styles.oPrices}>Rp {this.state.variants[0].price}</p>
                    <Row>
                        <Col span={12} style={styles.MemberPrice}>Member Rp {this.state.variants[0].compare_at_price}</Col>
                        <Col span={12} style={styles.bought}>{this.state.data.buy_number} people have bought</Col>
                    </Row>
                </div>
                <div style={{height:10,backgroundColor:"#f5f5f5"}}></div>
                <div style={{padding:16}}>
                    <Row>
                        <Col span={12} style={styles.infoLeft}>Product ID</Col>
                        <Col span={12} style={styles.infoRight}>{this.state.data.id}</Col>
                    </Row>
                    <Row>
                        <Col span={12} style={styles.infoLeft}>Product type</Col>
                        <Col span={12} style={styles.infoRight}>{this.state.data.product_type}</Col>
                    </Row>
                </div>
                <p style={styles.variantsTitle}>variants:</p>
                <div className="variantsLable">
                    {
                        this.state.variants.map((Item)=>{
                            return (
                                <div  style={styles.variantsCard} key={Item.id}>
                                    <img style={styles.variantsCard_img} src={Item.image} alt=""/>
                                    <div style={styles.variantsCard_textBox}>
                                        <p style={{color:"#333"}}>{Item.title}</p>
                                        <p style={{color:"#f83a5e",marginTop:5}}>Rp {Item.price}</p>
                                        <p style={{color: "#ff9704",}}>vip Rp {Item.compare_at_price}</p>
                                        <p style={{marginTop:5}}>In stock: {Item.inventory_quantity}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={styles.description}>
                    <div dangerouslySetInnerHTML={{__html: this.state.data.body_html}}/>
                </div>
            </div>
        </Spin>
    );
  }
}
const styles={
    image:{
        width: "100%",
        height: 220,
    },
    Detailstitle:{
        fontSize:16,
        color: "#333",
        fontWeight: 600,
        marginLeft:16,
        marginRight:16,
        marginTop:16,
    },
    Detailsprices:{
        marginTop:16,
        marginLeft:16,
        marginRight:16,
        paddingBottom:16,
    },
    oPrices:{
        color: "#f83a5e",
        fontSize:16,
        fontWeight: 600,
    },
    MemberPrice:{
        color: "#ff9704",
        fontSize:12,
        textAlign: "left",
    },
    bought:{
        color: "#9b9b9b",
        fontSize:12,
        textAlign: "right",
    },
    description:{
        marginTop:16,
        marginLeft:16,
        marginRight:16,
        marginBottom:16
    },
    infoLeft:{
        fontSize:14,
        textAlign: "left",
        fontWeight:600,
    },
    infoRight:{
        fontSize:14,
        textAlign: "right",
    },
    variantsTitle:{
        backgroundColor:"#f5f5f5",
        paddingLeft:16,
        fontSize:16,
        color:"#000",
        fontWeight:600,
        paddingTop:6
    },
    variantsCard:{
        height:220,
        width:140,
        marginLeft:6,
        marginRight:6,
        borderRadius:10,
        backgroundColor:"#fff",
        boxShadow: "6px 6px 5px #888888"

    },
    variantsCard_img:{
        height:100,
        width:"100%",
        borderRadius:10
    },
    variantsCard_textBox:{
        padding:5,
        fontSize:12
    }
}

export default Login;
