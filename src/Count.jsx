import React from 'react'

//  创建一个上下文对象
/**
 * ThemeContext.Provider 祖先组件注册上下文中的内容
 * ThemeContext.Consumer 后代组件进行消费（获取到上下文中的内容）
 */
let ThemeContext = React.createContext()
class CountShow extends React.Component {
    // static contextType = ThemeContext
    // render() {
    //     return <div>{this.context.num}</div>
    // }
    render() {
        return(<> <ThemeContext.Consumer>
            {/* 使用Consumer 消费者组件 */}
            {
                value=>{
                    return <div>{value.num}</div>
                }
            }
        </ThemeContext.Consumer></>)
    }

}
class CountButton extends React.Component {
    render() {
        return (<ThemeContext.Consumer>
            {/* 使用Consumer 消费者组件 */}
            {
                context=>{
                    return <button onClick={ev=>{
                        context.setNum()
                    }}>jhhhh</button>
                }
            }
        </ThemeContext.Consumer>)
    }
}
export default class Count extends React.Component {
    setNum=()=> {
        this.setState({
            num: this.state.num+1
        })
    }
    state = { num: 0 }
    render() {
        // 基于vlaue像组件的上下文中设置内容
        return (<>
        <ThemeContext.Provider value={{
            num: this.state.num,
            setNum:this.setNum
        }}>
            <h3>计数器</h3>
            <CountButton></CountButton>
            <CountShow></CountShow>
            </ThemeContext.Provider>
        </>)
    }
}