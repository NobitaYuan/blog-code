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
    "revision": "678c43897d98a366f4fe721d568658b4"
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
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.96939e98.js",
    "revision": "087388776d721e414f81616e1d18a6ac"
  },
  {
    "url": "assets/js/15.e5554f2d.js",
    "revision": "d2993fc9923278e52739f9b696cc9cef"
  },
  {
    "url": "assets/js/16.fc67d057.js",
    "revision": "7bed02765cf9056e995bf32ff82bb3e1"
  },
  {
    "url": "assets/js/17.0c8ba930.js",
    "revision": "f3b3829f30862a26a1165dfbe885459c"
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
    "url": "assets/js/app.802dad53.js",
    "revision": "338208af483e663ca1487c543a084a08"
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
    "revision": "efb16a92556b2b73ba43d80ddf86cbfd"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f479a44668508e2b78e86da36d15d421"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "327d8df80c1375e7dd2a5876045aa220"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e97528b246e2ce330fe363aab0de732a"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "82286034eab0126c3b358e1c2f5b51be"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "c359b72157aa6b9a33353793ecb6670a"
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
    "revision": "7a00c63d5858036308f1350ce8665a93"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "8d0e7d2af67550dc314f82fe58b70701"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "c1ab05a47fb68fbff84846c1bf2c2acb"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "d9016c24f8751ebcc7010daf681928ce"
  },
  {
    "url": "tags/js/index.html",
    "revision": "6ad87026eda70e95719722aa81eeb88e"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "d3e443869aa7d4cba48eaf3fd74e6b12"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "b7683cfd57dd36de4f8aa440124f9f82"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b0300e2e900aa5ac91901e899880043d"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "588c719344b64964215bb57e1515c52e"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "64926d0e9f91bbd61e37aee846397c27"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f29d0e5cbbacc94e37b67be08d343245"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "f4c2c8bf709a3be574c3dba1f05872a1"
  },
  {
    "url": "timeline/index.html",
    "revision": "dbee5c10c989593254591afe13539bbb"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "da6f522774a7694037e67f3cb6f1d5f0"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "5f6b5a4a850d890295acd11bd0487534"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "42d39916e01b784f23e00e0ab5f1c317"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "9e07cc91a2ab87f8bb715218bdb7cd78"
  },
  {
    "url": "生活分享/life.html",
    "revision": "fe7fbc4811996dc7f7b638acfb527083"
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
