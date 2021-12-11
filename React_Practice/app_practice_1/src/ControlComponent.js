import React from "react";

class ControlComponent extends React.Component{
    state = {
        txt: '',
        content: '',
        city: 'bj',
        ischecked: false
    }

    // // 文本框的处理方式
    // handleChange = e => {
    //     this.setState({
    //         txt: e.target.value
    //     })
    // }

    // // 富文本框的处理方式
    // handleContent = e => {
    //     this.setState({
    //         content: e.target.value
    //     })
    // }

    // // 下拉框处理方式
    // handleCity = e => {
    //     this.setState({
    //         city: e.target.value
    //     })
    // }

    // handleChecked = e => {
    //     this.setState({
    //         ischecked: e.target.checked
    //     })
    // }

    handleChange = e =>{
        const target = e.target
        const value = target.type === 'checkbox'
        ? target.checked
        : target.value

        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render(){
        return (
            <div>
                {/* 文本框 */}
                <input type ='text' name = 'txt' value = {this.state.txt} onChange={this.handleChange} />
                <br/>

                {/* 富文本框 */}
                <textarea name = 'content' value={this.state.content} onChange={this.handleChange}></textarea>
                <br/>

                {/* 下拉框 */}
                <select name = 'city' value={this.state.city} onChange={this.handleChange}>
                    <option value='sh'>上海</option>
                    <option value='bj'>北京</option>
                    <option value='cd'>成都</option>
                </select>
                <br/>

                {/* 复选框 */}
                <input type='checkbox' name = 'ischecked' checked={this.state.selected} onChange={this.handleChange}></input>
                <label>选我</label>

            </div>
        )
    }
}

export default ControlComponent