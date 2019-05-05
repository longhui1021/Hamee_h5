import React, { Component } from 'react';
import { Button } from 'antd';
import "./WithdrawShare.css"

class WithdrawShare extends Component {

    componentDidMount(){
        window.scrollTo(0,0)
    }
    render(){
        return(
            <div id="WithdrawShare">
                <img src={require("../../images/Group 16@2x.png")} alt=""/>
                <div className="openAppButtonBox">
                    <Button className="openAppButton">Open APP</Button>
                </div>
            </div>
        )
    }
}
export default WithdrawShare;