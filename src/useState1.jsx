import React, { useState } from 'react';
/**
 * React Hook:创建React组件的新方式（给函数所组建提供各种钩子，让其也具备类组件中的一些特点）
 * 介于函数组件和类组件之间，既可以像函数式组件易用性那个开发和渲染快，也能像类组件一样，有自己的生命周期和状态
 */
export default function Vote(props){
    console.log(props);
    // 给属性设置默认值
    let title = props.title || '--';
    //=》 想在函数组件中拥有状态和修改状态后重新渲染组件的方法
    //=>尝试使用引用类型管控多种状态
    // 1. setState中赋值什么，都相当于把原始状态整体替换成什么，所以在设置新的状态时，我们都需要把原始的状态克隆一份过来 setState({...state,xxx:xxx})
    // 2. 每一次重新赋值状态，都会额外开辟一些内容空间，所以官方推荐我们使用多次use-State
    // let [状态state，修改状态的方法set-state] = useState(初始状态值)
    // set-state(n) 把state值修改为n（重新渲染视图）
    // let [supNum, setSupNum] = useState(0)
    // let [oppNum, setoppNum] = useState(0)
    let [state,setState] = useState({
        supNum:0,
        oppNum:0
    })//=》useState()里面放初始状态
    let {supNum,oppNum} = state;
    return <div>
        <h3>{title} <span>N:{supNum+oppNum}</span></h3>
        <p>支持人数：{supNum}</p>
        <p>反对人数：{oppNum}</p>
        <button onClick={ev=>{
            console.log('点击量');
           setState({...state,supNum:supNum+1})
        }}>支持</button>
        <button onClick={ev=>{
            setState({...state,oppNum:oppNum+1})
        }}>反对</button>
    </div>
}