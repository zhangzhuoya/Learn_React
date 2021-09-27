import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
class Nav extends Component {
    render() {
        return<>
        <header style={{background:"lightblue"}}>
            <a href="">客户管理</a>
            <a href="">系统设置</a>
        </header>
        </>
    }
}
/**
 * Nav本身不受路由管控，默认属性中没有histroy/location等内容
 *   想让其变为受路由管控的，或者想要这些属性，只需要react-router-dom中的withRouter高阶组件代理一下即可
 *   用withRouter代理的组件必须包含在hashRouter或者BrowserRouter中
 */
export default withRouter(Nav);