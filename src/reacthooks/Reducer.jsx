import React, {useReducer} from 'react';
// 初始状态
let initailState = {
    n:0,
    m:0
}
// 统一修改state的函数
// state：容器中当前的状态，actions：基于dispath派发的行为操作
// actions是基于dispatch派发的行为操作（他就是派发的时候传递的对象）
function reducer(state,action) {
    switch(action.type){
        case 'CHANGE-N':
            state={...state,n:action.payload};
            break
    }
    
}
export default function ReducerBox() {
   let [state, dispatch] = useReducer(reducer,initailState)
   dispatch({
       type: 'CHANGE-N',
       payload: 100
   })
   
   return <div>
      <input type="text"/>
      +
      <input type="text"/>
      =
      <span></span>
  </div>    
}