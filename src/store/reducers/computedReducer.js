import * as TYPES from '../action-types';
const initState = {
    n: 0
}
export default function computedReducer(state=initState,action) {
    state = JSON.parse(JSON.stringify(state));
    switch(action.type){
            case TYPES.COMPUTED_CHANGE_N: 
            state.n++;
            break
    }
    return state;

}