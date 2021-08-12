import React from 'react';
import propTypes from 'prop-types';
import EM from './eventEmit'
class VoteMain extends React.Component {
    state = {
        supNum:0,
        oppNum:0
    }
    handle = type =>{
        let {supNum,oppNum} = this.state
        if(type==="sup") {
            console.log('zhichi');
            this.setState({supNum:supNum+1})
        }else {
            this.setState({oppNum:oppNum+1})
        }
    }
    render(){
        let {supNum,oppNum} = this.state
        return <div>
            <main>
                <div>支持人数:{supNum}</div>
                <div>反对人数:{oppNum}</div>
            </main>
        </div>
    }
    componentDidMount(){
        // 订阅自定义事件方法
        EM.$on('handle',this.handle)

    }
}

class VoteFooter extends React.Component {
    render(){
        return<div>
            <button onClick={()=>{
                    EM.$emit('handle','sup')
                    EM.$emit('totalHandle')
                }}> 支持</button>
            <button onClick={()=>{
                    EM.$emit('handle','opp')
                    EM.$emit('totalHandle')
                }}>反对</button>
        </div>
    }
}
export default class Vote extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    state ={
        total:0
    }
    render(){
        return <div className="vote-container">
            <div>{this.props.title}</div><span>N:{this.state.total}</span>
            <VoteMain></VoteMain>
            <VoteFooter></VoteFooter>
        </div>
    }
    componentDidMount() {
        let total = this.state.total
        EM.$on('totalHandle',()=>{
            this.setState({total:total+1})
        })
    }
}