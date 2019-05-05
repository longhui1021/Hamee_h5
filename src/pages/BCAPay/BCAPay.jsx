import React, { Component } from 'react';
import './BCAPay.css'

const height = document.documentElement.clientHeight
class BCAPay extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    render() {
      return (
          <div className="BCAPay" style={{height:height,backgroundColor:'#f2f2f2',padding:12}}>
             <div className='top'>
                <div className="payheader">
                    <img style={{width:60,height:60}} src={require("../../images/shopping_ic_transfer@3x.png")} alt="card icon"/>
                    <p>Transfer Langsung</p>
                </div>

                <p className="paytitle" style={{marginBottom:0}}>No Rekening</p>
                <p className="payCode">0708281118</p>

                <p className="paytitle" style={{marginTop:10,marginBottom:0}}>Atas nama</p>
                <p className="payCodeDecs">PT. Ideaga Altekno Nusakarsa</p>

                <div className="button">
                    <a href="hamee://cs" style={{color:'#fff'}}>
                        <img style={{width:20,height:20,marginRight:10}} src={require("../../images/shopping_ic_customer@2x.png")} alt="card icon"/>
                        <span>Hubungi Customer Service </span>
                    </a>
                </div>
             </div>
             <div className='payText'>
                <p>Direct Transfer BCA :</p>
                <ul style={{listStyle:'decimal',paddingInlineStart: 12}}>
                    <li>
                        Transfer langsung dapat dilakukan melalui Klik BCA atau ATM BCA
                    </li>
                    <li>
                        Transferkan sesuai jumlah yang tertera di halaman pembayaran (tidak kurang dan tidak lebih), Ke Rekening BCA : <br/>
                        No Rekening : 0708281118 <br/>
                        Atas Nama    : PT. Ideaga Altekno Nusakarsa
                    </li>
                    <li>
                        Silahkan kirimkan bukti pembayaran ke Whatsapp Hamee di 0822 1373 8173
                    </li>
                    <li>
                        Setelah Hamee mengkonfirmasi pembayaran, kami akan segera melakukan pengiriman atau pengaktifan akun VIP.
                    </li>
                </ul>
             </div>
          </div>
      )
    }
}

export default BCAPay;