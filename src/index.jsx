import React from 'react'
import reactDom from 'react-dom'
import PropTypes from 'prop-types'

/**
 * 非受控组件：不受状态管控，仅仅dom操作
 */
class Clock extends React.Component {
    static defaultProps = {
        title: '北京时间'
    }
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleDateString()
        }
    }
    render(){
        return <div>
           <h1>{this.props.title}</h1>
           <p ref='{element=>{
               // ref真实项目中应用最多的是函数的模式
               // x 代表当前元素对象，直接把元素对象挂载到实例上了    
               this.timeBox = element
           }}'></p>
        </div>
    }
    componentDidMount() {
        // 可以获取dom元素，this.refs
        setInterval(()=>{
            // this.refs.timeBox.innerHTML = new Date().toLocaleDateString()
            // this.timeBox.innerHTML = new Date().to()
        })
    }
}

reactDom.render(<div>
    <Clock title='北京时间'></Clock>
</div>,document.getElementById('root'))