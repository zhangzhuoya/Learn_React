import React from 'react'
import PropTypes from 'prop-types';
class Vote extends React.Component {
    // 设置属性的默认规则
    static defaultProps = {
        supNum:0,
        oppNum:0
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        supNum: PropTypes.number,
        oppNum: PropTypes.number

    }
// 设置初始值
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            supNum: this.props.supNum,
            oppNum: this.props.oppNum
        }

    }
    render() {
        let {supNum,oppNum,title} = this.state
        return <div className='voteBox'>
            <div className="voteHeader">{title}</div>
            <div className="voteContent">
                <span>支持人数:{supNum}</span>
                <span>反对人数:{oppNum}</span>
                <div>支持率:{this.voteRadio()}</div>
            </div>
            <div className="voteFooter">
                <button onClick={this.supVote.bind(this,'A')}>支持</button>
                <button onClick={this.supVote.bind(this,'B')}>反对</button>
            </div>
        </div>
    }
    // 定义一些使用的方法
    // 定义一些需要使用的方法(Vote.prototype):vue中的写法,方法中的this都是vue的实例,不管怎么调用都是这样
    // 但是在react中不是,他就是我们原生中js的特性,this不是固定的,看你怎么调用它,为了保证this是示例
    // 我们写的方法一般都是用箭头函数来构造
    voteRadio = () =>{
        let {supNum, oppNum} = this.state;
        let voteRadio = supNum===0?0:supNum /(supNum + oppNum) * 100;
        return voteRadio+ '%';
    }
    supVote = (data) =>{

        let {supNum, oppNum} = this.state;
        if(data==='A'){
            this.setState({supNum:supNum+1})
        } else {
            this.setState({oppNum:oppNum+1})
        }
    }
    

}
export default Vote;