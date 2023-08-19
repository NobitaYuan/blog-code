---
title: Express
date: 2023-6-6
categories: 
- 后端
- Express
tags: 
- 后端
- Node
- express
description: 'Express知识点'
---

# express

### 概述

基于 [Node.js](https://nodejs.org/en/) 平台，快速、开放、极简的 Web 开发框架

### express入门

```js
// 导入express
const express = require('express')

// 导出的核心方法就是创建应用的方法 createApplication
// 所以直接作为函数调用即可
const app = express()

// 第一个为路由地址，第二个为处理函数,处理函数中第一个为请求对象，第二个为响应对象，第三next
app.get('/user',(req,res,next)=>{
    // 设置响应头
    res.setHeader('Content-type','text/html;charset=utf-8')
    res.write('hello world!中文')
    res.end('end')
})
app.listen(8888,()=>{
    console.log('server is running at localhost:8888');
})
```

#### 静态方法

![image-20230323105317858](../../images/image-20230323105317858.png)

- express.static() 托管静态资源
- express.json() 读取content-type为JSON 的body里的内容
- express.Router() 产生一个路由对象
- express.urlencode() 读取content-type 为x-www-from-urlencode 借助了第三方包body-parse

##### 属性

- locals 本地路径
- mountpath 挂载路径
- router 路由对象

##### 方法

![image-20230323105258568](../../images/image-20230323105258568.png)

- all 处理所有请求
- delete 
- get
- post
- put
- use 使用中间件
- engine 模板引擎开启
- get 获取配置
- set 设置配置
- listen 监听
- disable 禁用某个配置
- enable 开启某个配置
- render 服务器渲染

- route 进行路由配置
- path 路径配置
- params 参数

```js
const express = require('express')
const app = express()
// 请求处理
// 可以利用all进行拦截
app.all('/', (req, res, next) => {
    next()
    console.log('进入了all');
    // res.end('all/')
})


app.get('/', (req, res, next) => {
    res.end('get/')
})

app.post('/', (req, res, next) => {
    res.end('post/')
})

app.delete('/', (req, res, next) => {
    res.end('delete/')
})

app.put('/', (req, res, next) => {
    res.end('put/')
})

let router = express.Router()

router.get('/user',(req,res)=>{
    res.end('eat!')
})

app.use(router)

app.listen(8888, () => {
    console.log('server is running at localhost:8888');
})
```

#### 回调函数中的requset对象

![image-20230323111226184](../../images/image-20230323111226184.png)

##### 属性

- query 获取get请求传递的参数(?后面的)

- params 获取path路径后携带的参数（配合路径地址使用）
- body 获取请求体（post的数据存于请求体）

- app 获取应用对象

- baseUrl 获取请求体的baseUrl

- cookies 获取携带的cookies

- ip  获取ip地址

- host 获取host主机

- hostname 获取主机名

- method 请求的类型

- originalUrl 跨域地址

- path 路径

- protocol 协议

- secure 判断是否为https

- header 获取请求头内容

  ...

##### 方法

- 获取请求相关内容

  ...

#### 回调函数中的respose对象

![image-20230323112123661](../../images/image-20230323112123661.png)

##### 属性

- app 获取应用对象
- headerSent 响应头相关
- locals 本地地址

##### 方法

- append 追加内容发送
- attchment 下载的相关设置
- cookie 设置响应头的cookie
- clearCookies 清空cookies
- download 下载
- end 结束当前响应
- format 格式化
- get 获取相关内容
- jsonp 接口
- send 发送数据（自动end 自动将发送的对象序列化，可直接发送对象）
- json 发送json数据（自动end 自动将发送的对象序列化，可直接发送对象）
- status 设置对应的状态码
- render 服务器渲染核心 （结合模板引擎进行渲染）
- redirect 重定向

#### Router

![image-20230323113033992](../../images/image-20230323113033992.png)

##### 方法

- all
- post
- get
- delete
- put
- all
- use
- rouete
- param

##### 利用route对象来进行分离

### 服务器渲染

第三方模板引擎

- art-template
- express-art-template
- jade
- ejs