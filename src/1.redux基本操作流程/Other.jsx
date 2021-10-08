import React,{useState,useEffect} from 'react';
export default function Other(props) { 
    let storeState = props.store
    let [supNum,changeNum] = useState(storeState.getState().supNum) 
    useEffect(()=>{
        storeState.subscribe(()=>{
          changeNum(storeState.getState().supNum)
        })
    },[])
    return <div>
        其他组件：<span>{storeState.getState().supNum}</span>
    </div>
}