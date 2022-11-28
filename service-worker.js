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
    "revision": "8c974c98200fab9370e72b6486317a03"
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
    "url": "assets/js/11.26af6328.js",
    "revision": "63dc50f80e888910cbb4825f42facb73"
  },
  {
    "url": "assets/js/12.5736b487.js",
    "revision": "65db252300cac7a727a377026237e900"
  },
  {
    "url": "assets/js/13.a8e46ba5.js",
    "revision": "c2cadb81468b715b6f57b253d8e5f378"
  },
  {
    "url": "assets/js/14.fdc441ec.js",
    "revision": "7b382a5036090ca56dce261a626b1b25"
  },
  {
    "url": "assets/js/15.0e501275.js",
    "revision": "d2937122d38a82eeed8596844fbd7c89"
  },
  {
    "url": "assets/js/16.096f40da.js",
    "revision": "3dbe29dfadb7329da4c65c4a4bab8fbf"
  },
  {
    "url": "assets/js/17.5067e01d.js",
    "revision": "e7ada90aa76abc66334c6ebf809eca59"
  },
  {
    "url": "assets/js/18.cfb633b3.js",
    "revision": "53e0190b74d047dc4ec34549591a818c"
  },
  {
    "url": "assets/js/19.4c47b74c.js",
    "revision": "c9030444113d900abb67497a5649eee7"
  },
  {
    "url": "assets/js/20.8258838c.js",
    "revision": "6ab756df2ce2df5457511b2877f27d98"
  },
  {
    "url": "assets/js/21.5e214420.js",
    "revision": "1284d3c23fe0e3d7e7e09f740c897f87"
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
    "url": "assets/js/app.73467eb6.js",
    "revision": "d972396d305245b296108c8bd89552aa"
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
    "revision": "5cb96c0f6cfe724f62ac585c3d6cfcee"
  },
  {
    "url": "categories/java/index.html",
    "revision": "bd09b2bcd3ca72f0c9b6f3c6ae7ff3a5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "29ac9f106e6aba01d1ffed9c3282a958"
  },
  {
    "url": "categories/前端基础/index.html",
    "revision": "853da0688d4046863ed0b8b97e60f2f8"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "55be09a210698349ca2b2e6448a1bdc5"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "51d4ed34f2f5b408c095dff058b7e8e8"
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
    "revision": "737fc453ffa83f196834c00bf6400077"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "2e8c1b484d856d304bcab0b8cff1e90f"
  },
  {
    "url": "tags/html/index.html",
    "revision": "c84e7b285cc0597fb316706d2edcad84"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "45469da7b641bc1ba70caa7c21f2ed9a"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "6621196492522ba1fb0f3d15697a9d57"
  },
  {
    "url": "tags/js/index.html",
    "revision": "16d67ec9476e5b30f5e598f87065f3c1"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "594badf137464be0a6bcd169f3eb0aeb"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "403044292283cfaf87c5712292699d3e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "bcb3c56cad33fc2116f2915835cbf902"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "a7b47579598a78f4ca828b5debfead34"
  },
  {
    "url": "tags/前端基础/index.html",
    "revision": "0d8c3e920b7ea354503a169f4068f0cc"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "826aadfbeda303db2dc273cfa8401ab1"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "5ea67a2a4cad79596372992e967b6443"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "3e06b94d5d01622c60dfe06769c1dafe"
  },
  {
    "url": "timeline/index.html",
    "revision": "d3815391950f7a23f28c5181ec3afe63"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/html/1.html",
    "revision": "fefe42435b3f6d97c9a35ec44f454788"
  },
  {
    "url": "技术文章/index.html",
    "revision": "33d9bc4d0d35c632f9efe7117f7fc30c"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "350a75b4078b837d5ccc332041d533be"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "9bdd7e76050ca7b87fd62a789f376af6"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e5be0d1a3aa1d9bb3b7d1e2c034ae57b"
  },
  {
    "url": "技术文章/vue/vue2笔记.html",
    "revision": "680f06c8528d447e4f97a2db6cf81b5b"
  },
  {
    "url": "技术文章/vue/vue3快速上手.html",
    "revision": "132d463732bfc0c44bff576087f9c97b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "2a5c3f233757b943a9c3075bc997b6b4"
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
