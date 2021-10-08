
/**
 * 每一个reducer都管理自己的单独状态
 */
 import * as TYPES from '../action-types'
 const initialState = {
     supNum:10,
     oppNum:5
 }
 export default function voteReducer(state = initialState, action) {
     state = JSON.parse(JSON.stringify(state))
     switch(action.type){
         case TYPES.VOTE_CHANGE_SUPNUM:
             state.supNum++
             break;
         case TYPES.VOTE_CHANGE_OPPNUM:
             state.oppNum++
             break;
     }
     return state
 
 }