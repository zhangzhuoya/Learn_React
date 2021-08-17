import React from "react";
import PropTypes from 'prop-types'


class CountContent extends React.Component {
    static contextTypes = {
        num: PropTypes.number
    }
    render() {
        return <div>{this.context.num}</div>
    }
}

class CountButton extends React.Component {
    static contextTypes = {
        setNum: PropTypes.func
    }
    render(){
        return<>
        <button onClick={(e)=>{
            this.context.setNum()
        }}>加1</button></>
    }
}
export default class Count extends React.Component {

    // 设置上下文信息
    static childContextTypes = {
        num: PropTypes.number,
        setNum: PropTypes.func
    }
    getChildContext () {
        return {
            num: this.state.num,
            setNum: this.setNum
        }
    }
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
        <CountContent></CountContent>
        <CountButton></CountButton>
        
        </>
    }
}