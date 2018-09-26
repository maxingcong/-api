// import React, {Component} from 'react'
// import ReactDOM from 'react-dom'
// // import Axios from 'axios'

// // ReactDOM.render(<div><h1>hollow , react</h1></div>, document.querySelector('#app'))
// // console.log(111)
// //class 定义组件 并抽离html
// // class Hollow extends React.Component{
// //     render () {
// //         return (
// //             <div className='test'>
// //                 <h1>hollow , react</h1>
// //             </div>
// //         )
// //     } 
// // }

// // es6 抽离HTML 组件
// // const Hollow = () => {
// //     return (
// //      <div className='test'>
// //         <h1>hollow , react</h1>
// //      </div>
// //     ) 
// // }

// // 初始化数据
// // class Hollow extends Component { // 通过 entends 继承
// //       constructor(props) {  // 子类 必须 在 constructor() 继承
// //           super(props)      // 调用 super( )方法，
// //           this.sup={
// //               list: [1,2,3,4,5],
// //               meg: 'nihao'
// //           }
// //       }
// //       render () {
// //           return (
// //             <div>
// //                 hello state
// //                 <h1>
// //                     {this.sup.msg}
// //                 </h1>
// //                 <button >点击</button>
// //            </div>
// //           )
// //       }
// // }

// // 循环
// class App extends Component { // 通过 entends 继承
//     constructor(props) {  // 子类 必须 在 constructor() 继承
//         super(props)      // 调用 super( )方法，
//         this.state={  // 初始化数据
//             meg: 'nihao'
//         }
//     }
//     // test (val,vas) {
//     //     Axios.get('http://www.daxunxun.com/douban',{
//     //         params: {
//     //             val,
//     //             vas
//     //         }
//     //     }).then(res => {
//     //         console.log(res.data);
//     //      })
//     // }
//     render () {
//         return (
//              <h1>{this.sup.meg}</h1>
//         )
//     }
// }
// ReactDOM.render(<App/> , document.getElementById('app'))
