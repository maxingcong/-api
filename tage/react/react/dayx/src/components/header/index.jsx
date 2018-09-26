import React, {Component} from 'react'
import {NavLink,Link} from 'react-router-dom'
import  stort from '../stort/stort'
import Axios from 'axios'

import './header.scss'

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            words: [],
        }
    }
    wode(event){  // 搜索
     let value = event.target.value;// 要搜索等内容   //  获取当前位置周边信息
        Axios.get('/gaode/service/poi/tips.json?words='+value+'&adcode=true&longitude='+stort.getState().lngS+'latitude='
            +stort.getState().latS+'&city='+stort.getState().citynum+'&uuid=1167e8dd-5085-407f-bea9-96fe05549fd3')
        //words=q&adcode=true&user_loc=118.767413%2C32.041544&longitude=118.767413&latitude=32.041544
        // &city=320100&uuid=1167e8dd-5085-407f-bea9-96fe05549fd3

        .then( res => {
            if (res.data.tip_list) {
                this.setState({
                    words: res.data.tip_list
                })
            } else {
                this.setState({
                    words: []
                })
            }
            // console.log(res.data)
        })
        .catch(err => {
            console.log(err);
        })
   };


    render () {
        return (
            <div className='header'>
                 <div className='header-top'>
                   <ul className='header-top-ul'>
                       <li><img src="https://m.amap.com/img/common/common_header_icon.png?v=c218e80b"/></li>
                       <li>
                          <NavLink to='/home' activeClassName='active'>
                              <i className='iconfont icon-chinamap-chart'></i><em>地图</em>
                          </NavLink>
                       </li>
                       <li>
                          <NavLink to='/route' activeClassName='active'>
                                <i className='iconfont icon-luxian'></i>路线
                          </NavLink>
                       </li>
                       <li>
                           <NavLink to='/nearby' activeClassName='active'> 
                             <i className='iconfont icon-fujin-'></i>附近
                           </NavLink>                           
                        </li>
                   </ul>
                 </div>
                 <div className='header-botton'>
                    <div className='header-botton-secah'>
                       <input type="text" onChange={this.wode.bind(this)} placeholder='查找地点.线路.公交'/>
                        <button><i className='iconfont icon-sousuo'></i></button>
                    </div>
                    <ul>
                        {

                           this.state.words.map((item, index) => {
                               console.log(item.tip);
                               if(item.tip.x){
                                   return(
                                       <Link to={ {pathname: `/target/${item.tip.x}/${item.tip.y}`}} key ={index}>
                                           <li key={index}>
                                               <span>{item.tip.name}</span>
                                               <em>{item.tip.district} </em>
                                           </li>
                                       </Link>
                                   )
                               } else{
                                   console.log(1)
                               }
                           })

                        }
                    </ul>
                 </div>
            </div>
        )

    }
}
export default Header
