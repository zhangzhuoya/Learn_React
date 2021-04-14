import React, { useState } from 'react';

let state;
function useState(initialState) {
    !state ? state = initialState: nulls
    let state = initialState;
    function dispathAction(new_state){
        state = new_state;
        //=> render
        

    }
    return [state,dispathAction]

}

export default function Vote(props){
    console.log(props);
    // 给属性设置默认值
    let title = props.title || '--';
    // let initialState = {
    //     supNum:0,
    //     oppNum:0
    // }
    let [state,setState] = useState(()=>{
        return {
            supNum:0,
            oppNum:0
        }
    })//=>initialState设置为函数，可以保证每一次组件重新渲染的时候，无需再重新初始化状态了=》惰性初始化
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