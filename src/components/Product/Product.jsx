import React, { Component } from 'react';
import {setCookie} from '../../util/Cookie'
import './Product.css'

// 单个商品
class Product extends Component {

  onClickEvent = () => {
    setCookie("selectedProductId",this.props.product.id,1)
    this.props.goto(this.props.product.id)
  }
  // 热卖标签
  labelHot = () => {
    return(
      <div className="label_hot">
        <img src={require("../../images/home_icon_hot@2x.png")} alt=""/>
        <span>Hot</span>
      </div>
    )
  }
  // 新品标签
  labelNew = () => {
    return(
      <div className="label_new">
        <img src={require("../../images/home_icon_new@2x.png")} alt=""/>
        <span>New</span>
      </div>
    )
  }
  // 秒杀标签
  labelSpike = () => {
    return(
      <div className="label_Spike">
        <img src={require("../../images/home_icon_snatch@2x.png")} alt=""/>
        <span>Snatch</span>
      </div>
    )
  }
  render () {
    return (
      <div className="Product" style={this.props.borderStatus?styles.borderStyle:styles.borderStyle_n } onClick={this.onClickEvent}>
         <div className="ProductImg" style={{backgroundImage: `url(${this.props.product.img})` }}>
          {
            this.props.product._hot ? (this.labelHot()) : (this.props.product._new ? this.labelNew() : '')
          }
         </div>
         <div className="ProductInfo">
          <div style={{height:34}}>
            <p className="nameAndDes"><span>{this.props.product.title}</span></p>
          </div>
          <div>
            <p className="Price">Rp {this.props.product.vip_price}</p>
            {/* <p className="vipPrice">market Rp {this.props.product.original_price}</p> */}
          </div>
         </div>
      </div>
    );
  }
}

const styles={
  borderStyle:{
    border:'1px solid #f2f2f2'
  },
  borderStyle_n:{
    border:'0px solid #f2f2f2'
  }
}
export default Product;
