## 执行上下文

执行上下文实现组件间的信息传递，多用于：祖先和后代组件（只要具备共同的祖先，都可以这样来玩耍）

=》 把所有的后代中需要用到的公共状态，事先都存在祖先中的一个事件池中
哪一个后代元素用到，直接注册使用就可以了



```js
后代组件可以获取所在上下文（父组件）中的一些属性值

1。 设置子组件上下文中属性的类型
2. 获取指定子组件的上下文的属性信息

static childContextTypes = {
    num: PropTyoes.number
    text: PropTypes.string
}

// 生命周期函数，给后代提供能用的上下文信息（公共状态，上面指定类型，下面指定值）
=》 后代中哪一个组件需要用到，直接注册使用即可
static contextTypes {
    //=> 想用哪些组件中的提供的公共状态，则这里就声明一下他的类型就可以了（要求类型和组件s声明时一致）
}

getChildContext() {
    // 返回的是啥，后代组件 中就可以使用那些属性值
    return {
        num: this.state.num,
        text:'dddd'
    }
}


class Child extends React.Component {
3. 

}


```