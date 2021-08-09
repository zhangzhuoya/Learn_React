import React from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component {
  // => 1.处理属性（获取默认值和校验传递属性的类型）
  static defaultProps = {
    title: '北京时间'
  };
  static propTypes = {

  };
  // =>处理状态（执行CONSTRUCTOR获取初始的状态信息）
  constructor(props) {
    super(props);
    this.state = { n: 100 }
    console.log('=====constructor',this.props);
  }
  //state = {n:100};//=> this.state={}和写constructor一致
  // =》 3. ComponentWillMount:第一次组件渲染之前
  componentWillMount() {
    // => 从服务器获取的数据（把获取的数据重新赋值给状态或者redux）
    console.log('========componentWillMount');
  }
  render() {
    console.log('=====render');
    return <div onClick={() => {
      // =>修改状态信息
      /**
       * 1.执行setState必然会触发shouldComponentUpdate,根据ture还是false决定是否渲染，如果该周期返回false，不会渲染
       * 无论返回啥状态都会改变只是没有重新渲染
       */
      let n = this.state.n;
      console.log(n);
      this.setState({ n: this.state.n + 1 })
      // =>强制更新（重新渲染），不会执行shouldComponentUpdate这个钩子函数
      this.forceUpdate()
    }}>{this.state.n}
    <h3>test组件传递过来的值:{this.props.flag}</h3>
    </div>
  }
  //5. componentDidMount：第一次渲染完成
  componentDidMount() {
    //=>此处可以获取dom了
    console.log("=====componentDidMount");
  }
   //=》当父组件重新渲染，子组件也会重新渲染，首先会触发此钩子函数
   componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps",nextProps);
  }
  //=>更新状态后
  //=》 1. 是否应该更新组件
  shouldComponentUpdate(nextProps, nextState) {
    /**
     * 当我们执行setState等操作，首先触发的是当前钩子函数，
     * this.state当前状态（改之前的状态）
     * nextState即将要修改的状态信息
     * this.props和nextProps一样的意思
     * 钩子函数返回true代表允许重新渲染视图，反之停止重新渲染
     */
    console.log('=======shouldComponentUpdate', this.props, this.state, nextProps, nextState);
    return true;
  }
  //=>
  componentWillUpdate() {
    console.log('componentWillUpdate');

  }
  componentDidUpdate() {
    console.log('componentDidUpdate');

  }
 
}

class Test extends React.Component{
  state = {x:0}
  render(){
    return <div>
      {/*第一次渲染TEST视图，会重新创建一个Clock（执行clock的完整的生命周期）
        当Test重新渲染，把最新的属性传递，也会让clock子组件重新渲染（但是不会重新创建），clock不会从constructor重新执行
      */}
      <Clock flag={this.state.x}></Clock>
      <button onClick={_=>{
        console.log('点击了');
        let x = this.state.x;
        this.setState({x:x+1})
      }}>点我啊~~</button>
    </div>
  }
}
ReactDOM.render(
  <Test />,
  document.getElementById('root')
);