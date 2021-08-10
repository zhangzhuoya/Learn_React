import React from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component {
  // => 1.处理属性（获取默认值和校验传递属性的类型）
  static defaultProps = {
    title:'北京时间'
  };
  static propTypes = {

  };
  // => 2.处理状态（执行CONSTRUCTOR获取初始的状态信息）
  constructor(props){
    super(props);
    this.state = {n:100}
    console.log('=====constructor');
  }
  //state = {n:100};//=> this.state={}和写constructor一致
  // =》 3. ComponentWillMount:第一次组件渲染之前
  componentWillMount(){
    // => 从服务器获取的数据（把获取的数据重新赋值给状态或者redux）
    console.log('========componentWillMount');
  }
  //=> 4. render 第一次或者重新进行视图渲染s
  render(){
    console.log('=====render');
    return <div onClick={()=>{
      // =>修改状态信息
      this.setState({n:this.state.n+1})
    }}>{this.state.n}</div>
  }
  //5. componentDidMount：第一次渲染完成
  componentDidMount(){
    //=>此处可以获取dom了
    console.log("=====componentDidMount");
  }
  //=>更新状态后
  //=》 1. 是否应该更新组件
  shouldComponentUpdate(nextProps,nextState){
/**
 * 当我们执行setState等操作，首先触发的是当前钩子函数，
 * this.state当前状态（改之前的状态）
 * nextState即将要修改的状态信息
 * this.props和nextProps一样的意思
 * 钩子函数返回true代表允许重新渲染视图，反之停止重新渲染
 */
    console.log('=======shouldComponentUpdat',
    this.props,this.state,nextProps,nextState);
     return false
  }
  //=>
  componentWillUpdate(){
    console.log('componentWillUpdate');

  }
  componentDidUpdate(){
    console.log('componentDidUpdate');

  }
}
ReactDOM.render(
    <Clock />,
  document.getElementById('root')
);