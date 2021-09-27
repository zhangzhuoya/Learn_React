 import React, {Component} from 'react'

 class Custom extends Component {
     render() {
         console.log(this.props);
         return<>
         <div className="menuBox">
             <a href="">我的客户</a>
             <a href="">全部客户</a>
             <a href="">新增客户</a>
         </div>

         {/* 二级路由 */}
         </>
     }
 }
 
 export default Custom;