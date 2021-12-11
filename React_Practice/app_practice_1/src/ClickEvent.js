import React from "react";

// class ClickEvent extends React.Component{
//     HandleClick () {
//         console.log("事件绑定已经完成")
//     }

//     render(){
//     return (
//         <button onClick = {this.HandleClick}>点我</button>
//     )
//     }
// }

function ClickEvent(){
    function handleClick(){
        console.log('事件绑定完成')
    }
    return(
        <button onClick={handleClick}>点我试试</button>
    )
}

export default ClickEvent