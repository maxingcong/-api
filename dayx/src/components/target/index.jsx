import React, {Component} from 'react'
import './targrt.scss'
import stort from '@/components/stort/stort'
import  Axios from 'axios'

class Target extends Component {
	constructor (props) {
		super(props)
		this.state = {
            names : '',
        }
    }
    componentDidMount(){
        var lag = stort.getState().lngS
        var lan = stort.getState().latS;
        var c =this.props.location.pathname.split('/')[2];
        var d =this.props.location.pathname.split('/')[3];
        this.setState({
            names:  this.props.location.pathname.split('/')[4]
        });
        var AMap = window.AMap;
        var map = new AMap.Map("target-main", {
            resizeEnable: true,
            center: [c, d],//地图中心点
            zoom: 13 //地图显示的缩放级别
        });
        //构造路线导航类
        // var driving = new AMap.Driving({
        //     map,
        //     panel
        // });
        // // 根据起终点经纬度规划驾车导航路线      // 出发点 （ ）                    //目的地
        // driving.search(new AMap.LngLat(lag, lan), new AMap.LngLat(c, d));

        var marker = new AMap.Marker({});  //坐标点标记
        map.add(marker);
    }
    goyear () {
        this.props.history.go(-1)
    }

    render () {
        return (
          <div className='target'>
              <div className='target-top'>
                 <i onClick={this.goyear.bind(this)}>返回</i>
              </div>
              <div id='target-main'></div>
              <div id="panel"></div>
              <div className='target-route'>
                 <div> {this.state.names} </div>
                 <div>详情</div>
                 <div className='target-route-span'>
                    <span> 去这里 </span>|
                    <span> 搜周边 </span>
                 </div>
              </div>
          </div>
        )

    }
}

export default Target