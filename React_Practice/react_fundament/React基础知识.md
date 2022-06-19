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
class MyComponent extends React.Component{
            render() {
                return(
                    <h1>我是用类定义的组件（适用于【复杂组件】的定义）</h1>
                )
            }
        }

        ReactDOM.render(<MyComponent/>, document.getElementById('root'))
~~~

