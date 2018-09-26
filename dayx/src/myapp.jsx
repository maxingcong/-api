import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Home from '@/components/home/index.js'
import Sroute from '@/components/sroute/index.jsx'
import Nearby from '@/components/nearby/index.jsx'
// import Care from '@/components/target/index.jsx'

import Header from '@/components/header/index.jsx'
// import Footer from '@/components/footer/index.jsx'

class App extends Component {
	constructor (props) {
		super(props)
		this.state = { }
    }
    render () {
        return ( //这里是整体结构布局结构
        <div className="content">
            <div className='main'>
                <Header/>
                <Switch>  {/* 利用router 模块的 Switch 语法添加模块 */}
                    <Route path='/home' component={Home}/>
                    <Route path='/route' component={Sroute}/>
                    <Route path='/nearby' component={Nearby}/>
                    {/*<Route path='/care' component={Care}/>*/}
                    <Redirect to={{pathname: '/home'}} />                 
                </Switch>
            </div>
        </div>
        )
    }

}

export default App
