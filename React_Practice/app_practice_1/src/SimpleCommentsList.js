import React from "react";

class SimpleCommentsList extends React.Component{
    
    //状态初始化
    state = {
        comments: [
            {id: 1, name: 'Jack', content: '沙发!!!'},
            {id: 2, name: 'Rose', content: '板凳~' },
            {id: 3, name: 'Tom', content:'楼主好人'}
        ],
        userName: '',
        userContent: ''
    }

    
    // 使用条件渲染来渲染评论内容
    renderList() {
        return this.state.comments.length === 0
        ? (<div className='no-comment'>暂无评论，快去评论吧~</div>)
        : (<ul>
            {this.state.comments.map(item =>(
            <li key={item.id}>
                <h4>评论人：{item.name}</h4>
                <p>评论内容： {item.content}</p>
            </li>
            ))}
        </ul>)
    }

    // 处理表单元素值
    handleForm = e =>{
        const {name, value} = e.target
        
        this.setState({
            [name]: value
        })
    }

    //发表评论功能
    addComment = () =>{
        const {comments,userName,userContent} = this.state


        //非空校验,return是为了阻止后续动作
        if(userName.trim() === '' || userContent.trim() === ''){
            alert("请输入评论人与评论内容")
            return
        }
        // console.log(userName,userContent)
        
        //将新的comment添加到comments的前面形成一个新的数组newComment
        const newComments =[{
            id: comments.length+1,
            name: userName,
            content: userContent
        },...comments]

        // console.log(newComments)

        //将原有comments的内容更新为newComments
        this.setState({
            comments: newComments,
            userName: '',
            userContent: ''
        })       
        
    }
    render(){
        const {userName,userContent} = this.state

        return (
            <div className='app'>
                <div>
                    <input className='user' type='text' placeholder='请输入评论人' value={userName} name='userName' onChange={this.handleForm}/>
                    <br/>
                    <textarea className='content' cols='30' rows='10' placeholder='请输入评论内容' value={userContent} name='userContent' onChange={this.handleForm}/>
                    <br/>
                    <button onClick={this.addComment}>发表评论</button> 
                </div>
                {this.renderList()}
                
            </div>
        )
    }
}

export default SimpleCommentsList