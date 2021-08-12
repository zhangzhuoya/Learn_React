import React from 'react';
import reactDom from 'react-dom';
// import Vote from './Vote.jsx'

class Test extends React.Component {
  state = {
    n: 0
  }
  componentWillMount() {
    this.setState({n: 100})
    console.log(this.state.n);//也是异步的
  }
  render() {
    let n = this.state.n;
    return <div>
      <h1>{n}</h1>
      <button onClick={()=>{
        this.handle();
      }}>点击+N</button>
    </div>
  }
  handle = e =>{
    /**
     * SET-STATE在合成事件或者生命周期函数中都是异步的
     *   1. REACT有一个类似于浏览器的渲染队列机制,他会在多次执行SET-STATE的情况下
     * 把其合成一次进行重新渲染(如果修改的状态一样,以最后一次为主)
     */
    let n = this.state.n;
    this.setState({
      n:n+1
    })
    this.setState({
      n:100
    })
    this.setState({
      n:200
    })
    this.setState({
      n:300
    })
    this.setState({
      n:400
    })
    console.log('===');
    console.log(this.state.n);
  }
}

//  reactDom.render(<Vote title="投票组件标题" supNum={0} oppNum={0}></Vote>,document.getElementById('root'))

 reactDom.render(<Test></Test>,document.getElementById('root'))
