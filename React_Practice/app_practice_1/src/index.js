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

// 函数组件参数传递
// const Hello = (props) =>{
// console.log(props)
// return(
//     <div>
//         <h3>用户: {this.props.name}，年龄：{this.props.age}</h3>
//     </div>
// )
// }

// 类组件参数传递
class Hello extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        
        const {name,age} = this.props
        return(
            <div>
                <h3>用户: {name}，年龄：{age} </h3>
                {this.props.tag}
            </div>
        )
    }
}


//渲染元素
ReactDOM.render(<
Hello name = 'Rose'
age={19}
tag={<p>这是一个p标签</p>}
/>,
document.getElementById('root'))
// ReactDOM.render(<ClickEvent /> ,document.getElementById('root'))
//ReactDOM.render(<StateComponent /> ,document.getElementById('root'))
// ReactDOM.render(<ControlComponent />, document.getElementById('root'))
// ReactDOM.render(<APP />, document.getElementById('root'))
// ReactDOM.render(<SimpleCommentsList />, document.getElementById('root'))

