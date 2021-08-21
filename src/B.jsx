import React from 'react';
import { connect } from 'react-redux';
import actions from './store/actions'
function B(props){
    return <>
        <button onClick={props.changeN}>+</button>
    </>
}

// export default connect(null,function (dispatch) {
//     return {
//         changeN(){
//             dispatch(actions.computed.changeN())
//         }
//     }
    
// })(B)

export default connect(null,actions.computed)(B)