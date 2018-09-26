import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Axios from 'axios'
import stort from '../stort/stort'
// import { List, InputItem} from 'antd-mobile'

import './sroute.scss'

class Sroute extends Component{
    constructor(props){
        super(props)
        this.state={
            startS : [],
            endS: [],
            indexs: 0,
            StartingX:0,
            StartingY: 0,
        }
    }
    componentDidUpdate() {
      switch(this.state.indexs){
        case 0: 
        console.log(0); break;
        case 1:   
        console.log(1);  break;
        case 2:    
        console.log(2); break;
        case 3:   
        console.log(3); break;
        case 4:    
        console.log(4) ; break;          
        }
    }
    addClass(index){
        var li = document.getElementsByClassName('sroute-ul')[0].children;
        for(var i = 0 ; i < li.length ; i++){
            li[i].style.color='#ccc';
        }
        li[index-1].style.color='blue';
        this.setState({
            indexs: index-1
        })
    }
    exchange () {
        let input1 = document.getElementsByClassName('input1')[0];
        var input2 = document.getElementsByClassName('input2')[0];
        [input2.value,input1.value] = [input1.value, input2.value];
    }
// 获取数据
    start (event) {
        let value = event.target.value;// 要搜索等内容   //  获取当前位置周边信息
        Axios.get('/gaode/service/poi/tips.json?words='+value+'&adcode=true&longitude='+stort.getState().lngS+'latitude='
            +stort.getState().latS+'&city='+stort.getState().citynum+'&uuid=1167e8dd-5085-407f-bea9-96fe05549fd3')
        .then( res => {
            if (res.data.tip_list) {
                this.setState({
                    endS: res.data.tip_list
                })
            } else {
                this.setState({
                    endS: []
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
    ends (event) {
        let value = event.target.value;// 要搜索等内容   //  获取当前位置周边信息
        Axios.get('/gaode/service/poi/tips.json?words='+value+'&adcode=true&longitude='+stort.getState().lngS+'latitude='
            +stort.getState().latS+'&city='+stort.getState().citynum+'&uuid=1167e8dd-5085-407f-bea9-96fe05549fd3')
        .then( res => {
            if (res.data.tip_list) {
                this.setState({
                    startS: res.data.tip_list
                })
            } else {
                this.setState({
                    startS: []
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
  
    

//点击事件
    EndS(x, y, names) {  // 这是开始
        var val = document.getElementsByClassName('input1')[0];
        val.value = names;
        this.setState({
            endS: [],
            StartingX: x,
            StartingY: y,
        })
    }
    Stats(x, y, names){  // 这是结束
        var val = document.getElementsByClassName('input2')[0];
        val.value = names;
        this.setState({
            startS: [] 
        })
        //这里开始传参  获取开始位置到目标位置
        this.props.history.push({ pathname : `/planning/${this.state.StartingX}/${this.state.StartingY}/${x}/${y}/${names}`});
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
                           <input placeholder="输入起点" onChange={this.start.bind(this)} className='input1'/>
                           <ul>
                            {
                                this.state.startS.map((item, index) => {
                                    if(item.tip.x){
                                        return(
                                            <li key={index} onClick={this.Stats.bind(this, item.tip.x, item.tip.y, item.tip.name)}>
                                                    <span>{item.tip.name}</span>
                                                    <em>{item.tip.district} </em>
                                            </li>
                                        )
                                    }
                                })
                                }
                        </ul>
                        </div>   
                        <div className='sroute-div-left-bottom'>
                            <span>到</span>
                         <input  placeholder="输入终点" onChange={this.ends.bind(this)} className='input2' />
                         <ul>
                            {
                                this.state.endS.map((item, index) => {
                                    if(item.tip.x){
                                        console.log(item.tip.x)
                                        return(
                                            <li key={index} onClick={this.EndS.bind(this, item.tip.x, item.tip.y, item.tip.name)}>
                                                <span>{item.tip.name}</span>
                                                <em>{item.tip.district} </em>
                                            </li>
                                        )
                                    }
                                })
                                }
                        </ul>
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