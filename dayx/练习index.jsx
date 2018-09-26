import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Axios from 'axios'


// 判断
// class App extends Component { // 通过 entends 继承
//     constructor(props) {  // 子类 必须 在 constructor() 继承
//         super(props)      // 调用 super( )方法，
//         this.state={  // 初始化数据
//             meg: 'nihao',
//             list: [1,2,3,4,5,6]
//         }
//     }
//     render () {  //渲染内容
//         if(this.state.list.length >= 6){
//             return (
//                 <h1>{this.state.meg}</h1>
//             )
//         } else {
//             return ( 
//                 <h1>长度小于等于6</h1>
//             )
//         }
//         return (
//              <h1>{this.state.meg}</h1>
//         )
//     }
// }

//事件循环
class App extends Component { // 通过 entends 继承
    constructor(props) {  // 子类 必须 在 constructor() 继承
        super(props)      // 调用 super( )方法，
        this.state={  // 初始化数据
            meg: 'nihao',
            items: []
        }
    }
    ListGet (a, b) {
        Axios.get('http://www.daxunxun.com/douban',{
              params: {
                  a,
                  b
              }
        }).then(res => {
            // this.state.items = res.data
            console.log(this.state.items)
            this.setState({
                items: res.data
            })
        })
    }
    render() {  //渲染内容
            // return (
            //     <div>
            //     <button onClick={this.ListGet.bind(this, 0, 50)}>点击</button>
            //     <ul>
            //         {
            //          this.state.items.map((ites , index) => {
            //             return <li key={ites.id}>{ites.title}</li>
            //          })
            //         }
            //     </ul>
            //     </div>
            // )
            if(this.state.items.length <= 0 )  {
                return (<div>
                        react事件处理
                        <button onClick = {this.ListGet.bind(this, 0, 50)}>点击时间测试</button>
                        暂无数据
                    </div>)
            } else {
                return (
                    <div>
                        react事件处理
                        <button onClick = {this.ListGet.bind(this, 0, 50)}>点击时间测试</button>
                        有数据
                        <ul>
                            {
                                this.state.items.map((item, index) => {
                                    return <li key={item.id}>{item.title}</li>
                                })
                            }
                        </ul>
                    </div>
                )
            }
    }
}
ReactDOM.render(<App/> , document.getElementById('app'))
