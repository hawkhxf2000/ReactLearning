import React from "react";

class StateComponent extends React.Component{
    state = {
        count: 0
    }
    
    //利用bind方法绑定this
    // constructor(){
    //     super()
    //     this.statePlus = this.statePlus.bind(this)
    // }

    // statePlus() {
    //     this.setState({
    //         count: this.state.count+1
    //     })
    // }

    //利用箭头函数方法绑定this
    statePlus =() =>{
        this.setState((state) => {
          return {count: state.count + 1}
        })
    }

    render(){
        return (
            <div>
                <h2>计数器：{this.state.count}</h2>
                <button onClick={this.statePlus}>点击+1</button>
            </div>
        )
    }
}

export default StateComponent