import React,{useState,useEffect} from 'react'
import actions from './store/actions'
function VoteContent(props) {
    let store = props.store
    
    return<>
    <p>支持：{store.getState().vote.supNum}</p>
    <p>反对：{store.getState().vote.oppNum}</p>
    </>
}
function Button(props) {
    let store = props.store;
    return<>
    <button onClick={()=>{
        store.dispatch(actions.vote.changeSupNum())

    }}>支持</button>
    <button onClick={()=>{
        store.dispatch(actions.vote.changeOppNum())
    }}>反对</button>
    </>
}
class Vote extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props);
        let {vote:{supNum,oppNum}} = this.props.store.getState();
        this.state = {
            supNum,
            oppNum
        }
    }
   
    render(){
        let {supNum,oppNum} = this.state
        return<div>
            <h3>投票组件：<span>N:</span>{supNum+oppNum}</h3>
            <VoteContent store={this.props.store}></VoteContent>
            <Button store={this.props.store}></Button>
        </div>
    }
    //  第一次渲染完，把redux状态改变后重新渲染组件的方法增加到事件池中
    componentDidMount() {
        this.props.store.subscribe(()=>{
            this.setState({
                ...this.props.store.getState().vote
            })
        })
       
    }
}

export default Vote;