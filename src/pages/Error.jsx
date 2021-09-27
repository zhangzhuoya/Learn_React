import React, {Component} from 'react'

class Error extends Component {
    state = {
        time: 5
    }
    render() {
        return<>
         您的页面不存在404，
         <p>
         {this.state.time}秒后跳转到客户管理首页
         </p>
        </>
    }
    /**
     * 
     * 当前组件是受路由管控的，基于路由规则匹配后<Route></Route>
     *   受路由规则管控的组件 ，在属性上都有三个属性 this.props
     *   HASH路由自己模拟了一套History Api机制（历史记录池）
     *   每一次路由切换和条状都会像池子追加一条记录
     * history: {
     *   length： 记录历史记录池的数量
     *   go(n): 跳转到指定的记录 go(-1) => go(back) go(1)= goForward()
     *  push: 跳转到指定的路由地址，也是像池子中追加一条新记录
     *  this.props.history.push(xxx)
     *   replace: 把当前记录替换成谁
     *   location: {
     *     pathname: '' 条状的路径地址
     *     search： ’‘ 问号传参的信息
     *      hash：  哈希值
     *     state ： 传递进来的信息，和vue中的隐性传参一样
     * }
     * }
     * match: {} 存储一些路由解析地址后的规则和结果
     *   
     */
    componentDidMount() {
        console.log(this.props);
        let timer = setInterval(()=>{
            let time = this.state.time;
            time--;
            if (time===0) {
                // 跳转
                // this.props.history.push('/custom')
                this.props.history.push({
                    // 可以在动态路由跳转的时候传递参数
                    pathname: '/custom',
                    search: "?x=10",// 必须是字符串才可以
                    // hash:'#A',
                    state:{//=> 隐性传参，传递后，页面刷新，隐性传参的信息则没有了
                       n: 100
                    }
                })
                clearInterval(timer)
            }
            this.setState({
                time
            })
        },1000)
    }
}

export default Error;