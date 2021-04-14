import React from 'react';

function VoteContent() {
    return <>
    <p>支持能：0</p>
    <p>支持不能：0</p>
    </>
}
function VoteButton() {
    return <>
    <button>能</button>
    <button>不能</button>
    </>
}
class Vote extends React.Component {
    render(){
        return <div>
            <h3>
            这是一个redux的练习，可以学习明白吗
            <span>N:0</span>
            </h3>
            <VoteContent/>
            <VoteButton/>
        </div>
    }
}
export default Vote