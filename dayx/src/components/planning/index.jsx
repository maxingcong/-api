import React, {Component} from 'react'
import  Axios from 'axios'

import './planning.scss'

class Target extends Component {
	constructor (props) {
		super(props)
		this.state = {
            names : '',
        }
    }
    componentDidMount(){
        var staingX =this.props.location.pathname.split('/')[2];
        var staingY =this.props.location.pathname.split('/')[3];
        var endX =this.props.location.pathname.split('/')[4];
        var endY =this.props.location.pathname.split('/')[5];
        console.log(this.props.location.pathname);
        console.log(staingX);
        console.log(staingY);
        console.log(endX);
        console.log(endY);


        var AMap = window.AMap;
        var map = new AMap.Map("planning-main", {
            resizeEnable: true,
            center: [staingX, staingY],//地图中心点
            zoom: 13 //地图显示的缩放级别
        });
        //构造路线导航类
        var driving = new AMap.Driving({
            map,
            panel
        });
        // 根据起终点经纬度规划驾车导航路线      // 出发点 （ ）                    //目的地
        driving.search(new AMap.LngLat(staingX, staingY), new AMap.LngLat(endX, endY));
        
        AMap.plugin(['AMap.ToolBar',     // 缩放条
            'AMap.Scale',       //比例尺
            'AMap.OverView',    //鹰眼
            'AMap.MapType',     //图层切换
            'AMap.Geolocation', //定位插件
            'AMap.Autocomplete',
        ],function(){                        //异步同时加载多个插件
            map.addControl(new AMap.ToolBar());
            map.addControl(new AMap.Scale());
            map.addControl(new AMap.OverView({isOpen:true}));
            map.addControl(new AMap.MapType());
            map.addControl(new AMap.Geolocation());
        });
        var marker = new AMap.Marker({});  //坐标点标记
        map.add(marker);
    }
    goyear () {
        this.props.history.go(-1)
    }

    render () {
        return (
          <div className='planning'>
              <div className='planning-top'>
                 <i onClick={this.goyear.bind(this)}>返回</i>
              </div>
              <div id='planning-main'></div>
              <div id="panel"></div>
              {/* <div className='target-route'>
                 <div> {this.state.names} </div>
                 <div>详情</div>
                 <div className='target-route-span'>
                    <span> 去这里 </span>|
                    <span> 搜周边 </span>
                 </div>
              </div> */}
          </div>
        )

    }
}

export default Target