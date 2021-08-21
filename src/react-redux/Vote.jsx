import { TYPES } from '@babel/types'
import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import actions from './store/actions'
function VoteContent(props) {
    
    return<>
    <p>支持：{}</p>
    <p>反对：{}</p>
    </>
}
function Button(props) {
    return<>
    <button onClick={()=>{

    }}>支持</button>
    <button onClick={()=>{
    }}>反对</button>
    </>
}
class Vote extends React.Component {
    constructor(props){
        super(props)
       
    }
   
    render(){
        let {supNum,oppNum,changeSupNum}= this.props;
        console.log(this.props);
        return<div>

            <h3>投票组件：<span>N:{supNum+oppNum}</span></h3>
            <VoteContent></VoteContent>
            <button onClick={changeSupNum}>支持</button>
            <button onClick={()=>{
                    // changeSupNum
            }}>反对</button>
        </div>
    }
    //  第一次渲染完，把redux状态改变后重新渲染组件的方法增加到事件池中
    componentDidMount() {
       
    }
}
/**
 * connect : REACT-REDUX中的高阶组件，经过这个方法，
 * connect(mapStateToProps,mapDispatchToProps)(Vote)
 *   我们可以把RECDUX容器中的State和action都当作属性赋值给这个组件（Vote）
 *   帮助我们给REDUX容器的事件池中添加一个公共状态改变能够重新渲染组件的事件方法
 * 返回的结果是一个代理组件，而页面中渲染的是这个代理组件
 * 
 */
function mapStateToProps(state) {
    //=> 获取的就是redux容器中的状态
    // 返回一个对象，对象中的状态信息就是当作属性挂在到组件的属性上
    return {
        ...state.vote
    }

}
// function mapDispatchToProps(dispatch) {
//     // =>dispatch===store.dispatch
//     //  this.props.changeSupNum() 就可以完成任务派发了
//     return {
//         changeSupNum() {
//             dispatch(actions.vote.changeSupNum());
//         }
//     }

// }

// actions.vote = {
//     changeSupNum() {
//         return {type: TYPES.VOTE_CHANGE_SUPNUM}
//     }
// }
// REACT-REDUX帮我们把ACTION-CREATEORS中的方法变为mapDispatchToProps返回的派发格式
// {
//     changeSupNum(){
//         dispatch({type: TYPES.VOTE_CHANGE_SUPNUM})
//     }
// }
export default connect(state=>({...state.vote}),actions.vote)(Vote)
;