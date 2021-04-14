import React, { createRef,useRef, useEffect, useState} from "react";
let prev;
export default function InputBox(props) {
    /**
     * 
     * inputRef ={current:存储dom对象}  
     * createRef()刚创建current=null
     * 当组件渲染的时候会识别ref={inputRef}把当前元素赋值给current，所以在渲染完成后，inputRef.current可以获取到 
     * 
     * createRef和useRef的区别：
     * createRef每一次重新渲染组件都会创建一个全新的REf对象
     * useRef每一次渲染创建一个对象，之后重新渲染的时候，如果发现已经创建过了，则不再创建，性能比createRef好一点
     * 
     */
    const [num,changeNum] = useState(0);//状态改变组件重新渲染
    console.log("AAA");
    const inputRef = createRef();
    // const inputRef = useRef()
    console.log(prev===inputRef);
    prev = inputRef
    console.log(inputRef);
    console.log(props);
    
return <div>
        <input type="text" ref={inputRef} />
        <button onClick={ev=>{
            inputRef.current.focus()
            changeNum(num+1)
        }}>自动聚焦</button>
    </div>   
}