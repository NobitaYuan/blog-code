---
title: React重要知识点
date: 2023-6-6
categories: 
- 前端
- 重要知识点汇总
tags: 
- react
description: 'React重要知识点汇总'
---


# React重要知识点

![image-20230316090723110](http://rvt7oeuw4.hn-bkt.clouddn.com/blog/image-20230316090723110.png "前端知识体系")

### 什么是React

React 是一个用于构建用户界面的 JavaScript 库。它是由 Facebook 开发并开源的，目前被广泛应用于前端开发中。

React 的主要特点是使用组件化的方式来构建用户界面。通过将界面拆分成独立可重用的组件，开发者可以更轻松地管理复杂的 UI，提高代码的可维护性和重用性。React 采用了虚拟 DOM（Virtual DOM）的概念，通过diff算法来比较dom树的差异，高效地更新实际 DOM。这种方式避免了直接操作 DOM 的复杂性和低效性，提供了更快的渲染速度和更好的用户体验。

React 还提供了一套声明式的编程模型，开发者只需要关注组件的状态和属性，通过对状态和属性的变化做出响应来更新界面。React 通过自动处理界面的更新，使得开发者可以更专注于应用的逻辑和交互，而无需手动操作 DOM。



### vue和react的区别

vue是一门框架，react是一个库

**官方态度**

- vue的官方提供了一套完整的开发流程，以追求最佳实现，利用vuex进行全局状态管理，vue-router路由管理，scope进行css的管理
- react则是灵活多变，官方更推崇用户去社区寻找实现方案，不管是全局状态管理还是路由管理，都需要到社区中寻找各种各样的方案

**写法上**

- vue是编写template，写入vue文件，写法上接近于原生html（更符合W3C标准）
- react则是编写jsx，写入js文件，写法上更加的灵活，（可在html里嵌套js的写法）

**组件类型**

vue的组件有vue2的选项式组件写法，vue3的组合式写法

react则可以编写类组件和函数式组件

**语法上**

- vue推崇指令化编写，官方提供的大量的指令

- react则推崇原生的js书写，语法上更加灵活



### 为什么要使用JSX，有什么特点

- 可声明变量
- 可嵌入表达式
- 单标签可以提前闭合
- 类名和属性使用驼峰命名



### react的生命周期

当一个应用或者页面从创建到销毁的过程中，在某个过程会自动调用的函数被称作生命周期钩子函数

![](http://rvt7oeuw4.hn-bkt.clouddn.com/blog/1654490712545-6bd28fa7-290b-48fb-8d51-bbf5578dad3f.png)

constructor — render — componentDidMount — componentDidUpdate — componentWillUnmount



### 如何进行组件间传值

- 父传子

父组件利用属性直接传值，子组件通过this.props[属性名]直接使用

- 字传父

父组件传入函数，子组件调用函数并传入函数，父组件即可在函数中接收到数据

- 兄弟传值

通过一个公共的父组件，一个兄弟组件通过调用父组件的函数，改变父元素的数据，而该数据会传递给另外一个兄弟组件，从而间接的完成了兄弟间组件传值

- 跨组件传值（爷孙传值）

使用 Provider 和 Consumer组件，利用Provider组件通过属性提供数据，利用Consumer组件通过函数接收数据



### 什么是受控组件和非受控组件

​	组件中数据的变化会实时渲染到视图上，视图上数据的变化也会实时的更新到数据中，例如input框中的value和state中的数据的双向绑定



### 什么是高阶组件

官方的定义: 高阶组件是一个`参数为组件`，并且`返回值为新组件`的`函数`;

两个组件组合成一个新的组件，具有两个组件的优点



### 什么是React的renderprops功能

​	父组件传入一个函数给子组件（函数体是要渲染的组件），要渲染的组件中的某些数据需要子组件提供，此时子组件接收到函数并调用，将参数传入，此时父组件通过函数的参数接收到了数据，便可以顺利的通过收到的数据渲染内容



### React为什么会出现Hooks

>  react hooks引入于16.8

1. 难以维护：由于 React 类组件代码逻辑分裂，因此它们可能变得难以维护。这可能会导致错误和性能问题。
2. 高内存占用：React 类组件在渲染时需要创建很多实例，这会导致内存占用过高。如果应用程序中有大量的 React 类组件，则可能会导致内存泄漏和性能问题。
3. 难以测试：由于 React 类组件通常是单例模式，因此它们很难进行单元测试。这意味着开发人员必须依赖于其他测试方法来验证其行为。
4. 难以调试：由于 React 类组件通常具有复杂的状态管理，因此它们很难调试。这可能会导致错误和性能问题。
5. 难以重用：由于 React 类组件是单例模式，因此它们很难被其他组件重用。这可能会导致代码重复和不必要的工作。
6. react类组件数据和函数距离过远不利于逻辑并和 类似于VUE2和VUE3关系



### React的高阶组件、renderprops、hooks的区别

- 三者都是用来扩展react组件的功能的工具

- 高阶组件是一种函数式编程的思想：高阶组件是一个`参数为组件`，并且`返回值为新组件`的`函数`;两个组件组合成一个新的组件，具有两个组件的优点
- renderprops是React的一种特性，传入一个函数，函数的返回值是一个组件，子组件调用这个函数，返回这个组件
- hooks是 React v16.8 新增的API，也被称为钩子函数，这系列的api提供了大量的增强函数组件的方法，例如添加响应式数据的useState，类似生命周期的响应钩子等，另外用户还可以自定义hooks



### react-router-dom的路由跳转

- v5版本，使用bwoserRouter包裹的第一层组件可以从props中直接获取match，history，location对象，从而进行相应的操作，但是孙级组件的props不会直接获得以上三个属性，需要使用withrouter的包裹，从而获得以上三个对象。

- v6版本直接使用useNavigate()



### 对redux的特性

状态管理工具

需要订阅

- actions
- store
- reducers

![](http://rvt7oeuw4.hn-bkt.clouddn.com/blog/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5.jpeg)



### 对MobX的理解

MobX 是一个用于管理 JavaScript 应用状态的库，它基于 Redux 的思想，提供了一种更加简单、易用的状态管理方式。

MobX 的核心概念是 Store,它是一个响应式的对象，可以自动跟踪应用程序中的状态变化，并将这些变化反映在应用程序的 UI 中。Store 中的每个属性都是一个观察者，当属性的值发生变化时，Store 会自动更新所有与该属性相关的组件。

MobX 还提供了一些工具和 API,例如 Action、Observable、connect 等，使得开发者可以轻松地创建和管理 Store,以及将 Store 与其他部分集成在一起。

相比于 Redux,MobX 提供了更加直观和简单的 API,使得开发者可以更加快速地构建出状态管理逻辑。同时，MobX 还提供了一些高级特性，例如中间件、异步操作等，使得开发者可以更加灵活地处理应用程序的状态变化。

总之，MobX 是一种非常强大的状态管理库，它可以帮助开发者更好地组织和管理应用程序的状态，从而提高应用程序的可维护性和可扩展性。



### 对Redux ToolKit的理解

ReduxToolkit 是一个基于 Redux 的 React 状态管理库，它提供了一些工具和 API,使得开发者可以更加方便地使用 Redux 来管理应用程序的状态。

ReduxToolkit 的主要功能包括：

1. 自动生成 connect 函数：ReduxToolkit 可以自动为每个组件生成 connect 函数，从而将组件与 Redux Store 连接起来。这样，开发者就不需要手动编写 connect 函数了。
2. 提供高阶组件：ReduxToolkit 提供了一些高阶组件， 使得开发者可以更加方便地使用 Redux。
3. 支持异步操作：ReduxToolkit 支持异步操作，可以在不阻塞主线程的情况下进行数据获取和更新操作。这样可以提高应用程序的性能和响应速度。
4. 支持多个 Store:ReduxToolkit 支持同时存在多个 Redux Store,从而可以将不同的数据源集成到同一个应用程序中。

总之，ReduxToolkit 为开发者提供了更加便捷和高效的 Redux 使用方式，可以帮助开发者更好地组织和管理应用程序的状态，从而提高应用程序的可维护性和可扩展性。



### Redux,mbox,ReduxToolkit三者的区别

Redux、mbox 和 Redux Toolkit 都是用于状态管理的工具，但它们在一些方面有一些区别。

1. Redux: Redux 是一个可预测状态容器，用于 JavaScript 应用的状态管理。它是 Flux 架构的一种实现方式。Redux 的核心概念包括 store、action 和 reducer。Redux 使用单一的状态树（单一的 store）来管理整个应用的状态，并使用纯函数的 reducer 来处理状态的更新。Redux 需要开发者手动编写 action 和 reducer，并且需要处理大量的样板代码，例如定义 action 的类型常量和编写 switch-case 语句。
2. mbox: mbox 是一个简洁、轻量级的状态管理库，它借鉴了 Redux 的一些思想，但提供了更简单的 API 和更少的样板代码。mbox 的核心概念是 store 和 signal。store 是应用的状态容器，signal 是用于触发状态变更的对象。mbox 使用响应式的方式来管理状态，当 signal 触发时，会自动更新相关的状态。mbox 采用链式调用的方式定义状态和信号，使代码更具可读性和易于维护。
3. Redux Toolkit: Redux Toolkit 是一个官方推荐的 Redux 工具包，旨在简化 Redux 的使用和减少样板代码。它提供了一些实用的工具函数和约定，帮助开发者更轻松地编写 Redux 代码。Redux Toolkit 包含了一个称为 createSlice 的函数，用于生成包含 reducer 和 action 的模块化切片（slice），大大简化了编写 reducer 和 action 的过程。它还提供了一个 configureStore 函数，用于快速创建一个预配置的 Redux store。此外，Redux Toolkit 还集成了 immer 库，使得在 reducer 中进行不可变更新变得更加简单。

总结来说：

- Redux 是一个功能强大的状态管理库，但需要开发者手动编写大量的样板代码。
- mbox 是一个简洁轻量的状态管理库，提供了响应式的状态管理和链式调用的 API。
- Redux Toolkit 是一个简化 Redux 的工具包，提供了更简单的 API 和约定，减少样板代码的编写。

选择使用哪个工具取决于个人和项目的需求，以及开发团队的偏好和经验。Redux 在大型应用和复杂状态管理方面表现良好，mbox 则更适合小型应用或希望更简单状态管理的场景，而 Redux Toolkit 则可以提供更方便和一致的开发体验。

- Redux需要订阅
- mobx需要包裹组件
- RTK类似于hooks的使用方式





### React Fiber是什么？

- React Fiber 是 React 16 中引入的一种新的协调机制（reconciliation algorithm），是对核心算法的重写和重新实现。



### React事件和HTML事件的区别

1. 事件命名方式：在HTML中，事件名称是以"on"开头，例如"onclick"、"onchange"等。而在React中，事件名称采用驼峰命名法，例如"onClick"、"onChange"等。
2. 事件绑定方式：在HTML中，可以通过在HTML元素上添加属性来绑定事件，例如`<button onclick="handleClick()">Click me</button>`。而在React中，可以使用JSX语法来绑定事件，例如`<button onClick={handleClick}>Click me</button>`。
3. 事件对象传递：在HTML中，事件处理函数可以通过`event`参数来访问事件对象，其中包含有关事件的详细信息。而在React中，事件处理函数的参数不是原始的事件对象，而是React合成事件（SyntheticEvent）对象，它是对原生事件的封装，提供了跨浏览器一致性和额外的功能。
4. 事件冒泡和默认行为：在HTML中，事件冒泡和默认行为是自动处理的。而在React中，默认情况下，事件不会冒泡，也不会触发元素的默认行为。如果需要实现冒泡或取消默认行为，可以显式地调用相应的方法。
5. React 事件处理程序必须考虑异步操作和副作用。例如，如果一个事件处理程序执行了一个异步操作并返回一个Promise,那么它必须使用 useEffect 钩子来确保该 Promise 在组件卸载时被正确地处理。



### React声明组件的方式

- function
- 箭头函数
- 高阶组件
- ES6的class类继承React.Component
- ES5的createClass声明方式



### 类组件和函数组件的区别

- 类组件有生命周期
- 类组件的使用需要被new
- 类组件使用数据需要通过this.props或者this.state
- 函数式组件捕获了渲染所使用的值。类组件会因为this的改变而失去原来的的值
- 类组件逻辑分裂

> **未来的发展趋势**
>
> 由于 React Hooks 的诞生，现在 函数组件成了React 社区主推的方案
>
> React 团队从 Facebook的实际业务场景触发，通过探索时间切片和并发模式，以及考虑性能的进一步优化和组件间更合理的代码拆分后，认为 **类组件的模式并不能很好地适应未来的趋势**，它们给出了以下3个原因：
>
> 1. this 的模糊性
> 2. 业务逻辑耦合在生命周期中
> 3. React 的组件代码缺乏标准的拆分方式
>
> 而使用 Hooks 的函数组件可以提供比原先更细粒度的逻辑组织和复用，且能更好的适用于时间切片和并发模式



### React中Component和PureComponent的区别

- PureComponent是继承自Component的子类，会自动加载shouldComponentUpdate函数
- 当组件需要更新的时候会自动调用shouldComponentUpdate函数对props和state进行浅比较
- 如果没有变化，则不会触发render函数的渲染



### 那些情况会触发React组件的重新渲染？

- props，state等数据的变化

- 类组件中的setState()
- 函数组件中的useState钩子里的set函数
- 组件的key值发生了变化
- 组件的 shouldComponentUpdate 方法返回值为 false,表示当前的 props 或 state 没有发生变化，不需要重新渲染



### React如何判断何时重新渲染组件？

- 使用 shouldComponentUpdate 方法，该方法中根据当前 props 和 state 的变化情况来决定是否需要重新渲染组件。如果返回值为 false,则表示不需要重新渲染；如果返回值为 true,则表示需要重新渲染。
- 使用 useEffect 钩子函数，可以用于在组件挂载、更新或卸载时执行一些操作。如果在 useEffect 中改变了组件的状态或者触发了事件，那么 React 会认为组件需要重新渲染。



### React的render函数做了什么？

React 的 render 函数是组件渲染的核心方法，每一个组件都有自己的render函数，它的作用是将组件的状态和属性的虚拟DOM转换成真实 HTML 元素，渲染到页面上。

- 收集数据：获取props、state，对数据进行处理
- 生成HTML元素：生成html元素，同时将数据也添加其中，最后渲染到页面上
- 添加事件监听：为需要添加事件的元素添加事件的监听



### 有状态组件和无状态组件的区别和使用场景

1、有状态组件指的是可以拥有自己的状态(state)的组件

 **场景包括：**

- 需要在组件内部保存一些数据的场景，例如表单组件、评论组件等；
- 需要在组件内部处理一些复杂的逻辑的场景，例如图表组件、表格组件等；
- 需要在多个子组件之间共享数据的场景，例如路由组件、应用程序入口组件等。



2、无状态组件指的是不能拥有自己状态的组件。通常情况下，无状态组件只接受 props 作为输入，并将这些 props 渲染到页面上。

 **场景包括：**

- 只要求展示数据的场景，例如图标、按钮、标签等；
- 需要在多个组件之间共享数据的场景，例如导航栏、页脚等；
- 需要复用相同结构的组件的场景，例如列表、表格等。



### 什么是受控组件和非受控组件

​	受控组件：组件中数据的变化会实时渲染到视图上，视图上数据的变化也会实时的更新到数据中，例如input框中的value和state中的数据的双向绑定

​	非受控组件：包括 div、span 等普通元素，以及 Link、Button 等需要用户交互才能更新状态的组件



### React Fragment是什么？

React Fragment 是 React 中一种特殊的组件

可以作为React组件的根组件使用，同时这个组件也不会渲染出来，可以减少不必要的性能开销

```js
//写法一：
<React.Fragment>
</React.Fragment>
//写法二：
<>
</>
```



### React如何获取dom

- useRef
- 原生的document的dom选择器
- 利用hooks



### React类组件中绑定this的方式有哪些？

- 在构造函数内部使用bind绑定this

  ```js
  class Test extends React.Component {
      constructor (props) {
          super(props)
          this.state = {message: 'Allo!'}
          this.handleClick = this.handleClick.bind(this)
      }
      ...
  }
  ```

- 在render函数中用bind

  ```js
  render () {
  	return (
  		<div>
  			<button onClick={ this.handleClick.bind(this, '赵四') }>Hello</button>
          </div>
      )
  }
  ```

- 在render函数中使用箭头函数

  ```js
  render () {
  	return (
  		<div>
  			<button onClick={ ()=>{ this.handleClick() } }>Hello</button>
  		</div>
      )
  }
  ```



### React类组件中的setState是同步的还是异步的

是异步的，setState() 方法并不会立即更新组件的状态，而是将更新后的 state 放入一个队列中，等待下一次渲染时再执行。



### React类组件中的setState第二个参数做什么的

第二个参数是state数据更新完成后的自动调用的回调函数



### React组件通信的方式

在 React 中，常见的组件通信方式有以下几种：

1. Props：父组件通过 props 将数据传递给子组件。子组件可以通过 props 属性来访问这些数据，并在需要时进行使用。

2. Context：React 提供了上下文(Context) API,可以让父组件向子组件传递数据。这种方式可以避免在父子组件之间多层嵌套传递数据的麻烦。

3. Callback 回调函数:父组件可以将一个回调函数作为 prop 传递给子组件，子组件可以在特定事件发生时调用该回调函数，从而将信息传递回父组件。

4. Redux / MobX / RTK：状态管理库，可以用于管理 React 应用中的全局状态。通过将应用的状态存储在一个中央仓库中，不同的组件可以共享这些状态，从而实现组件之间的通信。

5. React Router：React Router 是 React 官方提供的路由库，可以用于管理单页应用(SPA)中的路由。通过在路由配置中定义不同的组件，可以在不同的路由路径下渲染不同的组件，从而实现组件之间的通信。



### React Router的路由底层实现

H5新增的 History API

- hash 底层 原生方法  location.hash = xxx 
- histroy底层  history.pushState、replaceState、history.go()



### React中Link标签和a标签的区别

- 类别：Link标签是React Router提供的组件，a标签则是html原生的标签
- 功能：Link 标签可以支持重定向、刷新、历史记录等，a标签只能进行页面跳转
- 传参：Link 标签可以通过 to 属性来指定跳转的目标地址，同时还可以通过 params、query、hash、action 等属性来传递参数。而 a 标签不能



### 如何解决props嵌套过深问题

1. 利用context跨组件传值
2. 使用全局状态管理工具 Redux MobX RTK等



### 为什么useState要使用数组不是对象

1. 可变性：数组是可变的数据结构，可以直接在运行时修改其内容，而对象是不可变的。这种可变性使得在 React 组件中更新状态时更加高效，因为可以直接修改数组中的值而无需创建新的对象。这样可以避免触发不必要的重新渲染，并提高性能。
2. 索引访问：通过索引，可以快速访问和修改数组中特定位置的元素。而对象需要使用键来访问其属性，这可能需要更多的代码和处理。所以，使用数组作为状态可以提供更方便的索引访问。
3. 兼容性：早期版本的 React 在状态传递时只对数组进行了浅拷贝，而不是对象。这意味着如果状态是对象，它会在组件之间共享同一个引用，可能会导致状态不同步的问题。但是，从 React 16.8 版本开始，引入了 Hooks，包括 `useState`，React 在内部会执行浅拷贝，以确保状态的独立性，无论是数组还是对象。



### useEffect和useLayoutEffect的区别

useEffect 和 useLayoutEffect 都是 React Hooks 提供的状态更新的钩子函数。

**useEffect**

是在组件渲染完成之后，即组件已经渲染到屏幕上后触发。

**useLayoutEffect**

在浏览器完成布局和绘制但尚未呈现到屏幕上时触发，它会在所有 DOM 变更完成后同步执行，阻塞页面渲染。

> 需要注意的是，由于 `useLayoutEffect` 是同步执行的，如果在其中进行耗时操作或阻塞浏览器渲染，可能会导致性能问题或页面卡顿。因此，一般情况下应优先考虑使用 `useEffect`，只有在确实需要在组件渲染后立即执行 DOM 操作或获取布局信息时才使用 `useLayoutEffect`。



### 用TS结合React项目写过吗说一下都用在哪里

- 定义React组件时，使用FC限制组件类型
- 限制props的参数传递类型
- 在调用axios接口的时候，限制接口的参数传递的类型
- 使用antd组件的Table.Colum时候为render函数传递数据源进行类型限制



### React的设计思路是什么

- 组件化开发：整个应用程序看作是由多个组件组成的，每个组件都有自己的状态和行为
- 虚拟 DOM：React 通过使用虚拟 DOM(Virtual DOM)来提高渲染性能。
- JSX：React 使用 JSX 来描述 UI 元素，JSX 语法类似于 HTML,但是可以嵌套表达式和函数调用。
- 单项数据流：React 采用单向数据流的设计思想，即从父组件到子组件的数据传递只能是单向的。



### React如何实现v-show

父子传参，传递一个控制显隐的属性，子组件根据这个参数的值，来判断是否添加display:none属性来控制显隐，从而实现的v-show的功能



### React遍历数据渲染的方法有哪些？

- Array.map()
- Array.forEach()
- 也可以使用for循环，但是需要将数据存入数组，将数组渲染到页面



### React错误边界

使用getDerivedStateFromError生命周期函数去捕获错误



### 使用过那些React hooks？

#### 数据相关hooks

##### useState

定义响应式数据

##### useContext

可以帮助我们跨越组件层级直接传递变量，实现数据共享

Provider提供， Consumer获取

##### useMemo

计算属性

##### useFef

用于获取组件或者dom对象

##### useId

用于在 React 组件中生成唯一标识符（ID）的自定义钩子函数。

#### 路由相关hooks

##### useLocation

可以解构获取当前跳转好的路由地址

```js
const { pathname } = useLocation(); // 获取请求路径
```

##### useNavigate

路由跳转的方法

```js
navigate("/home", { replace: true })
```

##### useParams

获得路由跳转传过来的参数

**例：**

```js
//跳转+传参
navigate('/detail/'+item.proid)
```

```js
//接受并解构参数
const {proid} = useParams()
```

#### 状态相关钩子hooks

##### useEffect

是在组件渲染之后执行的钩子函数，用于处理异步操作、订阅事件、操作 DOM 等副作用。（是异步的）

##### useLayoutEffect

 在组件渲染之后、DOM 更新之前同步执行。

> 需要注意的是，由于 `useLayoutEffect` 是同步执行的，如果在其中进行耗时操作或阻塞浏览器渲染，可能会导致性能问题或页面卡顿。因此，一般情况下应优先考虑使用 `useEffect`，只有在确实需要在组件渲染后立即执行 DOM 操作或获取布局信息时才使用 `useLayoutEffect`。

##### useCallback

缓存函数

当依赖的数据变化时，会调用其中的回调函数

##### useReducer

主要作用就是获取Redux更新state

#### 其他

##### useTransition

用于在并发模式下处理异步更新的过渡效果。

##### createPortal

传送门钩子

