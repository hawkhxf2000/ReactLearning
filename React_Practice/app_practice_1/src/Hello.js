import React from "react";

//常规函数创建组件
function Hello(){
  return(
    <div>这是我的第一个函数组件</div>
  )
}

//匿名函数创建组件
// const Hello = () =>  <div>这是我的第一个抽离到js的函数组件</div>

// 类方法创建组件
// class Hello extends React.Component{
//   render(){
//     return (
//     <div>这是我的第一个抽离到js文件的类组件</div>
//     )
//   }
// }

export default Hello