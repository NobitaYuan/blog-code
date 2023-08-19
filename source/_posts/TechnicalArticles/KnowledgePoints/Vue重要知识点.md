---
title: Vue重要知识点
date: 2023-6-6
categories: 
- 前端
- 重要知识点汇总
tags: 
- vue
description: 'Vue重要知识点汇总'
---

# Vue重要知识点

![image-20230316090723110](http://rvt7oeuw4.hn-bkt.clouddn.com/blog/image-20230316090723110.png "前端知识体系")

### 什么是Vue

vue是一套用于构建用户界面的渐进式js框架，基于mvvm模型和虚拟dom的思想，可够快速构建高效的前端应用程序



### 什么是MVVM模型

是Model-View-ViewModel的简写，本质是个MVC的改进版

- M：模型Model  --->也就是data中的数据
- V：视图View  --->也就是模板代码
- VM：视图模型ViewModel  --->也就是Vue实例（vm）

![img](https://img-blog.csdnimg.cn/3b2deed9e76142798a44ee3bbc33f39b.png)



### Vue双向数据绑定的实现

- Object.defineProperty 来进行数据劫持
- 递归data中的数据来进行劫持
- 当前ObServer监听对应的输入框的内容发生变化
- 重新设置对应的data中的数据（this._data）
- 数据重新设置再进行对应的模板比对渲染对应的页面

```js
class Vue {
    constructor(options) {
        let {
            el,
            data
        } = options
        this.el = el //挂载点
        this.data = data //数据
        //用于劫持的容器
        this.
        _
        data = JSON.parse(JSON.stringify(data))
        //获取对应的内容 el里面内容
        this.content = document.querySelector(this.el)
        //读取里面的 {{}}的内容 进行替换
        this.textContent = this.content.innerHTML
        this.kidnap(this.data, this._data)
        this.comparis()
    }
    //递归遍历data中的数据进行劫持 (递归遍历data中的数据进行劫持操作)
    kidnap(obj, _obj) {
        let that = this
        for (let key in obj) {
            //如果它是一个对象继续往下劫持
            if (typeof obj[key] == 'object') {
                this.kidnap(obj[key], _obj[key])
            }
            //Object.defineProperty来进行劫持
            Object.defineProperty(obj, key, {
                enumerable: true,
                configurable: true,
                get() {
                    return
                    _
                    obj[key]
                },
                set(newValue) {
                    _
                    obj[key] = newValue
                    that.comparis()
                }
            })
        }
    }
    //模板比对解析
    comparis() {
        //{{message}} {message.age.age}
        this.content.innerHTML = this.textContent.replace(/\{\{([\w.]*)\}\}/ig, (v) => {
            //{{message}}
            //读取对应的里面key 利用data里面的数据来进行替换
            // console.log(RegExp.$1) //读取分组1里面的内容
            var arr = v.substring(2, v.length - 2).split('.')
            let value = this.data
            //遍历获取数据
            for (var i of arr) {
                value = value[i]
            }
            //遍历arr获取数据
            return value
        })
        //读取对应的input框的v-model属性进行替换
        //先找input框
        let inputs = this.content.querySelectorAll('input')
        let that = this
        //获取所有具备v-model属性的input框架
        Array.from(inputs).filter((v) => {
            return v.getAttribute('v-model')
        }).forEach(v => {
            let key = v.getAttribute('v-model')
            //利用观察者模式进行监听
            //调用obServer
            v.oninput = () => {
                that.data[key] = v.value
            }
            //读取对应的v-model 设置对应的内容
            v.value = that.data[key]
        })
    }
}
```





### computed和watch的区别

- computed可以自己定义并劫持数据，watch只能监听来自data和props中

- computed支持缓存，相依赖的数据发生改变才会重新计算，不支持异步操作
- watch不支持缓存，只要监听的数据变化就会触发相应操作，支持异步操作
- computed 有get和set属性
- watch 有handler、deep、immediate



### computed和methods的区别

- computed会缓存数据，只有当数据变化了才会重新计算
- methods每次调用都会重新编译计算
- computed的效率高于methods
- computed中定义的是属性而不是函数，所以使用时直接用`{{xxx}}`，而methods中定义的是函数，因此使用时需要`{{xxx()}}`。





### vue有哪些生命周期钩子

生命周期就是从一个应用  从出生到消亡的过程 在特殊时候会自动调用的回调函数

| vue2生命周期  | vue3生命周期    |
| ------------- | --------------- |
| beforeCreate  | setup           |
| created       | setup           |
| beforeMount   | onBeforeMount   |
| mounted       | onMounted       |
| beforeUpdate  | onBeforeUpdate  |
| updated       | onUpdated       |
| beforeDestroy | onBeforeUnMount |
| destroyed     | onUnMounted     |



### vue3对于vue2有了那些变化

- 底层实现原理从Object.defineProperty改为了Proxy
- 重写了虚拟dom和Tree-Shaking
- 更好的支持TypeScript
- 新增了组合式API（Composition API）
- 新增组件（Fragment组件可以没有根标签 、Teleport将html结构移动到指定位置、Suspense等待异步组件时渲染一些额外内容）
- 更新换代了新的生命周期钩子函数
- data 选项应始终被声明为一个函数
- 移除keyCode支持作为 v-on 的修饰符
- 移除了filter过滤器
- 性能提升（打包大小减少41%、初次渲染快55%, 更新渲染快133%、内存减少54%）



### vue中组件传值的方式

父子间传值：

props

provide inject

eventBus

$emit

$attrs

兄弟间传值：

bus

作用域插槽

三方插件



### 什么是Vuex

Vuex用于全局状态管理

- State：基本数据(数据源存放地)
- Getters：从基本数据派生出来的数据
- Mutations：提交更改数据的方法，同步
- Actions：可进行异步的数据请求，像一个装饰器，包裹mutations，使之可以异步。
- Modules：模块化Vuex



### mixin和vuex的区别

Mixins，中文意思是混入，所以它的功能是混合。对象和引人mixins的组件混合。

Mixins：可以定义共用的变量，在每个组件中使用，引入组件中之后，各个变量是相互独立的，值的修改在组件中不会相互影响。
如果相同对象，组件会覆盖mixins



vuex：用来做状态管理的，里面定义的变量在每个组件中均可以使用和修改，在任一组件中修改此变量的值之后，其他组件中此变量的值也会随之修改。



### mixin和setup的区别

mixin 很容易发生冲突：因为每个特性的属性都被合并到同一个组件中，所以为了避免 property 名冲突和调试，你仍然需要了解其他每个特性。

可重用性是有限的：我们不能向 mixin 传递任何参数来改变它的逻辑，这降低了它们在抽象逻辑方面的灵活性。



### Vue中的插槽

- 匿名插槽
- 具名插槽
- 作用域插槽

**总结**

- 使用slot来定义插槽
- 匿名插槽又称默认插槽，内容默认传递给对应的具名插槽
- slot标签通过name属性来指定插槽名
- 需要插入的内容建议用template标签包裹
- 作用域插槽是扩大了对应的组件作用域，通过对应的插槽数据中的属性来传递数据
- 父组件使用对应的slot-scope属性来接收对应的传递的属性对象（2.6之前的写法）
- v-slot（2.6及以上版本才支持）（v-slot:name）可简写为(#name)
- v-slot和slot的写法不要混用，容易造成兼容问题



### v-if和v-show的区别

都是vue的指令，用法也相同，根据表达式的Boolean值来控制元素的显隐

**显示效果**

v-if控制的元素在隐藏后，是直接在文档消失了，

v-show控制的元素在隐藏后，是依旧存在于文档，只是没有显示出来

**原理**

v-if是控制虚拟dom的存在与否来间接控制真实dom的存在，故性能开销更大

v-show是控制元素的css属性display，来控制元素的显隐藏，故性能开销更小

**应用**

在需要较少的切换时，甚至是一次性的切换时，建议使用v-if

在需要频繁切换时，建议使用v-show



### vue中的$nextTick的使用

当你修改了data的值然后马上获取这个dom元素的值，是不能获取到更新后的值，

你需要使用$nextTick这个回调，让修改后的data值渲染更新到dom元素之后在获取，才能成功



### 对渐进式框架的理解

**渐进式代表的含义是：`主张最少`。**就是用你想用或者能用的功能特性，你不想用的部分功能可以先不用





### vue常见修饰符

- .stop：等同于JavaScript中的event.stopPropagation()，防止事件冒泡；
- .prevent：等同于JavaScript中的event.preventDefault()，防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播）；
- .capture：与事件冒泡的方向相反，事件捕获由外到内；
- .self：只会触发自己范围内的事件，不包含子元素；
- .once：只会触发一次。





### v-if和v-show的区别

都是vue的指令，用法也相同，根据表达式的Boolean值来控制元素的显隐

**显示效果**

v-if控制的元素在隐藏后，是直接在文档消失了，

v-show控制的元素在隐藏后，是依旧存在于文档，只是没有显示出来

**原理**

v-if是控制虚拟dom的存在与否来间接控制真实dom的存在，故性能开销更大

v-show是控制元素的csss属性display，来控制元素的显隐藏，故性能开销更小

**应用**

在需要较少的切换时，甚至是一次性的切换时，建议使用v-if

在需要频繁切换时，建议使用v-show



### vue中组件传值的方式

父子间传值：

props

provide inject

bus

$emit

$attrs

兄弟间传值：

bus

作用域插槽

三方插件



### 为什么组件中的data是一个函数而不是对象

- 对象可能会存在覆盖，造成全局污染

- 组件是可复用的vue实例，一个组件被创建好之后，就可能被用在各个地方，而组件不管被复用了多少次，组件中的data数据都应该是相互隔离，互不影响的，基于这一理念，组件每复用一次，data数据就应该被复制一次，之后，当某一处复用的地方组件内data数据被改变时，其他复用地方组件的data数据不受影响。
- 组件中的data写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份data，就会造成一个变了全都会变的结果。

- 根实例对象data可以是对象也可以是函数（根实例是单例），不会产生数据污染情况



### script标签的async和defer属性的区别



### query传参和params传参的区别

- 首先就是写法得不同，query 得写法是 用 path 来编写传参地址，而 params 得写法是用 name 来编写传参地址，你可以看一下编写路由时候得相关属性，你也可以输出一下 路由对象信息 看一下
- 接收方法不同， 一个用 query 来接收， 一个用 params 接收 ，总结就是谁发得 谁去接收
- query 在刷新页面得时候参数不会消失，而 params 刷新页面得时候会参数消失，可以考虑本地存储解决
- query 传得参数都是显示在url 地址栏当中，而 params 传参不会显示在地址栏



### vue中用了哪些设计模式

​	Vue是一个综合性前端框架，它利用了一些设计模式来让代码更易于维护、可读性高、更好地解耦。下面是Vue中常用的设计模式的中文介绍。

1. 发布/订阅模式（观察者模式）

  	发布/订阅模式是一种松散耦合设计模式，其中一个组件（发布方）发出事件，而其他组件（订阅方）则监听并处理它。
  	在Vue中，我们可以使用`$on(eventName, callback)`方法订阅事件，使用`$emit(eventName, args)`方法发布事件。这个模式常用于事件总线和父子组件通信。
  	观察者模式定义对象之间的一对多依赖关系，当一个对象状态发生改变时，所有依赖于它的对象都会收到通知并自动更新。这种模式有时也被称为发布/订阅模式。在Vue中，父组件可以作为观察者订阅子组件的状态变化（例如子组件向父组件发送$emit消息），并更新自己的状态，而子组件则可以作为被观察者发送通知通知父组件更新状态。

2. 单例模式

  	单例模式是一种只允许创建一个对象的模式。在Vue中，这可以通过将一个对象实例化一次，然后在整个应用中共享它的方法和数据。
  	Vue使用单例模式来创建全局组件（例如vue-router和vuex store）。global Vue对象也是唯一的，因此在整个应用程序中只能有一个实例。

3. 工厂模式

  	工厂模式是一种对象创建模式，其中一个对象的实例化是由一个工厂类负责的。Vue中可以使用工厂模式创建组件，这使我们可以动态地根据不同的数据创建不同的组件。
  	在Vue中，我们可以使用动态组件来实现这一点。动态组件是由一个组件工厂函数创建的，该函数接收一个组件名称和一个组件对象，并返回一个新的组件对象。这样，我们就可以在运行时动态地创建并加载组件了。

4. 适配器模式

  	适配器模式是一种结构性设计模式，它允许不兼容的接口之间进行通信。在Vue中，我们可以使用适配器模式适配不同的数据源。



### 什么是哈夫曼树(Huffman Tree)

​	哈夫曼树又称**最优二叉树**，是一种**带权路径长度最短**的二叉树。所谓树的带权路径长度，就是树中所有的叶结点的权值乘上其到根结点的路径长度（若根结点为0层，叶结点到根结点的路径长度为叶结点的层数）。树的路径长度是从树根到每一结点的路径长度之和，记为WPL=（W1*L1+W2*L2+W3*L3+...+Wn*Ln），N个权值Wi（i=1,2,...n）构成一棵有N个叶结点的二叉树，相应的叶结点的路径长度为Li（i=1,2,...n）。可以证明哈夫曼树的WPL是最小的。



### vite 和 vue-cli的区别



### v-for为什么需要绑定key值

关键词：**性能优化**、**diff算法节点比对**、**key不能是index**

为了性能优化 因为vue使用了虚拟DOM，更新DOM时用diff算法对节点进行一一比对，比如有很多li元素，要在某个位置插入一个li元素，但没有给li上加key，那么在进行运算的时候，就会将所有li元素重新渲染一遍，但是如果有key，那么它就会按照key一一比对li元素，只需要创建新的li元素，插入即可，不需要对其他元素进行修改和重新渲染。

key也不能是li元素的index，因为假设我们给数组前插入一个新元素，它的下标是0，那么和原来的第一个元素重复了，整个数组的key都发生了改变，这样就跟没有key的情况一样了



### ref和toRef的区别、特点：

1. ref本质是拷贝，修改响应式数据不影响原始数据；toRef的本质是引用关系，修改响应式数据会影响原始数据
2. ref数据发生改变，界面会自动更新；toRef当数据发生改变是，界面不会自动更新
3. toRef传参与ref不同；toRef接收两个参数，第一个参数是哪个对象，第二个参数是对象的哪个属性
4. toRef 用于创建对象指定的属性响应式，换句话说就是只能控制一个对象中的一个属性。
5. toRefs 用于创建对象响应式。
6. 他们对响应式的处理你可以理解为： toRef 类似 ref， toRefs 类似 reactive

| 类型     | 是否触发页面改变 | 是否可以解构 |
| -------- | ---------------- | ------------ |
| ref      | **是**           | 否           |
| reactive | **是**           | 否           |
| toRef    | 否               | 否           |
| toRefs   | 否               | **是**       |





### 封装axios的过程

- 首先区分开发环境和生产环境（创建对应的.env.development，.env.production文件）
- 使用axios.create创建一个axios对象进行基础的配置
- baseUrl设置为process.VUE_APP_BASE_API（会根据环境的变化切换对应的url前缀）
- 然后创建对应的请求拦截（用于发送对应的token）和响应拦截（根据响应的状态码进行响应的操作和提示）
- 最后暴露这个配置好的axios对象，我们就可以在其他的地方导入后简单的配置就可以进行请求了



### 如何封装Vue组件

UI组件、业务组件

1. 建立组件的模板，先把架子搭起来，写写样式，考虑好组件的基本逻辑。(os:先思考1小时，写代码10分钟)
2. 准备好组件的数据输入。即分析好逻辑，定好props里面的数据、类型以及默认值还要考虑组件内使用三种插槽哪一种或者搭配使用。考虑以下是否需要sync修饰符是否需要来回的回调函数传递。
3. 准备好组件的数据输出。即根据组件逻辑,做好要暴露出来的方法。
4. 封装完毕了，直接调用即可



### 后台管理权限系统权限设计思路

- 不用员工登录进去会有不同的TOKEN利用不同的TOKEN换取更详细的用户信息

  (侧边栏数据按钮权限数据头像等)

- 左侧侧边栏通过V-FOR侧边栏数据进行遍历可以写一个自定义指令也可以直接v-if来判断按钮权限数据判断，精确到按钮级别

- 为了避免低级别用户 强行进入高级别用户的URL 路由实现动态推入 比对权限和私有路由的关系 进行一一推入 最后使用router.addroute的重置路由高级api进行生效！



### symbol的原理和应用场景

```js
let s1 = Symbol()
//是由机器码 时间戳 进程id 随机数 组成的唯一值

var staff1 = 'jack'
var staff2 = 'jack'

const grade = {
    [staff1]:{age:18,height:170},
    [staff2]:{age:12,height:160}
}
console.log(grade)//jack: {age: 12, height: 160} 此时第一个jack被覆盖了

//此时利用symbol
var staff1 = Symbol('jack')
var staff2 = Symbol('jack')
const grade = {
    [staff1]:{age:18,height:170},
    [staff2]:{age:12,height:160}
}
console.log(grade)
//Symbol(jack): {age: 18, height: 170}
//Symbol(jack): {age: 12, height: 160}
```



### 虚拟dom的作用

- 增强语法 简化语法
- 增强性能 保证性能下限、极大的减少回流重绘
- 跨平台 虚拟dom可以开发小程序 安卓 iOS 



### 微信小程序登陆流程

1. 进入页面，调用wx.login()方法，获取登录凭证（code）。
2. 利用wx.request()发送code给开发者服务器，开发者服务器利用appid+appsecret+code向微信官方接口服务获取session_key + openid
3. 

<hr>



![](http://rvt7oeuw4.hn-bkt.clouddn.com/blog/api-login.2fcc9f35.jpg)

### v-if和v-show的区别

都是vue的指令，用法也相同，根据表达式的Boolean值来控制元素的显隐

**显示效果**

v-if控制的元素在隐藏后，是直接在文档消失了，

v-show控制的元素在隐藏后，是依旧存在于文档，只是没有显示出来

**原理**

v-if是控制虚拟dom的存在与否来间接控制真实dom的存在，故性能开销更大

v-show是控制元素的csss属性display，来控制元素的显隐藏，故性能开销更小

**应用**

在需要较少的切换时，甚至是一次性的切换时，建议使用v-if

在需要频繁切换时，建议使用v-show



### computed和methods的区别

- computed会缓存数据，只有当数据变化了才会重新计算
- methods每次调用都会重新编译计算
- computed的效率高于methods
- computed中定义的是属性而不是函数，所以使用时直接用`{{xxx}}`，而methods中定义的是函数，因此使用时需要`{{xxx()}}`。



### computed和watch的区别（面试题）

- computed可以自己定义并劫持数据，watch只能监听来自data中

- computed支持缓存，相依赖的数据发生改变才会重新计算，不支持异步操作
- watch不支持缓存，只要监听的数据变化就会触发相应操作，支持异步操作
- computed 有get和set属性
- watch 有handler、deep、immediate



### vue中组件传值的方式

父子间传值：

props

provide inject

bus

$emit

$attrs

兄弟间传值：

bus

作用域插槽

三方插件



### 为什么组件中的data是一个函数而不是对象

- 对象可能会存在覆盖，造成全局污染

- 组件是可复用的vue实例，一个组件被创建好之后，就可能被用在各个地方，而组件不管被复用了多少次，组件中的data数据都应该是相互隔离，互不影响的，基于这一理念，组件每复用一次，data数据就应该被复制一次，之后，当某一处复用的地方组件内data数据被改变时，其他复用地方组件的data数据不受影响。
- 组件中的data写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份data，就会造成一个变了全都会变的结果。

- 根实例对象data可以是对象也可以是函数（根实例是单例），不会产生数据污染情况



### script标签的async和defer属性的区别



### query传参和params传参的区别

- 首先就是写法得不同，query 得写法是 用 path 来编写传参地址，而 params 得写法是用 name 来编写传参地址，你可以看一下编写路由时候得相关属性，你也可以输出一下 路由对象信息 看一下
- 接收方法不同， 一个用 query 来接收， 一个用 params 接收 ，总结就是谁发得 谁去接收
- query 在刷新页面得时候参数不会消失，而 params 刷新页面得时候会参数消失，可以考虑本地存储解决
- query 传得参数都是显示在url 地址栏当中，而 params 传参不会显示在地址栏



### vue中用了哪些设计模式

​	Vue是一个综合性前端框架，它利用了一些设计模式来让代码更易于维护、可读性高、更好地解耦。下面是Vue中常用的设计模式的中文介绍。

1. 发布/订阅模式（观察者模式）

  	发布/订阅模式是一种松散耦合设计模式，其中一个组件（发布方）发出事件，而其他组件（订阅方）则监听并处理它。
  	在Vue中，我们可以使用`$on(eventName, callback)`方法订阅事件，使用`$emit(eventName, args)`方法发布事件。这个模式常用于事件总线和父子组件通信。
  	观察者模式定义对象之间的一对多依赖关系，当一个对象状态发生改变时，所有依赖于它的对象都会收到通知并自动更新。这种模式有时也被称为发布/订阅模式。在Vue中，父组件可以作为观察者订阅子组件的状态变化（例如子组件向父组件发送$emit消息），并更新自己的状态，而子组件则可以作为被观察者发送通知通知父组件更新状态。

2. 单例模式

  	单例模式是一种只允许创建一个对象的模式。在Vue中，这可以通过将一个对象实例化一次，然后在整个应用中共享它的方法和数据。
  	Vue使用单例模式来创建全局组件（例如vue-router和vuex store）。global Vue对象也是唯一的，因此在整个应用程序中只能有一个实例。

3. 工厂模式

  	工厂模式是一种对象创建模式，其中一个对象的实例化是由一个工厂类负责的。Vue中可以使用工厂模式创建组件，这使我们可以动态地根据不同的数据创建不同的组件。
  	在Vue中，我们可以使用动态组件来实现这一点。动态组件是由一个组件工厂函数创建的，该函数接收一个组件名称和一个组件对象，并返回一个新的组件对象。这样，我们就可以在运行时动态地创建并加载组件了。

4. 适配器模式

  	适配器模式是一种结构性设计模式，它允许不兼容的接口之间进行通信。在Vue中，我们可以使用适配器模式适配不同的数据源。



### 说一下前端有哪些性能优化



### 什么是哈夫曼树(Huffman Tree)

​	哈夫曼树又称**最优二叉树**，是一种**带权路径长度最短**的二叉树。所谓树的带权路径长度，就是树中所有的叶结点的权值乘上其到根结点的路径长度（若根结点为0层，叶结点到根结点的路径长度为叶结点的层数）。树的路径长度是从树根到每一结点的路径长度之和，记为WPL=（W1*L1+W2*L2+W3*L3+...+Wn*Ln），N个权值Wi（i=1,2,...n）构成一棵有N个叶结点的二叉树，相应的叶结点的路径长度为Li（i=1,2,...n）。可以证明哈夫曼树的WPL是最小的。



### vite 和 vue-cli的区别



### v-for为什么需要绑定key值

关键词：**性能优化**、**diff算法节点比对**、**key不能是index**

为了性能优化 因为vue使用了虚拟DOM，更新DOM时用diff算法对节点进行一一比对，比如有很多li元素，要在某个位置插入一个li元素，但没有给li上加key，那么在进行运算的时候，就会将所有li元素重新渲染一遍，但是如果有key，那么它就会按照key一一比对li元素，只需要创建新的li元素，插入即可，不需要对其他元素进行修改和重新渲染。

key也不能是li元素的index，因为假设我们给数组前插入一个新元素，它的下标是0，那么和原来的第一个元素重复了，整个数组的key都发生了改变，这样就跟没有key的情况一样了



### mixin和vuex的区别



### mixin和setup的区别

mixin 很容易发生冲突：因为每个特性的属性都被合并到同一个组件中，所以为了避免 property 名冲突和调试，你仍然需要了解其他每个特性。

可重用性是有限的：我们不能向 mixin 传递任何参数来改变它的逻辑，这降低了它们在抽象逻辑方面的灵活性。



### vue3对于vue2有了那些变化

- 底层实现原理从Object.defineProperty改为了Proxy
- 重写了虚拟dom和Tree-Shaking
- 更好的支持TypeScript
- 新增了组合式API（Composition API）
- 新增组件（Fragment组件可以没有根标签 、Teleport将html结构移动到指定位置、Suspense等待异步组件时渲染一些额外内容）
- 更新换代了新的生命周期钩子函数
- data 选项应始终被声明为一个函数
- 移除keyCode支持作为 v-on 的修饰符
- 移除了filter过滤器
- 性能提升（打包大小减少41%、初次渲染快55%, 更新渲染快133%、内存减少54%）



### ref和toRef的区别、特点：

1. ref本质是拷贝，修改响应式数据不影响原始数据；toRef的本质是引用关系，修改响应式数据会影响原始数据
2. ref数据发生改变，界面会自动更新；toRef当数据发生改变是，界面不会自动更新
3. toRef传参与ref不同；toRef接收两个参数，第一个参数是哪个对象，第二个参数是对象的哪个属性
4. toRef 用于创建对象指定的属性响应式，换句话说就是只能控制一个对象中的一个属性。
5. toRefs 用于创建对象响应式。
6. 他们对响应式的处理你可以理解为： toRef 类似 ref， toRefs 类似 reactive

| 类型     | 是否触发页面改变 | 是否可以解构 |
| -------- | ---------------- | ------------ |
| ref      | **是**           | 否           |
| reactive | **是**           | 否           |
| toRef    | 否               | 否           |
| toRefs   | 否               | **是**       |



### 什么是bfc

**概念**

- bfc 即 (Block Formatting Contexts 块级格式化上下文)，是w3c css2.1规范中的一个概念

- 指的是浏览器创建了独立的一个渲染区域，并且拥有一套独立的渲染规则，他决定了子元素如何定位、以及与其他元素的相互作用

**特点**

- 里面的元素不会影响外面的元素

**布局规则**

- 内部盒子在垂直方向、一个接一个放置
- 内部盒子的边距会重叠
- 计算BFC的高度时，浮动元素也参与计算



### html5新增特性

​	HTML5 是 **HyperText Markup Language 5 的缩写，HTML5** 技术结合了 HTML4.01 的相关标准并革新，符合现代网络发展要求，在 2008 年正式发布

1. 语义化标签
2. 新增Input表单的类型和属性
3. audio、video音频和视频
4. Canvas绘图
5. SVG绘图
6. 地理定位
7. 拖拽API
8. WebStorage
9. WebWorker
10. WebSocket



### css3新增特性

1. 选择器
2. 新样式(border-radius、box-shadow、border-image、background-size、text-overflow)
3. transition过渡（duration、delay）
4. transform变换（位移translate、缩放scale、旋转rotate、倾斜skew）
5. aninmation动画
6. 渐变（linear-gradient：线性渐变、radial-gradient：径向渐变）
7. 其他（`flex`弹性布局、`Grid`栅格布局）



### 伪类和伪类元素的区别

伪类：伪类用于选择DOM树之外的信息，或是不能用简单选择器进行表示的信息。前者包含那些匹配指定状态的元素，比如`:visited`，`:active`；后者包含那些满足一定逻辑条件的DOM树中的元素，比如`:first-child`，`:first-of-type`，`：target`。

伪元素：伪元素为DOM树没有定义的虚拟元素。不同于其他选择器，它不以元素为最小选择单元，它选择的是元素指定内容。比如`::before`表示选择元素内容的之前内容，也就是`""`；`::selection`表示选择元素被选中的内容。

伪元素和伪类的区别：
（1）伪类和伪元素的最大区别就在于有没有创建一个文档树以外的元素。伪元素创建了一个文档树以外的元素并为他添加样式，这个容器不包含任何DOM元素但是可以包含内容。**换句话说伪类和伪元素的区别就是伪类的操作对象是文档树中已有的元素，而伪元素则创建了一个文档树以外的元素。**
（2）伪类使用的是单冒号，但是在css3中规定伪元素使用的双冒号，但是除了少部分的伪元素必须使用双冒号以外，像after还有before都是支持单引号的。为了兼容性所以目前还是在使用一些常见的伪元素的时候采用单冒号较为稳妥。



### 什么是深拷贝和浅拷贝以及实现方式

深浅拷贝都是返回一个新的对象

**深拷贝：**类似于文件复制粘贴，拷贝的是值

实现：JSON.stringify JSON.parse、自定义递归书写对应的深拷贝(重点)、第三方插件lodash.js

**浅拷贝：**类似于文件的创建快捷方式，第一层拷贝值，其余拷贝地址（所以里面的对象是共用的）

实现：Object.assign、自定义函数（遍历第一层复制）、第三方插件lodash.js、使用扩展运算符实现数组及对象的浅拷贝、使用数组的concat方法、使用数组的slice方法



### call apply bind

这三个字函数都用于改变函数执行的this指向

- call，第一个参数为改变this指向指向的对象，往后传递的是一个个参数
- apply，第一个参数为改变this指向指向的对象，往后传递的是一个参数数组

- bind，第一个参数为改变this指向指向的对象，返回的是函数需要自己调用、往后传递的是一个个参数



### 节流防抖

**节流：**在规定的时间内连续触发，只执行第一次，在该时间过后才会执行触发的下一个事件

-  鼠标连续不断地触发某事件（如点击），只在单位时间内只触发一次；

-  懒加载时要监听计算滚动条的位置，但不必每次滑动都触发，可以降低计算的频率，而不必去浪费 CPU 资源；
-  比如窗口调整、页面滚动、抢购和疯狂点击等会用到节流。

**防抖：**在规定的时间内连续触发事件只执行最后一次

- 用户在输入框中连续输入一串字符时，可以通过防抖策略，只在输入完后，才执行查询的请求，这样可以有效减少请求次数，节约请求资源；



### get和post请求

**get请求**

- get请求一般用于获取数据（安全性低效率高速度快)
- 默认的请求方式为get请求（没有设置对应的请求那么就是get请求)
- 传输的参数利用?进行拼接，拼接到对应的url
- get请求会默认缓存对应的参数
- 传输的参数会在请求头中url
- get请求传输的数据大小有限制(2kb)
- get的请求参数必须是ASCII码字符

**post请求**

- post请求的数据(封装为一个表单对象）
- 在请求体中post请求相对get要安全
- post请求的数据量大于get(数据没有大小限制)
- post请求的数据不会被缓存
- post请求必须手动设置缓存



### TCP的三次握手和四次挥手





### 有没有过封装axios？

- 首先区分开发环境和生产环境（创建对应的.env.development，.env.production文件）
- 使用axios.create创建一个axios对象进行基础的配置
- baseUrl设置为process.VUE_APP_BASE_API（会根据环境的变化切换对应的url前缀）
- 然后创建对应的请求拦截（用于发送对应的token）和响应拦截（根据响应的状态码进行响应的操作和提示）
- 最后暴露这个配置好的axios对象，我们就可以在其他的地方导入后简单的配置就可以进行请求了



### 有没有封装过Vue组件？

UI组件、业务组件

1. 建立组件的模板，先把架子搭起来，写写样式，考虑好组件的基本逻辑。(os:先思考1小时，写代码10分钟)
2. 准备好组件的数据输入。即分析好逻辑，定好props里面的数据、类型以及默认值还要考虑组件内使用三种插槽哪一种或者搭配使用。考虑以下是否需要sync修饰符是否需要来回的回调函数传递。
3. 准备好组件的数据输出。即根据组件逻辑,做好要暴露出来的方法。
4. 封装完毕了，直接调用即可



### 后台管理权限系统权限设计思路

- 不用员工登录进去会有不同的TOKEN利用不同的TOKEN换取更详细的用户信息

  (侧边栏数据按钮权限数据头像等)

- 左侧侧边栏通过V-FOR侧边栏数据进行遍历可以写一个自定义指令也可以直接v-if来判断按钮权限数据判断，精确到按钮级别

- 为了避免低级别用户 强行进入高级别用户的URL 路由实现动态推入 比对权限和私有路由的关系 进行一一推入 最后使用router.addroute的重置路由高级api进行生效！



### symbol的原理和应用场景

```js
let s1 = Symbol()
//是由机器码 时间戳 进程id 随机数 组成的唯一值

var staff1 = 'jack'
var staff2 = 'jack'

const grade = {
    [staff1]:{age:18,height:170},
    [staff2]:{age:12,height:160}
}
console.log(grade)//jack: {age: 12, height: 160} 此时第一个jack被覆盖了

//此时利用symbol
var staff1 = Symbol('jack')
var staff2 = Symbol('jack')
const grade = {
    [staff1]:{age:18,height:170},
    [staff2]:{age:12,height:160}
}
console.log(grade)
//Symbol(jack): {age: 18, height: 170}
//Symbol(jack): {age: 12, height: 160}
```



### 虚拟dom的作用

- 增强语法 简化语法
- 增强性能 保证性能下限、极大的减少回流重绘
- 跨平台 虚拟dom可以开发小程序 安卓 iOS 



### 微信小程序登陆流程

1. 进入页面，调用wx.login()方法，获取登录凭证（code）。
2. 利用wx.request()发送code给开发者服务器，开发者服务器利用appid+appsecret+code向微信官方接口服务获取session_key + openid
3. 

<hr>


![](http://rvt7oeuw4.hn-bkt.clouddn.com/blog/api-login.2fcc9f35.jpg)