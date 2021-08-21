import React from 'react';
import { connect } from 'react-redux'
class Test extends React.Component {

    render(){
        return <div>
            案例
            <button>测试派发</button>
        </div>
    }
}
export default connect(null,dispatch=>({
    change(){
        
    }
}))(Test)