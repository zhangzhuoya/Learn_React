import React, { useEffect, useState } from 'react';
function useEffect(callback,dependencyList) {
    let flag = true//执行
    if (!dependencyList||flag) {
        callback()
        prev = dependencyList;
    }

    
}
export default function Vote(props){
    console.log(props);
    // 给属性设置默认值
    let title = props.title || '--';
    // 使用状态
    let [state,setState] = useState(()=>{
        return {
            supNum:0,
            oppNum:0
        }
    })
    let {supNum,oppNum} = state;
    // 使用生命周期use-effect
    // useEffect(()=>{
    //     //=》每一次渲染完都会出发执行（不管第一次或者是重新渲染）componentDidMount/componentDidUpdata
    //     console.log('effect执行了');
    // },[oppNum])//指定依赖项，只有数组中的状态发生改变，才会触发这个函数执行，数组中有多项，只要有一项改变就会执行
    useEffect(()=>{
        console.log('ok');
    },[])//如果传递的是空数组，那么只有第一次渲染完成后执行
    return <div>
        <h3>{title} <span>N:{supNum+oppNum}</span></h3>
        <p>支持人数：{supNum}</p>
        <p>反对人数：{oppNum}</p>
        <button onClick={ev=>{
            console.log('点击了');
           setState({...state,supNum:supNum+1})
        }}>支持</button>
        <button onClick={ev=>{
            setState({...state,oppNum:oppNum+1})
        }}>反对</button>
    </div>
}