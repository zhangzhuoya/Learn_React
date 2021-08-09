import React from 'react';
import reactDom from 'react-dom';
import Vote from './Vote.jsx'
 reactDom.render(<Vote title="投票组件标题" supNum={0} oppNum={0}></Vote>,document.getElementById('root'))