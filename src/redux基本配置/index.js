import React  from 'react'
import reactDom from 'react-dom'
import Vote from './Vote'
import { createStore} from 'redux';
import Other from './Other'
//  state: 存在STORE中的状态信息
//  action： DISPATCH派发的行为对象，（必然有一个TYPE行为标识）
const reducer = function(state={
 //  在reducer第一次执行的时候，容器中没有状态，我们设置了初始值（我们一般在reducer中
  //   设置，而不是在createStore的preloadState中设置，这样可以设置每个模块中的初始状态
  // ）
  supNum: 0,
  oppNum: 0 

}, action) {
  state= JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case 'CHANGE_SUP':
      let n = action.n || 1;
      state.supNum +=n;
      break;
      case 'CHANGE_OPP':
      let m = action.m || 1;
      state.oppNum +=m;
      break;
  }
  return state

}
const store = createStore(reducer);
reactDom.render(<div><Vote store={store}></Vote><Other store={store}></Other></div>,document.getElementById('root'))