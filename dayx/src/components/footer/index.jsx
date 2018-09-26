import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import './foot.scss'

class Footer extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render () {
        return (
            <div className="footer">
              <ul>
                <li ><NavLink to='/home' activeClassName='active'>首页</NavLink></li>
                <li ><NavLink to='/kind' activeClassName='active'>分类</NavLink></li>
                <li ><NavLink to='/care' activeClassName='active'>购物车</NavLink></li>
                <li ><NavLink to='/user' activeClassName='active'>我的</NavLink></li>                
             </ul>
          </div>
        )

    }
}
export default Footer
