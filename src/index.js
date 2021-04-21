import React from 'react';
import ReactDOM from 'react-dom';
import Vote from './reactComponent'
ReactDOM.render(
  <div>
   我爱react
   {/* 调取组件的时候，可以单闭合也可以双闭合，双闭合的好处：可以在标签继续设置子元素（类似与Vue中的slot），调取组件的时候会把子元素（JSX对象）基于PROPS.CHILDREN传递给组件 */}
    <Vote title='react支持组件单闭合'/> 
    <Vote title='react难吗'>   <span>哈哈</span>
    <span>呵呵呵</span></Vote>
  </div>,
  document.getElementById('root')
);