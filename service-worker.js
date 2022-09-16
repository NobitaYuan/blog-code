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
    "revision": "d10d04390a581c9c36e7ac0afb91bace"
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
    "url": "assets/js/1.8a382134.js",
    "revision": "3e021cc44ec5f35c334cd5211e276768"
  },
  {
    "url": "assets/js/10.08123182.js",
    "revision": "7a260de4131af87477b7e69a79e9d546"
  },
  {
    "url": "assets/js/11.33b30a0f.js",
    "revision": "c5d77b4e9dae057a61844604f8208efa"
  },
  {
    "url": "assets/js/12.cdb02049.js",
    "revision": "074283944f053f8291a942250af215e6"
  },
  {
    "url": "assets/js/13.bff2f6f1.js",
    "revision": "aba9309664b6053e8ecd2cf4bab11534"
  },
  {
    "url": "assets/js/14.9f14b477.js",
    "revision": "152a223f78b7a18008ec9c59d48b03c7"
  },
  {
    "url": "assets/js/15.77de905e.js",
    "revision": "8c4c2b7e9bae806d9c00eff9c48e5afc"
  },
  {
    "url": "assets/js/16.5a75a2c3.js",
    "revision": "3042d1bb776ed10563893caa0a91795b"
  },
  {
    "url": "assets/js/17.c0df461b.js",
    "revision": "02b1878b88ba2c8519f7645e96d736e9"
  },
  {
    "url": "assets/js/18.517c2679.js",
    "revision": "9e728b0d388e8e20cc656338d5db2c01"
  },
  {
    "url": "assets/js/19.c96ebb92.js",
    "revision": "8dde9863221ff43afd051d264cbf7128"
  },
  {
    "url": "assets/js/20.88a4da98.js",
    "revision": "2eea2a06e10b47d1a66b268b99084b75"
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
    "url": "assets/js/app.1bff0660.js",
    "revision": "5230f7419b36cd0e6e574b53395432b7"
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
    "revision": "ec390bebfac0451fdda96d25e14e74c0"
  },
  {
    "url": "categories/java/index.html",
    "revision": "4169e267224a23973e3fb92eb429b7b3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e4fdcdbc1967c3e0929e03f4f6d46c3d"
  },
  {
    "url": "categories/前端基础/index.html",
    "revision": "43bf83d34582e0b0ba0e8ed24b2f9fe9"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "9561060678c26eec0c1771da2d8ac6b6"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "93b5943434b8ce3af3d8226615917785"
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
    "revision": "8065a37a63fb9804ee995faa541b385d"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "d2744a88a15a3d76ee2bab13fd5001aa"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "8f83882646b8d87767ee0eddfee23fee"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f8c597bd17823393406b383d295cc033"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "45673fb446e5a4616c3add354614ca92"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "bea5f3ec0fd59b416fee4118af391430"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "0c3d4d49f9b58bcbe2699a619b444aab"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "bcdba67f9852163543e699d258c61280"
  },
  {
    "url": "tags/前端基础/index.html",
    "revision": "93ca07034ac9487949aa92bcfcf6445a"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "1a598be0fd413fcd2be01ba59e533dd4"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "600c271c32426e654d2d86b7f4517d4f"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "6404bad133c0fbd9cc9fe8a26e150222"
  },
  {
    "url": "timeline/index.html",
    "revision": "a920e741c60f3a95372212bddabc72c4"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "30773b4c8e667bd5c975d475854ef10f"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "2e06e9655bd406a50ef2e050cc486053"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "ac4f0fb2b278162a96ec1768c44f2d7d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ef00f831f25229a708057f2732fe007f"
  },
  {
    "url": "技术文章/vue/vue2笔记.html",
    "revision": "b6c58614bf5cc31be57390dedbed809a"
  },
  {
    "url": "技术文章/vue/vue3快速上手.html",
    "revision": "60bb1f1fdb93ab87119f6f63ea2d374a"
  },
  {
    "url": "生活分享/life.html",
    "revision": "3731e912c943f5c3a035993fae6b7591"
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
