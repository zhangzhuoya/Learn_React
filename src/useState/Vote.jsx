import React, { useState } from 'react';
export default function Vote(props) {
    let title = props.title || "--";

    // => 尝试使用引用类型值来管控多种状态
    let [state,setState] = useState({
        supNum:0,
        oppNum:0
    })
    let {supNum,oppNum} = state
    console.log(state);
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