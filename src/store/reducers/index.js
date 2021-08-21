/**
 * 合并reducer
 */
 import { combineReducers } from 'redux'
 import voteReducer from "./voteReducer";
 import personalReducer from "./personalReducer";
 import computedReducer from './computedReducer';
 export default combineReducers({
     vote: voteReducer,
     personal: personalReducer,
     computed: computedReducer
 })
 
 // combineReducers 处理后的结果,按照模块划分状态
 
 // {
 //     vote: {
 //         supNum: 10,
 //         oppNum: 10
 //     },
 //     personal: {
 //         supNum:0,
 //         info: {}
 //     }
 // }
 
 // store.getState().vote.supNum