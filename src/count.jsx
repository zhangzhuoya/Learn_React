import React from "react";
import PropTypes from 'prop-types'

/**
 * 创建一个上下文对象
 *   ThemeContext.Provider 祖先组件注册上下文中的内容
 *   ThemeContext.Consumer 后代组件进行消费（获取到上下文中的内容）
 */
let ThemeContext = React.createContext();
class CountContent extends React.Component {
    static contextType = ThemeContext
    render() {
        return <div>{this.context.num}</div>
    }
}

class CountButton extends React.Component {
    render(){
        return<>
        <ThemeContext.Consumer>
            {/* 
            使用Consumer组件消费，需要把子元素的内容用函数包裹起来
            value就是祖先中注册的上下文信息
            
            */}
            {context=>{
                return <button onClick={(e)=>{
                    context.setNum()
                }}>加s1</button>
            }}
        
        </ThemeContext.Consumer>
        </>
    }
}
export default class Count extends React.Component {
    state = {
        num: 0
    }
    setNum = ()=>{
        this.setState({
            num:this.state.num+1
        })
    }
    render() {
        return<>
        <ThemeContext.Provider value={{
            num: this.state.num,
            setNum: this.setNum
        }}>
        <CountContent></CountContent>
        <CountButton></CountButton>
        </ThemeContext.Provider>
        </>
    }
}