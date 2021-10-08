import React  from 'react'
import reactDom from 'react-dom'
import App from './pages/App'
/**
 * RREACT中的路由管理
 * REACT-ROUTER-DOM(第四代版本开始)
 * => hash路由（地址丑）
 * => browser路由（h5 history api）（需要服务器对404页面做处理，如果请求页面不存在
 * 让其渲染首页的内容
 * ）
 */
reactDom.render(<div>
  <>
  <App/>
  </>
  </div>,document.getElementById('root'))
  </div>,document.getElementById('root'))