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
                    items.map((item,index)=>{
                      return  <li key={index}>{item}</li>
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

