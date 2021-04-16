// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
import {createElement,render} from './SELFJSX'

let jsxObj = createElement("div",{
  className: 'box',
  id:'box',
  index:1
},'珠峰培训',createElement("span",{className:'box1'},'哈哈哈哈'))
console.log(jsxObj);