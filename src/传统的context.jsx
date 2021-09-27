import React from 'react'
import PropTypes from 'prop-types'

class CountShow extends React.Component {
    static contextTypes = {
        num: PropTypes.number,
    }
    render() {
        return <div>{this.context.num}</div>
    }

}
class CountButton extends React.Component {
    static contextTypes = {
        setNum: PropTypes.func
    }
    render() {
        return <frameElement><button onClick={e=>{
            this.context.setNum();
        }}>button</button></frameElement>
    }
}
export default class Count extends React.Component {
    // 1. 设置Context上下文
    static childContextTypes = {
        num: PropTypes.number,
        setNum: PropTypes.func
    }
    getChildContext() {
        return {
            num: this.state.num,
            setNum: this.setNum
        }
    }
    setNum=()=> {
        this.setState({
            num: this.state.num+1
        })
    }
    state = { num: 0 }
    render() {
        return <>
            <h3>计数器</h3>
            <CountButton></CountButton>
            <CountShow></CountShow>
        </>
    }
}