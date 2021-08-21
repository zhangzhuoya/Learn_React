import React from 'react-redux';
import propTypes from 'prop-types';
/**
 * Provider: 组件
 *     1. 接收传递属性的STORE
 *     2. 把STORE注册到上下文中(React.createContext)
 *     3. 把他里面的是所有的子组件（才是我们自己编写要渲染的）
 */
const ThemeContext = React.createContext();
export class Provider extends React.Component(){
    // 设置属性传递的STORE属性是必传项
    static propTypes = {
        store: propTypes.object.isRequired
    }
    render() {
        // 渲染传递进来的子组件
        return<>
        <ThemeContext.Provider value={this.props.store}>
            {this.props.children}
        </ThemeContext.Provider>
        </> 
    }
}
/**
 * connect: 高阶组件
 *   1. 把mapStateToProps/mapDispatchToProps的方法执行返回结果挂载到Component（
 *      真实要渲染组件的属性上）
 *   2. 向REDUX容器的事件池中增加一个方法（当公共状态改变，通知方法执行，此方法负责重新渲染当前组件即可）
 *   3. 如果mapDispatchToProps是一个actionCreator对象，我们需要把对象变为dispatch的派发模式
 *   4. 
 */
export function connect(mapStateToProps,mapDispatchToProps) {
    // 把传递的action对象变为dispatch派发的形式
    if (mapDispatchToProps&& typeof mapDispatchToProps!=='function') {
        let actions = mapDispatchToProps;
        mapDispatchToProps = function () {
            let result = {}
            for(let key in actions){
                if (!actions.hasOwnProperty(key)) break;
                result[key] = function (...args) {
                    dispatch(actions[key](...args))
                }
    
            }
        }
        
    }
    return function connectHOC(Component) {
        //  返回一个代理组件(渲染到页面中)
        return class Proxy extends React.Component {
            // static contextType = ThemeContext;
            render() {
                // 代理组件最后要渲染的其实就是传递进来的Component
                // return <><Component/></>
                return <ThemeContext.Consumer>
                    {
                        context=>{
                            return <Component/>
                        }
                    }
                </ThemeContext.Consumer>
            }
            componentDidMount(){
                this.context.store.subscribe(()=>{
                    this.forceUpdate();
                })
            }
        }

    }

}

// mapDispatchToProps(dispatch) {
//     let obj = {}
//     for (let key in actions) {
//         obj[key]= function() {
//             dispatch(actions[key])
//         }
//     }
// }
// connect(function(state){
//     return {
//         xxx: xxx
//     }
// },function(dispatch){
//     return {
//         changeN(){
//             dispatch({
//                 type:'xxx'
//             })
//         }
//     }
// })

// connect(null,{
//     changeN(){
//         return {
//             type:'xxx'
//         }
//     }
// })
