/**
 * 
 */
import React, {Component} from 'react'
import { HashRouter, BrowserRouter,Switch, Route, Redirect } from 'react-router-dom'
import Custom from './Custom';
import System from './System';
import Error from './Error';
import Nav from './Nav'

class App extends Component {
    render() {
        return<>
      
            {/* HashRouter： HASH路由容器 Route： 设置路由规则 
              1. 路由特点一： 不管当前路由是否匹配，依然会向下匹配查找，我们期望的是
              某一条规则匹配后，不再向下匹配了（Vue路由天生就是这样的）=> react路由可以
              把路由规则基于Switch包裹起来即可
              2. 路由特点二： 默认路由匹配规则是不精准也是不严格的 ，我们可以蛇者exact精准匹配
               strtict（严格匹配）
              页面地址/system  => path='/' => '/system' 不匹配'/system100'
              3. Reddirect 实现路由的重定向
            
            */}
            <HashRouter>
            <Nav></Nav>
                <main>
                    <Switch>
                        {/* <Route path="/" exact component={Custom}></Route> */}
                        <Redirect from='/' to="/custom" exact></Redirect>
                        <Route path="/custom" component={Custom}></Route>
                        <Route path="/system" component={System}></Route>
                        {/* 以上规则都不符合，才会走他 */}
                        {/* <Redirect to="/custom"></Redirect> */}
                        <Route path="*" component={Error}></Route>
                    </Switch>
                </main>
            </HashRouter>

        </>
    }
}

export default App;