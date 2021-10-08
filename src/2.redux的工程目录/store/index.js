// 创建store容器
import { createStore } from "redux";

import reducer from './reducers'

const store = createStore(reducer)
export default store;

/**
 * 中间件：介于dispatch派发和reducer执行中间做的一些事情
 * 重构dispatch
 */