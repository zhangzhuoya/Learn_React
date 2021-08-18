import React,{createRef, useRef} from 'react';
export default function InputBox() {
    /**
     * inputRef = {current: 存储DOM元素对象}
     *  createRef() 刚创建current = null
     *  当组件渲染的时候会识别 ref={inputRef} 把当前元素获取到赋值给current，
     *  所以在渲染完成后inputRef.current 可以获取到对应的DOM对象
     */

    /**
     * createRef 和useRef的区别
     *    createRef 每一次重新渲染组件都会创建一个全新的REF对象
     *    useRef 第一次渲染创建一个对象，之后重新渲染的时候，如果发现已经创建过，即不再重新创建了，
     *    性能要比createRef好一些
     */
    const inputRef = createRef();
    return <div>
        <input type="text" ref={inputRef} />
        <button onClick={()=>{
            inputRef.current.focus();
        }}>自动对焦</button>
    </div>
} 