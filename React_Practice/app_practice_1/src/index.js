import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import Hello from './Hello';
// import ClickEvent from './ClickEvent'
//import StateComponent from './StateComponent'
// import ControlComponent from './ControlComponent'
// import SimpleCommentsList from './SimpleCommentsList';

//父组件
class Parent extends React.Component{
    state = {
        childMsg: ''
    }
    //回调函数
    getChildMsg = (data) =>{
        
        //将接收到的子组件数据赋值给父组件的状态childMsg
        this.setState({
            childMsg: data
        })
    }

    //渲染
    render(){
        return(
            <div className='parent'>
                父组件：<label>{this.state.childMsg}</label>
                {/* 将父组件的回调函数传递给子组件 */}
                <Child getMsg={this.getChildMsg}/>
            </div>
        )
    }
}

//子组件
class Child extends React.Component {
    state = {
        msg: "刷抖音"
    }

    //编写方法handleClick，调用父组件传递过来的回调函数
    handleClick = () =>{
        this.props.getMsg(this.state.msg)
    }
    render(){
        return(
            <div className='child'>
                {/* 点击按钮调用方法handleClick */}
                 子组件： <button onClick={this.handleClick}>点我给父组件传递数据</button>
            </div>
        )
    }
} 
//渲染元素
ReactDOM.render(<Parent/>,document.getElementById('root'))
// ReactDOM.render(<ClickEvent /> ,document.getElementById('root'))
//ReactDOM.render(<StateComponent /> ,document.getElementById('root'))
// ReactDOM.render(<ControlComponent />, document.getElementById('root'))
// ReactDOM.render(<APP />, document.getElementById('root'))
// ReactDOM.render(<SimpleCommentsList />, document.getElementById('root'))

