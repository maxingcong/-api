import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import stort from '@/components/stort/stort'
 // 初次访问定向路由
import {HashRouter as Router, Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'

// 文件入口  js/scss
import Index from '@/myapp.jsx'
import '@/main.scss'
import ErrorBoundary from '@/errorBoundary/index.jsx'
// import Target from '@/components/target/index.jsx'
import Target from '@/components/target/index.jsx'
import Planning from '@/components/planning/index.jsx'


//异常错误处理
function render() {
    ReactDOM.render(  //节点渲染  //错误处理  // 初始化路由
        <ErrorBoundary>
                 <Router>
                     <Switch>
                         <Route path='/target' component={Target}/>
                         <Route path='/planning' component={Planning} />
                         <Route path='/' component= {Index} />
                     </Switch>
            </Router>
        </ErrorBoundary>,
        document.querySelector('#app')
    )
}
render()
// 执行后的监听 改变执行渲染
stort.subscribe(render);


