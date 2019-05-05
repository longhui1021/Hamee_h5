import React, { Component } from 'react';
import './GoDownloadPage.css';

const height = document.documentElement.clientHeight
class GoDownloadPage extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    id:1,
                    imgUrl:'https://cdn.shopify.com/s/files/1/0169/5380/2852/products/01_7d116af8-6621-4336-a316-519129b4f5ef.jpg?v=1550084812',
                    name:'Aikesi Cute Lil Bird Drinking Bottle',
                    desc:'Product Description …',
                    price:'90,000',
                    vipPrice:'79,200',
                    productStatus:1,
                  },
                  {
                    id:2,
                    imgUrl:'https://cdn.shopify.com/s/files/1/0169/5380/2852/products/1_25bf4088-7ddd-4481-a99c-9cde87db8279.jpg?v=1550064259',
                    name:'DH Beauty Faciah Hair Removal',
                    desc:'Product Description …',
                    price:'33,000',
                    vipPrice:'29,040',
                    productStatus:2,
                  },

            ]
        }
    }

    render() {
      return (
          <div className="GoDownload" style={{height:height}}>
                <div className="header">
                    <img src={require("../../images/me_icon_successful@2x.png")} alt=""/>
                    <p>Congratulations,</p>
                    <p>open membership!</p>
                </div>
                <div className="content">
                    <div className="list">
                        {
                            this.state.data.map((item,index)=>{
                                return(
                                    <div className="GoDownloadProduct" key={index}>
                                        <div style={{height:138}}>
                                            <img src={item.imgUrl} alt=""/>
                                        </div>
                                        <div style={{padding:6}} className="GoDownloadProduct_text">
                                            <p><span>{item.name}</span></p>
                                            <p><span>Rp {item.price}</span></p>
                                            <p><span style={{fontWeight:'600'}}>Vip. </span><span style={{color:'#f83a5e',fontWeight:'700'}}>Rp {item.vipPrice}</span></p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                   
                    <div className="DownloadTips">
                        <p>You can enjoy 1% off when you log in to the new APP member.</p>
                    </div>
                </div>
                <div className="footer">
                    <div className="DownloadButton">
                        <a href="https://play.google.com/store/apps/details?id=com.hamee">
                            <p style={{color:'#fff'}}>Go download</p>
                        </a>
                    </div>
                </div>
          </div>
      )
    }
}

export default GoDownloadPage;