
import { createStore, combineReducers} from 'redux'
// 1、引入创建仓库函数和整合各个状态的函数
// const flag = (state=true,  //active) => {
//     switch (type) {
//       case 'CHANGE_FLAG':
//         state = data
//         return state
//       default:
//         return state
//     }
//   }
// 各个状态的纯函数。不能含有类似于计时器这种函数，在此处只管改变状态的值，
 //是通过action传递过来的
 const city = (state= '',{type, data}) => {
     switch(type){
        case 'CHANGE_CITY':   //城市名
           state = data
           return state
        default: 
           return state
     }
 }
 const citynum = (state= '',{type, data}) => {
    switch(type){
       case 'CHANGE_ADCODE':   //城市编号 adcode
          state = data
          return state
       default: 
          return state
    }
} 
const latS = (state= 22.547,{type, data}) => {
    switch(type){
       case 'CHANGE_LAT':   //经度  lng
          state = data
          return state
       default: 
          return state
    }
} 
const lngS = (state= 114.085947,{type, data}) => {
    switch(type){
       case 'CHANGE_LAG':   //纬度 lat
          state = data
          return state
       default: 
          return state
    }
}

 // 整合所有所有的状态
 const sta = combineReducers({city, citynum, latS, lngS});

 // 整合后创建仓库
 const store = createStore(sta)
 //暴露
 export default store

