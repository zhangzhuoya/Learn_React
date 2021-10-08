import React  from 'react'
import reactDom from 'react-dom'
import { Provider } from 'react-redux';
import store  from './store';
import Vote from './Vote';
/**
 * Provider: REDUX祖先组件目的是把REDUX容器中的STORE放到上下文中，
 * 供后代组件直接调取使用
 * 
 */
reactDom.render(<div>
  <Provider store={store}>
    <Vote></Vote>
  </Provider>
  </div>,document.getElementById('root'))