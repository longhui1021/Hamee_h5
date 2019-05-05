import React, { Component } from 'react';
import { Spin } from 'antd';
import "./ProductList.css"
import Product from "../../components/Product/Product"
import {getProducts} from "../../api/index"

class ProductList extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            loading:true
        }
    }
    componentDidMount(){
        window.scrollTo(0,0)
        this.getProductList()
    }
    getProductList = () => {
        getProducts().then((res) => {
          if(res && res.code === 0){
            res.data.products.map((item) => {
                if(item.title.length>30){
                    item.title = item.title.substring(0,27)+"..."
                }
            })
            this.setState({
              data:res.data.products,
              loading:false
            })
          }
        })
      }
    gotoProductDetails = (id) => {
        this.props.history.push({pathname: `/ProductDetails`, state: {id:id}})
      }
    render(){
        return(
            <Spin spinning={this.state.loading} tip="Loading...">
                <div className="ProductsList">
                    <div className="dataList" >
                        {
                            this.state.data.map((item,index) => {
                                return<Product key={index} goto={this.gotoProductDetails} product={item} borderStatus={false}/>
                            })
                        }
                    </div>
                </div>
            </Spin>
        )
    }
}

export default ProductList;