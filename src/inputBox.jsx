import React,{createRef} from 'react';
export default function InputBox() {
    /**
     * inputRef = {current: 存储DOM元素对象}
     *  createRef() 刚创建current = null
     *  当组件渲染的时候会识别 ref={inputRef} 把当前元素获取到赋值给current，
     *  所以在渲染完成后inputRef.current 可以获取到对应的DOM对象
     */
    const inputRef = createRef();
    return <div>
        <input type="text" ref={inputRef} />
        <button onClick={()=>{
            inputRef.current.focus();
        }}>自动对焦</button>
    </div>
} 