import React, {Component} from 'react'
import Axios from 'axios'
import stort from '@/components/stort/stort'
import './home.scss'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
   componentDidMount(){
       // 调用方法渲染页面
       var AMap = window.AMap;
       var map  = new AMap.Map('home',{
            zoom    : 11,        //级别
            viewMode: '3D',      //使用3D视图
            layers  : [//使用多个图层
                new AMap.TileLayer.Satellite()
                // new AMap.TileLayer.RoadNet()
            ],
            zooms: [4,18],   //设置地图级别范围
       });
       var marker = new AMap.Marker({});  //坐标点标记
       map.add(marker);

       //插件的调用
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
       // 获取地理定位信息
         let a = map.Je.center.lng;  //经度
         let b = map.Je.center.lat;  //纬度
       console.log(map,a,b);
             stort.dispatch({
                type: 'CHANGE_LAG',
                data: a
             });
            stort.dispatch({
                    type: 'CHANGE_LAT',
                    data: b
             })
         this.getaddcity(a,b);
   }
   
    getaddcity(a,b) {  // 获取当前城市 名编号
          Axios.get('/gaode/service/geo/getadcode.json?longitude='+a+'&latitude='+b)
           .then( res => {
                stort.dispatch({
                    type: 'CHANGE_CITY',
                    data: res.data.city
                });
                stort.dispatch({
                    type: 'CHANGE_ADCODE',
                    data: res.data.adcode
                })
                // res.data.city;   //城市名
                // res.data.adcode; //城市编号
               console.log(res.data)
           })
           .  catch(err => {
               console.log(err);
           })
    };

    render () {
      
        return (
          <div id='home'>
             {/* <Map amapkey={'b83143243a220fdd4eff24c3c284866d'}  plugins={plugins}  events={events}>
             </Map> */}
                {/* <div className='home-top-img'>
                    <img src='https://m.amap.com/img/activity/red_packet.png?v=391dcbde' />
                </div>
            <div className='home-bottom-left'>
                    <li><i className='iconfont icon-Group-'></i></li>
                    <li><i className='iconfont icon-shezhi'></i></li>
                </div> */}
            </div>
        )

    };
}
export default Home