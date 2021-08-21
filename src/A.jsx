import React from 'react'
import { connect } from 'react-redux'
function A (props) {
    return<>
    {props.n}
    </>
}
export default connect(state=>state.computed)(A)