import React,{ useReducer, useEffect} from 'react';

//  初始状态
let initailState = {
    n: 0,
    m: 0
}

// //=> 统一修改STATE的函数
// //  state 容器中的当前状态
// //  actions基于dispatch派发的行为操作，（他就是派发时传递的对象）
function reducer(state,action) {
    switch(action.type) {
        case 'CHANGE-N':
            state = { ...state, n:action.payload};
            break;
            case 'CHANGE-M':
                state = { ...state, m:action.payload};
                break;
    }
    return state;//=> 返回啥就把当前容器的状态改成啥
}
export default function ReducerBox() {
    let [state,dispatch] = useReducer(reducer,initailState)
    let {n,m} = state
    let total = n+m
    console.log(n,m);
    useEffect(()=>{
        // dispatch({
        //         type: 'CHANGE-N',
        //         payload: 100
        //     })
    })
    return<div>
        <input type="text" value={n} onChange={(e)=>{
              dispatch({
                type: 'CHANGE-N',
                payload: e.target.value
            })
        }}/>
        +
        <input type="text" value={m} onChange={(e)=>{
            dispatch({
                type: 'CHANGE-M',
                payload: e.target.value
            })
        }}/>
        ={total}
        <span></span>
    </div>
}