//=>• React中的组件：每一个组件都是一个单独的个体（数据私有，有自己完整的生命周期，有自己的视图）。
// • 在react工程化项目中（vscode），我们会把需要些react组件的组件命名为.jsx,这样只有一个目的让创建的文件识别jsx语法，而在create-react-app 脚手架，已经包含了对.jsx文件的处理。
// 1. 函数式组件
// 只要让函数返回一个jsx元素就可以了（掌握：props）
// 特点：
// 1. 简单（开发渲染快，但是一但组件被调用，里面的内容渲染完成，当前组件中的信息基本上就不变化了（除非重新调用组件传递不同的属性信息）=>"静态组件"：没有state中的状态管控内容的随时变化，也没有生命周期函数等 ）
// 2. 给组件传递进来的属性是只读的（只能获取不能修改）
// 3. 不能设置默认值

import React from 'react';
console.log(React);
/**
 * 在ReactDOM.render进行处理的时候，如果发现TYPE不是一个标签字符串，而是一个函数（一个类），则会把函数执行（创建类的一个实例），于此同时会把组件调用的时候，设置的属性传递给这个函数或者这个类
 * @returns 
 * props:就是外部传递进来的属性
 */
export default function Vote(props) {//
    console.log(props);
    return <div>
    {React.Children.map(props.children,(item,index)=>{
        console.log(props.children);//会包含空格字符串
        console.log(item);
        if (index===0) {
            console.log(item);
            return <div>{item}</div>
        }
    })}
    {React.Children.map(props.children,(item,index)=>{
        if (index===1) {
            return <div>{item}</div>
        }
    })}

       {/* {React.Children.map(props.children,(item,index)=>{
           return <h3>{item}==={index}</h3>
       })} */}
    </div>
    
}