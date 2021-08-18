import React, { useState } from 'react';
/**
 * React Hook: 创建REACT组件的新方式(给函数组件提供各种钩子函数，让其也具备类组件中的一些特点)
 *   介于函数式组件和类组件之间，即能像函数式组件一样开发渲染，也能像类组件一样，有自己的状态和生命周期
 */

export default function Vote(props) {
    console.log(props);
    let title = props.title || "--";
    //=> 想在函数式组件中拥有状态和修改装填后重新渲染组件的方法

    // let [状态，修改状态的方法] = useState(初始状态值)

    //  SET-STATE(N) 把STATE的值修改为N,并且重新渲染视图
    let [supNum,setSupNum] = useState(0);//=> [0,func]
    let [oppNum,setoppNum] = useState(0);//=> [0,func]

    return <div>
        <h4>{title}<span>N:0</span></h4>
        <p>支持人数：{supNum}</p>
        <p>反对人数：{oppNum}</p>
        <button onClick={()=>{
            setSupNum(supNum+1)
        }}>支持</button>
        <button onClick={()=>{
            setoppNum(oppNum+1)
        }}>反对</button>
    </div>
}