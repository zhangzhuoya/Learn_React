import React  from 'react'
import reactDom from 'react-dom'
import { Provider } from 'react-redux';
import store  from './store';
// import Vote from './Vote';
import A from  './A'
import B from './B'
/**
 * Provider: REDUX祖先组件目的十八REDUX容器中的STORE放到上下文中，供后代组件
 *   直接调取使用
 * 
 */
reactDom.render(<div>
  <Provider store={store}>
    <A></A>
    <B></B>
  </Provider>
  </div>,document.getElementById('root'))