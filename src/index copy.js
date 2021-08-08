import React from 'react';
import ReactDoM from 'react-dom';
/**
 * 
 * 函数式组件（静态组件）：
 * 简单：开发围护简单，渲染也简单（渲染速度快）
 * 静态： 只要把组件调取渲染后，组件中的内容不能 再修改（函数式组件中没有自己的状态管控，生命周期）
 * 
 * 组件特点：给组件传递过来的属性，是只读的 只能读取，不能修改
 * 1. 不能直接赋值默认值
 *    => props.title = props.title || '我是标题'(错误的)
 *    => let title = props.title || '我是标题'(可以的)
 * 2. 函数式组件不能像类组件一样，基于prop-types给属性设置默认的规则
 */
function Clock(props) {
    let time = new Date().toLocaleDateString();//得到时间值
    // props.title = props.title || '我是标题'
    return <div>
        <h2>
            {props.title}
        </h2>
        <p>{time}</p>
        {props.children}

    </div>
    
}
ReactDoM.render(<div>
    <Clock title="北京时间">
        <em>来自于我自己写的</em>
        <em>哈哈</em>
        <em>嘿嘿</em>
    </Clock>
</div>,document.getElementById('root'))

// {
//     type:'div'/Clock,
//     props: {
//         title:'xxx',
//         Children:[]
//     }
// }