import React, { useState } from 'react';
export default function Vote(props) {
    let title = props.title || "--";

    // => 尝试使用引用类型值来管控多种状态

    // 1. SET-STATE 中赋值什么，都相当于把原始状态整体替换成什么，
    //    所以在设置新状态信息之前，我们需要把原始状态先克隆一份
    //  setState(...state,xxx:xxx)
    // 2. 每次重新赋值状态，都会额外开辟一些内存空间，所以官方推荐我们使用多次USE-STATE。
    let [state,setState] = useState({
        supNum:0,
        oppNum:0
    })

    // 3. 写成函数,可以保证每一次组件重新渲染的时候，无需在重新初始化状态了 => 惰性初始化
    // let [state,setState] = useState(function () {
    //     return {
    //         supNum: 0,
    //         oppNum: 0
    //     }
        
    // })
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