import React from 'react';
import ReactDoM from 'react-dom';


/**
 * 继承
 * 1. 原型继承
 * 2. call继承
 * 3. 寄生组合
 * 4. es6中基于class实例继承
 */
/**
 * 类组件：class xxx extends React.Component/React.pureComponent
 *   当REACT-DOM.RENDER渲染的时候，如果发现虚拟DOM中TYPE是一个类组件，会
 *   创建这个类的一个实例。并且把解析出来的PROPS传递给这个类  new Clock(props)
 *    => 执行CONSTRUCTOR(此时PROPS并未挂载的实例上，基于this.props不能获取到值，但是
 * 可以直接使用形参中的props,解决方法：super())
 *    => 当constructor执行完，react会帮我们继续处理
 *    => 把props/context...挂载到实例上（后期在其他钩子函数中基于this.props获取传递的属性值）
 *    => react帮我们把render执行
 */
class Clock extends React.Component {
    constructor(props) {
        // PROPS: 调取组件传递进来的属性
        super(props);//只要用到了constructior就要写super(类似于call继承，
        // 会把父类当做函数执行，让函数中的this当前实例，
        // this = {props:xxx,content:xxx,refs:{}
        // )
        this.x = 100;
        console.log(props);
        console.log(this.props);//undefined
    }
    AAA(){
        //Clock.prototype.AAA
    }
    x = 100;
    y = 200;//给实例设置的私有属性，和constructor中的this.y=200效果一样。
    static BBB(){
        //Clock.BBB
    }
    static CCC = 300;//给类上直接设置属性，es7直接在类上设置的静态属性（React脚手架中给我们设置了这种语法处理）
    // 必须要有render函数，它返回的内容是我们当前组件要渲染的视图
    render() {
        console.log(this.props);
        return <div>
            <h2>{this.props}</h2>
        </div>
    }
}
// let c = new Clock()
// console.log(c);
ReactDoM.render(<div>
    <Clock title="北京时间">
        <em>来自于我自己写的</em>
        <em>哈哈</em>
        <em>嘿嘿</em>
    </Clock>
</div>,document.getElementById('root'))
