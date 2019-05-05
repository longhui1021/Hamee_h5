import React, { Component } from 'react';

class NewcomerStrategy extends Component {
    render(){
        return(
            <div style={styles.NewcomerStrategyBox}>
                <div style={styles.centerStyle}>
                    <h2>Hamee newcomer compulsory</h2>
                    <h4>From: Hamee Raiders  2019-1-30</h4>
                </div>
                <p style={styles.pStyle}>Congratulations when you enter the Hamee newcomer training, join us at Hamee Business School, where you can find out what Hamee is doing for you? How do we use Hamee and become a part of Hamee? How do we get to know the permissions and benefits we have gained? As a new member of Hamee, we should be familiar with Hamee's benefits, because I believe Hamee will give you everyone. Bring more surprises and fun.</p>
                <h5 style={{marginTop:15}}>App money saving strategy</h5>
                <p style={styles.pStyle}>We have opened a new member area for new users, and prepared new member benefits for members. New members can enjoy the qualification of “1 yuan enough”, and there are some related benefits such as “low price purchase”. Experience in the app</p>
            </div>
        )
    }
}

const styles={
    NewcomerStrategyBox:{
        padding:16,
    },
    centerStyle:{
        textAlign:'center'
    },
    pStyle:{
        textIndent:15
    }
}

export default NewcomerStrategy;