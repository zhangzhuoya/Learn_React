import React from 'react'
import reactDom from 'react-dom'
import PropTypes from 'prop-types'

/**
 * 我们把基于状态（或者属性）的更新来驱动视图渲染：“受控组件（受状态管控组件）”
 * 属性啥时候能改：设置默认值，让父组件重新调取子组件传递不同的属性。
 * 把获取的属性赋值给组件的状态，后期修改状态也可以。
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
        console.log('B');
        console.log(this.props);
        return <div>
           <h1>{this.props.title}</h1>
        </div>
    }
    componentDidMount() {
        //=>第一次加载组件渲染完毕，等价于vue中的mounted
        //this.state.time = '哈哈哈'这样确实可以修改状态信息，但是不会通知组件重新渲染
        // this.forceUpdate()
        //  每一次修改状态应该基于： setState方法(相对于this.state.xxx=xxx来说
        // 不仅更改了状态，还会通知视图重新渲染)
        //  partialState: 部分状态对象,我们初始化的状态有很多，像修改谁，这块只写谁即可。
        // （react内部是把之前的状态和传递partialState进行合并替换的）
        // Object.assgin(this.state.partialState)
        //   callback: setState在某些情况下是异步操作,此回调函数代表，
        // 通知视图重新渲染后执行的
        this.setState({
            time: new Date().toLocaleDateString()//
        },()=>{
            //=>通知视图已经重新渲染完成了
            console.log('c');
        })
        console.log('A');
    }
}

reactDom.render(<div>
    <Clock title='北京时间'></Clock>
</div>,document.getElementById('root'))