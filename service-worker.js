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
    "revision": "2822d43e6961def9abe1db21013fa705"
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
    "url": "assets/js/1.e20547d8.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.e1bab619.js",
    "revision": "0c777fe88fdd1926f6457e03ff5126c9"
  },
  {
    "url": "assets/js/13.4a3c5608.js",
    "revision": "8cb4d7fab0a33a6c8253dae1cc7522ae"
  },
  {
    "url": "assets/js/14.96939e98.js",
    "revision": "087388776d721e414f81616e1d18a6ac"
  },
  {
    "url": "assets/js/15.e8669f07.js",
    "revision": "42e67a60f2cbd72426f24a5cbb374311"
  },
  {
    "url": "assets/js/16.fc67d057.js",
    "revision": "7bed02765cf9056e995bf32ff82bb3e1"
  },
  {
    "url": "assets/js/17.287fa90a.js",
    "revision": "6bfe9f510eef6ee814bac18322a20aa7"
  },
  {
    "url": "assets/js/18.f08bf664.js",
    "revision": "826306b4983d384ba3626387a7270c4c"
  },
  {
    "url": "assets/js/4.7986c361.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.258fb405.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.ea913b7f.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.48b19737.js",
    "revision": "53f3e6677ed923b630603b9278ae416c"
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
    "revision": "4dae1ea5f47a58db4c69f9d218201e86"
  },
  {
    "url": "categories/java/index.html",
    "revision": "afc4c05883ceae0e118d0d2acdc19900"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "3ef5433bdc92ef1d2110611b169cd91e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bd820144f0a4844988a768f7fc83847b"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "ec798886799bdf1b866dae12313f18a3"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "4dcfe120d764d87ab32e77dc6319b610"
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
    "revision": "9e7a96bb32a0dbefa0b9f5310a57d2c4"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "5fd1c538988d7353c9a70d2590626123"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "1968147d17e8bb1255d74308599c6317"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5eeac9bd9e11917a88d2455383f49b03"
  },
  {
    "url": "tags/js/index.html",
    "revision": "06eec907597f2f3691f2340663b1d009"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "f675eb014f993b645115ca1b9eca7aa0"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "28de5c5939872809c221b9711dce7c8e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "38bd2c78353e1b29f49d524bb893f782"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "4076236798cfc4692b6c696757e67781"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "84817cbbdaa27c92258db497b9dfb1ab"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "3ad719f15df4b4aeb77992fe68399f50"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "40ffd216ebaa5c41eb883212ab7a2575"
  },
  {
    "url": "timeline/index.html",
    "revision": "bd6e1634953c5abad0a99c3faac52607"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "5e0812c7fd88f82dc078fb938370322f"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "57c25a2e04c3fe0830559ebc9c5647da"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "42aa591df280e1aad581e12c5b64816d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "111dc65182606a8dbfd7760d6a2cedd4"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b2d00d971d943ab91b7071bc41057bc3"
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
