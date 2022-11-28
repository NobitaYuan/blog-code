/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b68cb9048b978104e464dba3b04c379e"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.2a17ad2e.js",
    "revision": "f88db81f1490c1bf9cb1954ef5a22916"
  },
  {
    "url": "assets/js/10.d10610c8.js",
    "revision": "836497a38a27bf5db1a48f30041fe407"
  },
  {
    "url": "assets/js/11.1bbadafe.js",
    "revision": "da118ab3bec3991fcb1dd3cfea7427ca"
  },
  {
    "url": "assets/js/12.fced2c12.js",
    "revision": "ab3dbdd7e83c1fc6c1b08e9255d2c46c"
  },
  {
    "url": "assets/js/13.bff2f6f1.js",
    "revision": "aba9309664b6053e8ecd2cf4bab11534"
  },
  {
    "url": "assets/js/14.94bc093b.js",
    "revision": "03cbaa0f2eec885b62da0e6369ef1c1e"
  },
  {
    "url": "assets/js/15.0e501275.js",
    "revision": "d2937122d38a82eeed8596844fbd7c89"
  },
  {
    "url": "assets/js/16.cb635334.js",
    "revision": "8f072668a6085a8dd142810cf7b257e7"
  },
  {
    "url": "assets/js/17.63b1ef99.js",
    "revision": "b041c91b6ddcd49caaa00599a5f724d4"
  },
  {
    "url": "assets/js/18.f4bee469.js",
    "revision": "400d73cb85969378ab818561d3d262e0"
  },
  {
    "url": "assets/js/19.21ecfb36.js",
    "revision": "debf6515c1a8ba454316860fd99e18a2"
  },
  {
    "url": "assets/js/20.0f7d256a.js",
    "revision": "bf0f3197e5b7785c1a11e07ceaebe66e"
  },
  {
    "url": "assets/js/21.d12f42e5.js",
    "revision": "4ef21b83e7bdf6f26df0c0f0f48eab7e"
  },
  {
    "url": "assets/js/22.58377c64.js",
    "revision": "d22f2ffb6ded4ea053cfd8b5689ac110"
  },
  {
    "url": "assets/js/4.faae41d8.js",
    "revision": "714e7b36b9de66e33e53bb396952ec30"
  },
  {
    "url": "assets/js/5.dff6cf6c.js",
    "revision": "ad141846ac747e392ac487061e559e54"
  },
  {
    "url": "assets/js/6.56702ed7.js",
    "revision": "623c54afc9eff21ae031ab083e773696"
  },
  {
    "url": "assets/js/7.c2dba610.js",
    "revision": "06c765ef2e159c5d46c3c69fb567d25b"
  },
  {
    "url": "assets/js/8.a817e610.js",
    "revision": "0c18dfa311029dba46636e491351d623"
  },
  {
    "url": "assets/js/9.27ba5421.js",
    "revision": "13009a376267a8c404b4d2dee252e1fd"
  },
  {
    "url": "assets/js/app.7c2e922b.js",
    "revision": "82f70a38499a2d42d97e7eab9fd5b1e6"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "946aa4d0500b410ca308efa6843ff02c"
  },
  {
    "url": "categories/java/index.html",
    "revision": "76faf8d3e032111852db31c0054b32f8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a59832e5bc1ec41a44c842c83f2ae866"
  },
  {
    "url": "categories/前端基础/index.html",
    "revision": "d4a156bebca2522cb4817de8850141b9"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "65f41da4f7febf79764f0d59bc96ef81"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "85a7f58e582501beb9b912d1642b6e48"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "5333f947f689db477975a3a8357a674d"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "2f80cdef2db20b92775443ceb628977f"
  },
  {
    "url": "tags/html/index.html",
    "revision": "b5ce0a3423107b48ca6f7a0c7e6a666d"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "5e749884172c428a2191427a76ace579"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "3faaef075bf8cdbb0ff79335837bb4ae"
  },
  {
    "url": "tags/js/index.html",
    "revision": "5f9d63b9c705e14d9a7fd78082bf22b3"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "c59b5f34029d221776b8c39820486bc9"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "ba7a0862330e6f69c1056c17bdc3f501"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "be853fc196fae03674745fee6a8bc889"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "5093045f8cfef7f92e2f7ac7fa1ad278"
  },
  {
    "url": "tags/前端基础/index.html",
    "revision": "972994f85492d302cf2d7e99ad656e35"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "70e6e1f325160acb3f35a66da730ea17"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "44d5e330dee29ab5ed7212f10309b3b6"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "521843186bf79c9bca01321848b8eac8"
  },
  {
    "url": "timeline/index.html",
    "revision": "505e74e8664ed91158674ab468e8c819"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/html基础/1.html",
    "revision": "216a5ba35fa7272e065ca5dc0c55bb23"
  },
  {
    "url": "技术文章/html基础/2.html",
    "revision": "ed185390c1d0d980cee62fc48cc0065d"
  },
  {
    "url": "技术文章/index.html",
    "revision": "b88c30118378107b2ade2f3645d99d54"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "0393a33d76db536dfbb5379cd9f5b6c0"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "1503937716e06c702fbfb2209948452c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "1fd4cf47622436e34cba890aa177efe4"
  },
  {
    "url": "技术文章/vue/vue2笔记.html",
    "revision": "aa08d14e02d96c78e8687423d31ad1a1"
  },
  {
    "url": "技术文章/vue/vue3快速上手.html",
    "revision": "705bd042110accd1064c7968a6fc50b1"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b67a997c70cde913ea8f06d0affe5660"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
