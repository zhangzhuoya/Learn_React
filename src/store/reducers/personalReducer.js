
 import * as TYPES from '../action-types'
 const initialState = {
     supNum:10,
     info:{}
 }
 export default function personalReducer(state = initialState, action) {
     state = JSON.parse(JSON.stringify(state))
     switch(action.type){
         case TYPES.COMPUTED_CHANGE_N: 
         state.n++;
         break
     }
     return state
 
 }