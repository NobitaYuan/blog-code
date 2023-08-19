---
title: JWT
date: 2023-6-6
categories: 
- 前端
- JWT
tags: 
- 前端
- 后端
- Node
- express
- 鉴权
description: 'JSON WEB Token'
---


# jwt

### 概述

**JSON WEB Token**（**JWT**，读作 [/dʒɒt/]），是一种基于JSON的、用于在网络上声明某种主张的令牌（token）。JWT通常由三部分组成: 

跨域身份验证解决方案

#### JWT的组成

- Header(头）记录令牌类型、签名算法等 例如：{“alg":"HS256","type","JWT"} 
- Payload(有效载荷）携带一些用户信息 例如{"userId":"1","username":"mayikt"}
- Signature(签名）防止Token被篡改、确保安全性 例如 计算出来的签名，一个字符串

#### 实际应用时需要的数据

- 密钥 （用于加密和解密的密钥）
- 信息 （利用用户的非敏感信息，例如id来生成token）
- 时效 （token过期时间）

### express-jwt

#### 流程

- 在路由处理文件中先导入jsonwebtoken包，解构出sion和verify方法，用于生成和解密token

  ```js
  var {verify,sign} = require("jsonwebtoken");
  ```

- 先在app.js中拦截对应的需要权限的接口 放行不需要拦截的接口（登陆、注册）

  ```js
  // express-jwt中间件拦截
  // 参数1为密钥，参数2为加密方式
  app.use(jwt({secret:privateKey,algorithms:['RS256']}).unless({
    path:['/users/login','/users/register']
  }))
  ```

- 在登陆请求中，登陆成功则利用用户id等不敏感信息生成对应的token并携带响应给客户端

  ```js
  // 用户登陆操作
  router.post('/login', async function (req, res, next) {
    // 获取post请求体中的用户名和密码
    let { username, password } = req.body
    // 获取从数据库获取当前用户
    let checks = await queryUserByUser({ username })
    // 如果用户名存在
    if (checks.length) {
      // 对前端传来的密码进行加密 createHmac()方法中，第一个为算法，第二个为盐值
      password = req.body.password = createHmac('sha256', user.slat).update(password).digest('hex')
      // 从数据库返回的数组中获得当前用户
      let user = checks[0]
      // 若密码比对成功
      if (user.password == password) {
        // 生成token
        let token = sign({ id: user.id }, publicKey, {
          algorithm: 'RS256',
          expiresIn: "10h"
        })
        // 响应并携带token
        res.send(new Response({
          id: user.id,
          token
        }, 200, '登陆成功')).status(200)
      } else {//若密码比对不成功
        res.send(new Response({}, '用户名或密码错误'))
      }
    } else {//若用户不存在
      res.send(new Response({}, '用户名或密码错误'))
    }
  })
  ```

- 再次请求被拦截的接口则需要带上token

  将token存放到浏览器的本地存储中（localstorage，sessionstorage）

  ```js
  localstorage.setItem('token',token)//存到本地
  ```

  从本地获取token，放入请求头

  ```js
  req.header['Authorization'] ='Bearer '+localstorage.getItem('token')
  ```

  

#### 密钥生成

- 对称加密
- 非对称加密

**借助OpenSSL来生成密钥**

git自带openssl，只需要将user里的bin文件的路径配置到环境变量path中即可

![image-20230324212953932](../../images/image-20230324212953932.png)

![image-20230324213033554](../../images/image-20230324213033554.png)

生成私钥

```shell
openssl genrsa -out private.key
```

生成公钥

```shell
openssl rsa -in private.key -pubout -out public.key
```

