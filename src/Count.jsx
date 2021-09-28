import React from 'react'
import PropTypes from 'prop-types'


/**
 * React.PureComponent
 *   基于浅比较的方式，给每一个组件设置shouldComponentUpdate (如果自己设置了，以自己的为主)
 *   在里面把状态和属性都做对比，如果两者基于浅比较都没有发生任何更改，则不再重新渲染组件
 */
/**
 * 是基于浅比较，所以只要属性是引用类型，到那时修改后的值变了，但是地址不变，也不会重新渲染
 * this.state.arr.push(30)
 * setState({
 * arr: this.state.arr
 * })
 * =>    purComponent 对forceUpdate 无效（forceUpdate根本不走shouldComponentUpdate）
 * => 父组件是PureComponent那么子组件也具备了同样的功效（因为父组件不渲染，子组件也不会渲染）
 * 
 * => PureComponent不要乱用，只有那些状态和属性不经常更新的组件我们来做优化
 * 对于经常更新的 这样处理后反而浪费性能，因为每一次比较也是会耗费时间的。
 */
class CountContent extends React.PureComponent {
    render() {
        return <>
        {this.props.num}</>
    }
}
export default class CountShow extends React.PureComponent {
   state = {
       num: 0,
       x: 200,
       obj: {a:1},
       arr: ['123']
   }
    render() {
        console.log("render");
        return <>
        <CountContent num={this.state.num}></CountContent>
        
        <button onClick={()=>{
            this.setState({
                num: this.state.num
            })
        }}>累加</button></>
    }
    shouldComponentUpdate(nextProps,nextState) {
    }
}
