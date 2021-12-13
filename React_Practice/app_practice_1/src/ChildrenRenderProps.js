import React from "react";

//导入图片
import img from './images/mouse.png'

//创建Mouse组件,实现鼠标坐标事件的复用
class Mouse extends React.Component{
    //鼠标位置State
    state = {
        x: 0,
        y: 0
    }

    //鼠标移动时间的事件处理程序
    handleMouseMove = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    //监听鼠标移动事件
componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
    }

    render(){
        return this.props.children(this.state)
    }
}
//父组件
class ChildrenRenderProps extends React.Component{
   
    //渲染
    render(){
        return(
                <div className='parent'>
                    <h3>children模式</h3>
                    <Mouse>
                        {({x, y}) =>
                        <p>鼠标的位置是：{x}, {y}</p>}
                    </Mouse>

                    <Mouse>
                        {
                        (mouse) => 
                        <img src={img} alt='老鼠' style={{
                                position:'absolute',
                                top: mouse.y,
                                left: mouse.x    
                            }}
                        />
                        }
                    </Mouse>
                </div>
        )
    }
}

export default ChildrenRenderProps