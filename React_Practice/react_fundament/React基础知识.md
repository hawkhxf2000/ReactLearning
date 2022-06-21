# React基础知识

## React js文件引用

~~~js
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<!-- Don't use this in production: -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
~~~

## 简单创建虚拟DOM并渲染到页面

~~~js
<body>
    <div id="root"></div>
    <script type="text/babel">

        //创建虚拟DOM
        const VDOM = (
        <h2 id='test'>
            <span>Hello, React</span>
        </h2>
        )

        //渲染虚拟DOM到页面
        ReactDOM.render(VDOM,document.getElementById('root'))
    </script>
</body>
~~~

## JSX语法规则

1. 定义虚拟DOM时，不要写引号
2. JSX中混入JS表达式时用{}引用

~~~js
const myData = 'Hello，React'
const VDOM = (
    <h2 id='test'>
        <span>{myData}</span>
    </h2>
)
~~~

3. JSX中在标签中写属性class时需要改为className, 以免与ES6中的class关键字冲突
4. JSX中写内联样式时，需要用{{}}将内容包含其中.其中外面一层{}代表包含在其中的是一个JS表达式，里面一层{}代表这是一个对象，其中有一个或多个键值对

~~~
<span style={{color:'white'}}>Hello,React</span>
~~~

5. 只能有一个根标签（与Vue一样）
6. 标签必须闭合
7. 首字小写标签会被认为是html标签，首字大写标签会被认为是组件标签（所以组件名最好写成首字大写）

### JSX小练习（列表遍历）

~~~JS
<body>
    <div id="root"></div>
    <script type="text/babel">
        const items = ['Angular', 'React', 'Vue']

        //创建虚拟DOM
        const VDOM = (
        <div>
            <h1>前端JS框架列表</h1>
            <ul>
                {
                    items.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
        )

        //渲染虚拟DOM到页面

        ReactDOM.render(VDOM, document.getElementById('root'))
    </script>
</body>
~~~

## 定义组件

### 函数式组件

如果你想写的组件只包含一个 render 方法，并且不包含 state，那么使用函数组件就会更简单。我们不需要定义一个继承于 React.Component 的类，我们可以定义一个函数，这个函数接收 props
作为参数，然后返回需要渲染的元素。函数组件写起来并不像 class 组件那么繁琐，很多组件都可以使用函数组件来写

~~~jsx
 <script type="text/babel">
    function MyComponent(){
    return(
    <h1>我是用函数定义的组件（适用于【简单组件】的定义）</h1>
    )
}

    ReactDOM.render(<MyComponent/>, document.getElementById('root'))
</script>
~~~

### 类组件

当组件中包含state时，就被称为复杂组件，需要使用类组件进行定义

~~~jsx
class MyComponent extends React.Component {
    render() {
        return (
            <h1>我是用类定义的组件（适用于【复杂组件】的定义）</h1>
        )
    }
}

ReactDOM.render(<MyComponent/>, document.getElementById('root'))
~~~

## 组件的props

组件可以通过组件实例对象身上的props从组件外部向组件内传递参数

~~~jsx
class MyComponent extends React.Component {
    render() {
        return (
            <h1>我是用类定义的组件（适用于{this.props.name}的定义）</h1>
        )
    }
}

//React 最新版的根节点渲染书写方法
const root = ReactDOM.createRoot(document.getElementById('root'))
//此处的<MyComponent name={'复杂组件'}/>相当于利用构造函数构造了一个新的MyComponent的实例对象，并在props属性中存入一个name:'复杂组件'的键值对
const element = <MyComponent name={'复杂组件'}/>
root.render(element)
~~~

## 组件的状态(state)

state是组件的内部属性，用于在组件内部进行数据传递与修改，避免对组件的props进行修改(相当于内部私有域)

### state的初始化

只能使用组件构造函数来初始化steate

~~~jsx
constructor(props)
{
    super(props);
    this.state = {    //state初始化
        isHot: true
    };
~~~

### 修改state中属性

必须使用setState来进行修改，不能直接进行赋值赋值

~~~jsx
this.setState(prevStates => ({      //修改state必须使用setState函数，其中prevStates是指前一次的state
    isHot: !prevStates.isHot
}))
~~~
## 事件绑定与处理
在组件中定义事件（方法），然后在Constructor中使用bind(this)将事件绑定到组件实例对象上
~~~jsx
constructor(props){
    super(props);
    this.state = {
        isHot: true;
    }
    this.changeWeather = this.changeWeather.bind(this);
}

changeWeather(){
    this.setState(prevStates => ({      //修改state必须使用setState函数，其中prevStates是指前一次的state
        isHot: !prevStates.isHot
    }))
}
~~~
如果不在构造器中绑定事件，也可以使用class fields语法在方法定义时使用箭头函数来将事件绑定到组件实例上
~~~jsx
changeWeather = () =>{
    this.setState(prevStates =>({
        isHot:!prevStates.isHot
    }))
}
~~~
在render()方法中绑定方法到标签
~~~jsx
 render() {
            return (
                // <h1>我是用类定义的组件（适用于{this.props.name}的定义）</h1>
                <div>
                    <h1>今天天气很{this.state.isHot?'炎热':'凉爽'}</h1>
                    <button onClick={this.changeWeather}>改变天气</button>
                </div>
            )
        }
~~~

在render()方法中也可以使用箭头函数将事件与实例对象进行绑定,但这种方法可能存在性能问题，因此一般推荐在构造器中绑定或使用class fields语法
~~~jsx
render() {
            return (
                // <h1>我是用类定义的组件（适用于{this.props.name}的定义）</h1>
                <div>
                    <h1>今天天气很{this.state.isHot?'炎热':'凉爽'}</h1>
                    <button onClick= {() => this.changeWeather()}>改变天气</button>
                </div>
            )
        }
~~~

### 向事件处理程序传递参数
~~~jsx
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
~~~
上述两种方式是等价的，分别通过箭头函数和 Function.prototype.bind 来实现。

## 条件渲染
与Vue使用v-if类似，React也是在类组件的render函数或函数组件的return渲染中使用if来进行条件判断渲染。进行判断的值一般放在states中。上面的
事件绑定案例中的渲染就可以改为：
~~~jsx
render() {
    let currentWeather
    if(this.state.isHot)
        currentWeather = '炎热'
    else
        currentWeather = '凉爽'
    return (

        <div>
            <h1>今天天气很{currentWeather}</h1>
            <button onClick={this.changeWeather}>改变天气</button>
        </div>
    )
}
~~~
### 条件判断的两种替代方法
- &&与运算符
~~~jsx
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Mailbox unreadMessages={messages} />);
~~~
在这个例子中，当message数组中没有内容，即unreadMessage.length = 0时，由于第一个表达式unreadMessages.length>0得到false,因此在&&后面的结构就不会显示，从而起到控制输出的作用

- 三目运算符
上面的例子可以改为：
~~~jsx
return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0? <h2>You have {unreadMessages.length} unread messages.</h2> : null
            }
        </div>
    );
~~~
这个三目表达式表示当unreadMessages.length > 0成立时输出h2中的内容，否则不渲染