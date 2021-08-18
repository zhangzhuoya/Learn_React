import React, { useState, useEffect } from 'react';


let prev
function useEffect() {
    // 不传或者空数组执行 
}
export default function Vote(props) {
    let title = props.title || "--";

    // => 尝试使用引用类型值来管控多种状态
    let [state,setState] = useState({
        supNum:0,
        oppNum:0
    })
    let {supNum,oppNum} = state
    console.log(state);
    // 使用生命周期UES-EFFECT
    // useEffect(()=>{
    //     // 每一次渲染完（不管第一次或者重新渲染）都会触发执行 <=> componentDidMount/componentDidUpdate
    //     console.log('dd');
    // })
    // useEffect(()=>{
    //     console.log('ikk');
    //     // => 指定依赖项，只有数组中的状态发生改变，才会触发这个函数执行
    //     //  数组中有多项，只要有一项改变就会触发执行。
    // },[supNum,oppNum])

    useEffect(()=>{
        console.log('ddd');
            // => 如果设置为空数组 ，只有在第一次触发的时候执行 => componentDidMount
        },[])
    return <div>
        <h4>{title}<span>N:{supNum+oppNum}</span></h4>
        <p>支持人数：{supNum}</p>
        <p>反对人数：{oppNum}</p>
        <button onClick={()=>{
            setState({...state,supNum:supNum+1})
        }}>支持</button>
        <button onClick={()=>{
            setState({...state,oppNum:oppNum+1})
        }}>反对</button>
    </div>
}