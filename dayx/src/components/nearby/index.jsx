import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import stort from '../stort/stort'

import './nearby.scss'

class nearby extends Component{
    constructor(props){
        super(props)
        this.state={}
    };
    nearbySecah(val){
        console.log(val);
    }
  
    render () {
        return (
            <div className="nearby">
                <div className='nearby-top'>
                    <div className='nearby-top-left'>
                        <img src={require('@/asscs/img/5.png')}/>
                    </div>
                    <div className='nearby-right'>
                        <li><em>晴</em> <em>18℃</em><em>空气优</em></li>
                        <div><span><em>位置</em>{stort.getState().city}</span>  <span className='nearby-span1'>切换城市</span></div>
                    </div>
                </div>
                <p></p>
                <ul>
                    <li onClick={this.nearbySecah.bind(this,1)}><img src={require('@/asscs/img/1.png')} alt=""/><em>美食</em></li>
                    <li onClick={this.nearbySecah.bind(this,2)}><img src={require('@/asscs/img/2.png')} alt=""/><em>美食</em></li>
                    <li onClick={this.nearbySecah.bind(this,3)}><img src={require('@/asscs/img/3.png')} alt=""/><em>美食</em></li>
                    <li onClick={this.nearbySecah.bind(this,4)}><img src={require('@/asscs/img/4.png')} alt=""/><em>美食</em></li>
                    <li onClick={this.nearbySecah.bind(this,5)}><img src={require('@/asscs/img/1.png')} alt=""/><em>美食</em></li>
                    <li onClick={this.nearbySecah.bind(this,6)}><img src={require('@/asscs/img/2.png')} alt=""/><em>美食</em></li>
                    <li onClick={this.nearbySecah.bind(this,7)}><img src={require('@/asscs/img/3.png')} alt=""/><em>美食</em></li>
                    <li onClick={this.nearbySecah.bind(this,8)}><img src={require('@/asscs/img/4.png')} alt=""/><em>美食</em></li>
                    <li onClick={this.nearbySecah.bind(this,9)}><img src={require('@/asscs/img/1.png')} alt=""/><em>美食</em></li>
                    <li onClick={this.nearbySecah.bind(this,10)}><img src={require('@/asscs/img/2.png')} alt=""/><em>美食</em></li>
                    <li onClick={this.nearbySecah.bind(this,11)}><img src={require('@/asscs/img/3.png')} alt=""/><em>美食</em></li>            
                    <li onClick={this.nearbySecah.bind(this,12  )}><img src={require('@/asscs/img/4.png')} alt=""/><em>美食</em></li>
                </ul>
                <div className='nearby-foot1'>
                   <span>
                       <img src={require('@/asscs/img/6.png')}/>
                       <em>更多详情 , 点击查看</em>
                   </span>
                   <span>打开</span>
                </div>
                <div className='nearby-foot2'>
                   <li>
                      <NavLink  to='/home'>
                          首页
                      </NavLink>
                       
                    </li>|
                   <li>
                       <NavLink  to='/home'>
                         意见反馈 
                      </NavLink>
                    </li>|
                   <li>
                      <NavLink  to='/home'>
                          高德地图
                          </NavLink>
                    </li>

                </div>


          </div>
        )

    }
}
export default nearby