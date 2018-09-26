import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
// import { List, InputItem} from 'antd-mobile'

import './sroute.scss'

class Sroute extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    addClass(index){
        var li = document.getElementsByClassName('sroute-ul')[0].children;
        for(var i = 0 ; i < li.length ; i++){
            li[i].style.color='#ccc';
        }
        li[index-1].style.color='blue';
    }
    exchange () {
        let input1 = document.getElementsByClassName('input1')[0];
        var input2 = document.getElementsByClassName('input2')[0];
        [input2.value,input1.value] = [input1.value, input2.value];
    }
    render () {
        return (
            <div className="sroute">
                <ul  className="sroute-ul">
                    <li onClick={this.addClass.bind(this,1)}>
                      <i className='iconfont icon-qiche'></i>
                    </li>
                    <li onClick={this.addClass.bind(this,2)}>
                      <i className='iconfont icon-bashi'></i>
                    </li>
                    <li onClick={this.addClass.bind(this,3)}>
                      <i className='iconfont icon-ditie'></i>
                    </li>
                    <li onClick={this.addClass.bind(this,4)}>
                      <i className='iconfont icon-zihangche'></i>
                    </li>
                    <li onClick={this.addClass.bind(this,5)}>
                      <i className='iconfont icon-hangren_'></i>
                    </li>
                </ul>
                <div className='sroute-div'>
                    <div className='sroute-div-left'>
                        <div className='sroute-div-left-top'>
                           <span>从</span>
                           <input placeholder="输入起点"  className='input1'/>
                        </div>   
                        <div className='sroute-div-left-bottom'>
                            <span>到</span>
                         <input  placeholder="输入终点" className='input2' />
                        </div>
                    </div>       
                    <div className='sroute-div-right' onClick={this.exchange.bind(this)}>
                        <i className='iconfont icon-jiaohuan'></i>
                     </div>
                </div>
          </div>
        )

    }
}
export default Sroute