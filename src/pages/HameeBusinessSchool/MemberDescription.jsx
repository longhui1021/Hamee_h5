import React, { Component } from 'react';

class MemberDescription extends Component {
    render(){
        return(
            <div style={styles.MemberDescription}>
                <div style={styles.centerStyle}>
                    <h2>Hamme promotion system</h2>
                    <h4>Penulis：Hamee  2019-03-15</h4>
                </div>
                <div>
                    <ul style={{listStyle:'upper-roman',paddingInlineStart: 15}}>
                        <li style={styles.li_1_styls}>
                            <p style={styles.pTitle}>Untuk menjadi “owner”, syarat dan ketentuannya adalah: </p>
                            <p style={styles.pStyle}>Dengan membeli paket hadiah member seharga Rp.198,000, kemudian setelah menjadi member di wajibkan untuk merekrut 15 orang sebagai downline. Total lowongan untuk menajdi "manager ": 50 orang.</p>
                        </li>
                        <li style={styles.li_1_styls}>
                            <p style={styles.pTitle}>Syarat dan ketentuan menjadi direktur:</p>
                            <p style={styles.pStyle}>Jumlah tim ( termasuk dari tim manager) anggota downlinenya mencapai 500 orang , paling tidak 2 downlinenya sudah menjadi manager</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const styles={
    MemberDescription:{
        padding:12,
    },
    centerStyle:{
        textAlign:'center'
    },
    pTitle:{
        fontSize:14,
        color:'#000',
        fontWeight:'600',
        lineHeight:1.5,
        marginBottom:0
    },
    pStyle:{
        fontSize:14,
        textIndent:15,
        fontWeight:'400',
        lineHeight:1.5,
        marginBottom:0
    },
    li_1_styls:{
        marginBottom:10,
        listStyle:'decimal',
        paddingInlineStart: 12
    }
}

export default MemberDescription;