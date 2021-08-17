 import React from 'react';
 import './banner.css';
 export default class Banner extends React.Component {
    //  this.stata = {

    //  }
    constructor(props) {
        super(props);
        let { data }= this.props
        this.state = {
            data
        }

    }
     render(){
         let {data} = this.state;
         return <div className="container">

             <div className="swiper" >
                 {data.map((item,index) => {
                     return  <div className="slide" key={item.index}>
                     <img src={item.pic} alt="" />
                 </div>
                 })}
             </div>
         </div>
     }
 }
//  1. 是否自动轮播
//  2. 自动轮播时间
//  3. 