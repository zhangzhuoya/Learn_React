import React from 'react'
import reactDom from 'react-dom'
import PropTypes from 'prop-types'
/**
 * 对于每一个类组件，只需要学会：
 * 1. 数据管控
 *    属性 props
 *    状态 state (私有转台，redux公共状态管理)
 * 
 * 基于第三方插件prop-types设置属性的规则：默认值和其他规则
 * static defaultProps = {
        xxxx: 'xxxx'
    }

    设置一些其他规则
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    PropTypes.isRequired 必须传递
    PropTypes.string/bool/number/func/object/symbol/node(元素节点)/element(JSX元素)instanceOf(必须是某个类的实例)

    => 和VUE一样 我们设置的规则不会阻碍内容的渲染，不符合规则在控制台报错

 */
class Clock extends React.Component {
    static defaultProps = {
        title: '北京时间'
    }
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    constructor(props) {
        super()
    }
    render(){
        console.log(this.props);
        return <div>
           <h1>{this.props.title}</h1>
        </div>
    }
}

reactDom.render(<div>
    <Clock title='北京时间'></Clock>
</div>,document.getElementById('root'))