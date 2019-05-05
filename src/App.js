import React, { Component } from 'react';
import {HashRouter, Route, Switch} from'react-router-dom';
import {routers} from './Router/router'
import 'antd/dist/antd.css';
import './App.css'
import {getPublicKey} from "./api/index"
import {setCookie,getCookie} from './util/Cookie'

class App extends Component {
  componentDidMount(){
    let publickey = getCookie("publicKey")
    if(!publickey || publickey === ''){
      getPublicKey().then((res)=>{
        if(res&&res.code === 0){
            if(res.data){
                setCookie("publicKey",res.data,1)
            }
        }
      })
    }
  }
  render() {
    return (
      <div className="App">
        <HashRouter>
              <Switch>
                {
                  routers.map((route,index) => {
                      return(
                          <Route 
                          key={index}
                          path={route.path}
                          exact={route.exact}
                          component={route.component}/>
                      )
                  })
                }
              </Switch>
            </HashRouter>
      </div>
    );
  }
}

export default App;
