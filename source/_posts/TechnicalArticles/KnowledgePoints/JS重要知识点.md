---
title: JS重要知识点
date: 2023-6-6
categories: 
- 前端
- 重要知识点汇总
tags: 
- js
description: 'JS重要知识点汇总'
---


# JS重要知识点

![image-20230316090723110](http://rvt7oeuw4.hn-bkt.clouddn.com/blog/image-20230316090723110.png "前端知识体系")

### 严格模式

- 全局变量必须先声明
- 禁止使用with
- 新增了eval作用域
- this指向window
- 函数参数不能重名



### ES6新增特性

es6指的是2015年之后ECMA发布js规范，通常被称为es6规范

变量：let const 

基础数据类型：symbol，bigInt

字符串：模板字符串，includes(),startwidth(),endwidth(),repeat()

数组：Array.of(),Array.from(),Array.find(),Array.findIndex(),Array.fill(),Array.flat()

函数：参数默认值，箭头函数

类：新增了类

其他：解构赋值 扩展运算符 Promise async await 模块化



### Promise

Promise 是es6新增的异步编程的一种解决方案，其实是一个构造函数，

自身有三个状态，pending，fulfilled，rejected，状态一旦发生变化，不可改变

在原型上有then，catch，finally三个方法，静态方法有resolve，reject，race，all，allSettled



### 闭包

函数嵌套函数，内部函数拥有外部函数的参数和变量的引用

优点：

- 避免的了全局污染
- 扩大了对应的变量的作用域
- 不需要创建新的对象，使用过程中效率会更高

缺点

- 因为会一直保持引用，会导致内存一直被占用
- 在ie浏览器的情况下会导致内存泄漏



### 节流防抖

**节流：**在规定的时间内连续触发，只执行第一次，在该时间过后才会执行触发的下一个事件

-  鼠标连续不断地触发某事件（如点击），只在单位时间内只触发一次

-  懒加载时要监听计算滚动条的位置，但不必每次滑动都触发，可以降低计算的频率，而不必去浪费 CPU 资源
-  比如窗口调整、页面滚动、抢购和疯狂点击等会用到节流。

**防抖：**在规定的时间内连续触发事件只执行最后一次

- 用户在输入框中连续输入一串字符时，可以通过防抖策略，只在输入完后，才执行查询的请求，这样可以有效减少请求次数，节约请求资源；



### 手写Ajax

```js
let xhr = new XMLHttpRequest()
xhr.open('get','http://jsonplaceholder.typicode.com/todos')
xhr.send()
xhr.addEventlistener('readystatechange',()=>{
    if(xhr.readeyState == 4 && /^2\d{2}/.test(xhr.status)){
        console.log(xhr.responseXML)
        console.log(xhr.responseText)
    }
})
```



### this指向的种类

1. 全局对象：如果this位于函数外，this指向全局对象（window）。
2. 隐式绑定：如果this位于函数内，并且函数在对象内部调用，this指向调用该函数的对象。
3. 显式绑定：使用call、apply、bind方法，在调用函数时手动绑定this的指向。
4. new绑定：使用new调用构造函数时，this指向新创建的实例对象。
5. 箭头函数绑定：箭头函数的this指向不会改变，它会“捕获”上下文中的this值，指向箭头函数声明时的作用域内的this值



### call apply bind

这三个字函数都用于改变函数执行的this指向

- call，第一个参数为改变this指向指向的对象，往后传递的是一个个参数
- apply，第一个参数为改变this指向指向的对象，往后传递的是一个参数数组

- bind，第一个参数为改变this指向指向的对象，返回的是函数需要自己调用、往后传递的是一个个参数



### 什么是JSONP

​	JSONP是一种解决跨域的一种的方案，它实际上也是一个get请求，它是利用对应的script标签不受跨域影响的限制来解决对应的跨域问题。(带对应的href src等的标签都不受跨域的影响script link farmes等)

​	前端在src中传递函数名，后端传入参数，回到前端再调用



### async await

async和awiat是es7新增的修饰关键词

async属于语法糖（await一定要在async里面使用 且**await修饰的是promise**）

**async**

- 用于修饰函数,被其修饰的函数会返回一个promise对象
- 在修饰的函数内返回值相当于调用了resolve方法， 返回值会被传递给then
- 在修饰的函数内报错相当于调用了reject方法，错误会被传递给catch
- 默认会执行then方法

**awiat**

- 用于修饰promise，且只能是在async修饰的函数内使用，它会让当前的**js引擎线程**(执行上下文等待)，当前修饰的promise状态不为pending的时候就会释放



### 深拷贝、浅拷贝

深浅拷贝都是返回一个新的对象

**深拷贝：**类似于文件复制粘贴，拷贝的是值

实现：JSON.stringify JSON.parse(无法拷贝方法)、自定义递归书写对应的深拷贝(重点)、第三方插件lodash.js（cloneDeep）

**浅拷贝：**类似于文件的创建快捷方式，第一层拷贝值，其余拷贝地址（所以里面的对象是共用的）

实现：Object.assign、自定义函数（遍历第一层复制）、第三方插件lodash.js、使用扩展运算符实现数组及对象的浅拷贝、使用数组的concat方法、使用数组的slice方法



### 如何数组去重

- 利用set然后Array.from转换为数组
- 利用对象的属性不重复的特点
- 循环一个个去重



### new一个对象的过程

1. 创建一个新对象
2. 将原型加到这个对象上
3. 绑定this
4. 返回这个构造好的新对象   



### web性能优化

**DOM层面**

- 减少重绘回流
- 使用事件委托
- 函数的防抖节流
- Keepalive缓存组件

**http层面**

- 利用浏览器的缓存
- 减少http的请求次数和大小
- DNS预解析
- 精灵图
- 组件库按需引入
- 合理利用路由懒加载

**长列表优化**

对于数量极多的长列表，全部渲染到页面势必会影响性能，但是页面所显示的列表最终是只有少数几个，所以此时可以利用算法，针对长列表进行截取，只展示需要看到的数据。



### 栈和堆的区别

栈（stack）：存放基本数据类型，存放局部变量，由编译器分配释放

堆（heap）：存放对象，一般由程序员分配释放或者由系统自动释放



### 什么是window对象和document对象

window对象代表浏览器中打开的一个窗口。document对象代表整个html文档。实际上，document对象是window对象的一个属性

```js
window.alert()
window.confirm()
window.prompt()
window.setInterval()
window.clearInterval()
window.setTimeout()
window.open()
window.close()
```

```js
document.write
document.createelement
document.getElementById
document.getElementByName
document.appendChild
```



### null，undefined的区别

null表示空对象引用，转换为数值时为0。

undefined表示声明的变量未初始化，转换为数值时为NAN。

typeof(null) -- object;

typeof(undefined) -- undefined



### 数组原生方法

**可改变原来的值**

pop、push、shift、unshift、splice、reverse、sort

**不可改变原来的值**

concat、join、slice、toString、indexOf、lastIndexOf、reduce、forEach、map、filter、every、some



### 什么是渐进式升级和优雅降级

渐进增强：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进，达到更好的用户体验。

优雅降级：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。



### 什么是 DOM 和 BOM？

DOM 指的是文档对象模型，它指的是把文档当做一个对象来对待，这个对象主要定义了处理网页内容的方法和接口

BOM 指的是浏览器对象模型，它指的是把浏览器当做一个对象来对待，这个对象主要定义了与浏览器进行交互的方法和接口

并且 DOM 的最根本的对象 document 对象也是 BOM 的 window 对象的子对象。



### JavaScript 中有哪些类型的弹出框？

- window.alert
- window.confirm
- window.prompt



### JavaScript 是静态类型语言还是动态类型语言？这是什么意思

JavaScript 是动态类型的，这意味着在运行时检查类型

在静态类型语言中，在编译时检查类型



### 什么是幽灵节点

在HTML5文档声明中,内联元素的所有解析和渲染如同每个行框盒子前面有一个空白的节点,这个空白节点不占据任何宽度、也没有办法通过脚本获得,

**幽灵空白节点**就是行内块元素，行内块元素会默认是基线对齐方式，所以距离底线会有3-5px的间隙，这个间隙问题就叫幽灵空白节点。



### 函数的柯里化

将一个多参数的函数转化为多个函数，

使其可以任意组成、参数复用、提前返回和延迟执行

在不改变原函数的前提下，为函数预置通用参数，供多次重复调用。



### 如何获取JS准确类型？typeof有什么缺陷？

Object.prototype.toString.call([null])  =>[object Null]

typeof只能获取值类型



### 事件轮询

​	EventLoop是js引擎的一个运行机制，主要描述的是，当程序执行到异步任务时，会将异步任务划分为宏任务和微任务并且放入对应的宏任务队列和微任务队列，然后js引擎不断交替执行宏任务及其包含的微任务，以上行为被称之为事件轮询

**宏任务（线程直接分配的）**

script标签、定时器(setInterval,setTimeout)、I/O、UI rendering等

**微任务**

promise.then()、promise.catch()、promise.finally()



### JSON序列化反序列化会丢失什么？

- Symbol会丢失 
- 原型链丢失 
- undefine NAN 和Ininity丢失 
- 循环引用会丢失 
- 因为字符串序列化无法对复杂函数类型化 
- JS序列化函数内部缺陷



### TS和JS的区别

TypeScript（TS）和JavaScript（JS）之间有几个主要区别：

1. 类型系统：最显著的区别是TypeScript具有静态类型系统，而JavaScript是一种动态类型语言。在TypeScript中，可以声明变量的类型，并在编译时进行类型检查，以捕获潜在的类型错误。这有助于提高代码的可靠性和可维护性。
2. 类和接口：TypeScript支持类和接口的概念，可以进行面向对象编程。它提供了类和接口的语法，使得代码的组织和复用更加方便。JavaScript也可以实现类似的功能，但它的语法和机制不如TypeScript清晰和严格。
3. 编译：JavaScript是一种解释执行的语言，而TypeScript需要先将其转换为JavaScript，然后在浏览器或Node.js环境中执行。这意味着在使用TypeScript时需要进行编译步骤，将TypeScript代码转换为JavaScript代码。TypeScript的编译过程可以提供更多的检查和优化。
4. 生态系统和库支持：JavaScript是一种广泛使用的语言，有着庞大的生态系统和丰富的库支持。TypeScript是建立在JavaScript之上的，可以直接使用JavaScript的库和工具。此外，TypeScript还提供了自己的类型定义文件（.d.ts），用于描述JavaScript库的类型信息，提供更好的开发体验和工具支持。

总的来说，TypeScript是JavaScript的超集，它添加了静态类型系统和其他一些特性，以提供更好的开发体验和代码质量。如果你希望在开发过程中获得更强大的类型检查和更好的代码组织能力，以及更好地与大型项目和团队合作，那么TypeScript可能是一个很好的选择。但如果你对动态类型和灵活性更感兴趣，或者在小型项目中更喜欢快速迭代和开发的速度，那么JavaScript可能更适合你。



### promise 和 async await的区别

1. 语法风格：Promise 是基于回调函数的异步编程模式，使用链式调用的方式处理异步操作。而 async/await 则是基于 Promise 的语法糖，使用类似同步代码的方式编写异步操作。
2. 错误处理：在 Promise 中，错误处理通过 `then` 方法的第二个回调函数或 `catch` 方法来处理。而在 async/await 中，可以使用 `try/catch` 块来捕获和处理错误。





### Js定时器计时不准

**原因：**

- js是单线程的，可能会因为一些阻塞操作和网络加载的原因导致计时器不准
- 其次浏览器的时间最小精度也会有影响
- 或者是因为资源调度，操作系统会对定时器有所控制

**解决方法:**

```js
// performance.now 比 Date.now 更精确
let startTime = performance.now();
// count表示定时器被调用的次数，次数需要是全局变量
let count = 0
function myTimeout(){
    let runTime = performance.now();
    // 先增加次数
    ++count;
    // diffTime 就是已经延后的时间
    let diffTime = (runTime - (startTime + count * 1000));
    // 既然已经延后了，就需要时间间隔，减去已经拖延的时间，提前开始
    setTimeout(myTimeout, 1000 - diffTime);
}
let t = setTimeout(myTimeout , 1000);
```



### import 和 require 的区别

- import是ES6新增的官方提供的模块化方案，require是commonjs社区中的模块化方案
- import可以导入整个模块（变量、函数和类），require只能导入模块中的变量、函数和默认导出
- import可以按需加载，require是同步导入



### JS中什么是执行上下文

执行上下文（Execution Context）是 JavaScript 中一个重要的概念，它描述了在 JavaScript 代码执行时的环境。在执行任何 JavaScript 代码之前，JavaScript 引擎都会先创建一个全局执行上下文，然后在运行时动态创建其他执行上下文。

每当 JavaScript 代码开始执行一个函数，都会创建一个新的执行上下文。执行上下文包含了以下信息：

- 变量对象（Variable Object）：包含了函数内部定义的所有变量和函数声明。对于全局执行上下文来说，变量对象就是全局对象。
- 作用域链（Scope Chain）：描述了函数嵌套关系，保证了变量和函数的有序访问。
- this 值：描述了当前函数执行时的上下文对象。

在代码执行过程中，JavaScript 引擎会根据当前执行上下文的作用域链来查找变量和函数，如果在当前执行上下文中找不到，就会一层一层地向上查找，直到找到为止。这个查找的过程就是作用域链查找。

执行上下文可以分为三种类型：

1. 全局执行上下文：在整个页面生命周期中只有一个全局执行上下文，它在页面刚刚加载时被创建，并在页面关闭时被销毁。
2. 函数执行上下文：每当执行一个函数时，都会创建一个新的函数执行上下文。
3. eval 执行上下文：在 eval 函数中执行的代码也会创建一个执行上下文。

在 JavaScript 中，执行上下文是一个栈结构，被称为执行栈（Execution Stack）或调用栈（Call Stack）。每当一个新的执行上下文被创建时，它会被压入执行栈的顶部。当执行完一个函数后，它对应的执行上下文就会被弹出执行栈，执行回到调用它的上一个执行上下文。

JavaScript 引擎在执行 JavaScript 代码时，会根据执行上下文的创建、入栈、执行、出栈等过程，来控制代码的执行顺序和内存的管理。在执行代码时，JavaScript 引擎会将当前执行上下文的变量和函数存储在栈内存中，当执行上下文被弹出栈时，这些变量和函数也会被销毁。这种机制称为“栈内存管理”。

JavaScript 中，执行上下文的创建和销毁是由 JavaScript 引擎自动完成的，但是我们可以通过代码中的函数调用、变量声明等方式，来影响执行上下文的创建和作用域链的构建。例如：

```js
javascriptCopy codefunction foo() {
  var a = 1;
  function bar() {
    var b = 2;
    console.log(a + b);
  }
  bar();
}
foo();
```

在上面的代码中，当执行 `foo` 函数时，会创建一个新的函数执行上下文，其中包含了变量 `a` 和函数 `bar` 的引用。在 `bar` 函数内部执行时，会创建一个新的函数执行上下文，其中包含了变量 `b` 和 `console.log` 函数的引用。在函数执行结束时，`bar` 函数的执行上下文会被销毁，其中的变量和函数也会被销毁。接着，`foo` 函数的执行上下文也会被销毁，整个执行过程就结束了。

总之，执行上下文是 JavaScript 中一个重要的概念，它描述了在 JavaScript 代码执行时的环境。了解执行上下文的创建、作用域链和内存管理等过程，有助于我们更好地理解和掌握 JavaScript 语言。



### js中for循环 for in循环 for of循环  forEach循环各有什么区别

JavaScript 中有多种循环语句可供选择，以下是它们的主要区别：

1. `for` 循环：`for` 循环是最常见的循环语句之一，它允许你以指定的方式迭代一个代码块一定的次数。你可以使用 `for` 循环来迭代一个数组、字符串或类似数组的对象，也可以使用它来执行任意数量的代码块。
2. `for-in` 循环：`for-in` 循环允许你枚举一个对象的所有可枚举属性（**`enumerable`：true**）。它会将对象的每个属性名称作为迭代变量，并执行迭代块中的代码。需要注意的是，`for-in` 循环不保证对象属性的顺序，也会迭代到从原型链继承的属性。
3. `for-of` 循环：`for-of` 循环是 ECMAScript 6 中引入的一种新的循环语句，它允许你遍历可迭代对象的元素。它支持迭代数组、字符串、Map、Set 等内置的可迭代对象，以及使用迭代器的任何对象。与 `for-in` 循环不同，`for-of` 循环只迭代对象自己的属性，而不是从原型链继承的属性。
4. `forEach` 循环：`forEach` 是一个数组的方法，它允许你迭代数组的每个元素并执行一个回调函数。与 `for` 循环和 `for-of` 循环不同，`forEach` 循环不支持 `break` 和 `continue` 语句。此外，它也不返回任何值，而只是执行回调函数。

需要注意的是，`for` 循环、`for-in` 循环、`for-of` 循环和 `forEach` 循环都有不同的使用场景和优缺点。在选择循环语句时，应该根据具体情况来选择最合适的循环方式。



### JS的模块化

#### 什么是模块化

​	将一个复杂的程序依照一定的规则封装成多个文件(模块) 并进行组合在一起。每个模块的内部数据是私有的, 只是向外部暴露一些接口(方法)与外部通信。

#### 优点

- 避免命名空间冲突（命名空间(namespace)是将一组变量、函数、对象封装在一个空间的行为）
- 实现更好的分离，实现按需加载
- 提高代码的复用性、可维护性

#### 模块化的规范

##### ES6的模块化

ES6新增的模块化规范

使用export导出，import导入

##### CommonJs

是nodejs中使用到的模块化规范

module.export导出，require导入

##### AMD（Asynchronous Module Definition）

提倡依赖前置，定义时就需要声明其他依赖的模块

##### CMD（Common Module Definition）

提倡就近依赖（按需加载），需要某个模块时再require加载



### hash路由和history路由的区别

- 显示格式方面
  - hash路由包含#符号，后面跟着的是hash值，相对的形式没有那么美观
  - history路由是以/分割路径
- 实现原理：
  - hash路由是通过监听hashchange事件的触发来实现的
  - history路由是通过HTML5中新增的History API，History API 提供了两个函数：pushState()和replaceState()，它们可以在当前历史记录中添加或修改一个状态，从而改变URL地址，但不会导致页面的重新加载。通过监听popstate事件，可以实现页面的跳转。
- 兼容性：
  - hash路由兼容性好，兼容所有浏览器
  - history路由是通过html5新增的api实现的，所以兼容性不如hash路由



### Sass和Less

Sass和Less都是预处理器，用于扩展CSS的功能和提高CSS的可维护性。

#### 不同

**运行环境**

- Less在JS上运行
- Sass在Ruby上使用

**编写变量的方式**

- Less使用@
- Sass使用$

**处理机制**

- Less是通过客户端处理的，
- Sass是通过服务端处理，相比较之下解析会更快

**语句的支持**

- Sass支持条件语句，循环语句
- Less不支持

**输出格式不同**

- Sass可以使用特定的输出格式
  - nested：嵌套缩进的css代码
  - expanded：展开的多行css代码
  - compact：简洁格式的css代码
  - compressed：压缩后的css代码

- Less无特殊输出格式

**混入不同  Mixins**

- 

#### 相同

Less和Sass在语法上有些共性，比如下面这些：

1. 混入(Mixins)——class中的class；
2. 参数混入——可以传递参数的class，就像函数一样；
3. 嵌套规则——Class中嵌套class，从而减少重复的代码；
4. 运算——CSS中用上数学；
5. 颜色功能——可以编辑颜色；
6. 名字空间(namespace)——分组样式，从而可以被调用；
7. 作用域——局部修改样式；
8. JavaScript 赋值——在CSS中使用JavaScript表达式赋值。



### js中class类和构造函数的区别

- class采用的是严格模式
- class没有变量提升
- 如果是类的方法,那只能用new,没有new的话报错
- class内部定义的方法是不可枚举的，但通过构造函数定义的方法是可枚举的。



### 什么是纯函数

就是**一个函数的返回结果只依赖于它的参数，不依赖外部的任何变量**，我们就把这个函数叫做纯函数。

比如js内置对象Math的静态方法Math.max(a,...b)

```js
// 不是纯函数，依赖了外部变量a
var a = 1
function add(b) { return a+b }
add(1) // 2
 
// 是纯函数
function add(a, b) { return a+b }
add(1, 2) // 3
```

**优点**

- 无副作用

> 在执行过程中没有副作用,不会对系统造成其他的影响

- 可复用性

>  纯函数仅依赖于传入的参数，这意味着你可以随意将这个函数移植到别的代码中，只需要提供它需要的参数即可

- 可测试性

> 更容易进行测试，结果只依赖输入，测试时可以确保输出稳定

- 并行代码

> 纯函数是健壮的，改变执行次序不会对系统造成影响，因此纯函数的操作可以并行执行。



### 什么是作用域，作用域链

​	作用域是指在程序中定义变量的区域，它规定了变量的可访问性和生命周期。在JavaScript中，作用域分为全局作用域和局部作用域。全局作用域中定义的变量可以被程序的任何部分访问，而局部作用域中定义的变量只能在定义它的代码块中访问。

​	作用域链是指在当前作用域中无法找到一个变量时，引擎会自动查找外层作用域的变量，直到找到为止。这个过程形成了一个作用域链，它包含了当前作用域和所有外层作用域中的变量对象。当变量在作用域链中被找到时，它就可以被访问了。如果在作用域链的最顶层（也就是全局作用域）中仍然找不到变量，就会报错。**作用域链的构建是在函数定义时确定的**，而不是函数调用时。