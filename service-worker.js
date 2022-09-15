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
    "revision": "05302c608216ab79a11d2156e8cf5bdf"
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
    "url": "assets/js/12.d51a1ec3.js",
    "revision": "a2bdb91c11af017fb12105fb454b1604"
  },
  {
    "url": "assets/js/13.2c2ad42e.js",
    "revision": "d8d8978ede3abd0bff2b7651d48be62e"
  },
  {
    "url": "assets/js/14.7e8139a0.js",
    "revision": "b6969040e4a0d641ea25cf97fe9bc65b"
  },
  {
    "url": "assets/js/15.77de905e.js",
    "revision": "8c4c2b7e9bae806d9c00eff9c48e5afc"
  },
  {
    "url": "assets/js/16.4d06914a.js",
    "revision": "8056646623d0193ca2131bfbdffe5743"
  },
  {
    "url": "assets/js/17.a79cbd9a.js",
    "revision": "b1edbd4a721cb542c117da7e118e02ef"
  },
  {
    "url": "assets/js/18.be7970d2.js",
    "revision": "9e728b0d388e8e20cc656338d5db2c01"
  },
  {
    "url": "assets/js/19.7944bc1a.js",
    "revision": "915ece5bf664ef47d9b3f5d653f40067"
  },
  {
    "url": "assets/js/20.6a749a5f.js",
    "revision": "f97bb5d2499b632aacd7f17838440e37"
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
    "url": "assets/js/app.771d061d.js",
    "revision": "03ac3adb144f9e4b407f955b7682be40"
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
    "revision": "8b2d8193ab14564dcc0096f7376b3c65"
  },
  {
    "url": "categories/java/index.html",
    "revision": "74aed0328a01543163dcff622a1b5932"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "1566ab54bdd19d695519ebb8a652d179"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "fd3c9b152b27b816f995d54c9e76b7b7"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "1bad0baf935ca65383042f23a7438db6"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "fbc20fc64ec434faef4e264941235657"
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
    "revision": "882ebfca860dea55fafbb1d8ca3f7696"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "0f0de762fbc8beac02d9d3503f093850"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "5f96f2e60fd90ddc0b3020c5be74050a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "e61d27627df59ff14b1e7cb0b4188c8f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "4399e51c8c85508d780d36873de20bf9"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "387a085fd9f9ceba2a94bd5c3720f457"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "f0dd1716d21596cd9880bb01308f60ea"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d244efa0b287f50574c325afd6db9099"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "626d87bedbdb22f550152346670b9b23"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "4526a79edb61b6f5a4c5afab90a59f4f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "af52041e3874ac9e208a2f4f5e04122e"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "56bb62eadc9764d3c81b249bd111c72d"
  },
  {
    "url": "timeline/index.html",
    "revision": "8ae09cd2012a080dcaff7e1e14bb90ca"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "a32ac42aca81b9e7894966a8b4e65e6b"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "96941a7fc14c6b3e87e93862046535cd"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "751d5434dc1ffd7a94805ad0eabe8c9d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "56ee539fca0b1f0edab2c21fc0011569"
  },
  {
    "url": "技术文章/vue/vue2.html",
    "revision": "e2fd41df989e7a908d17beb9d5373b9e"
  },
  {
    "url": "技术文章/vue/vue3快速上手.html",
    "revision": "804040fc79350e9a6020e4662bc37981"
  },
  {
    "url": "生活分享/life.html",
    "revision": "ad162d2531f68ba67ab4e364bff5a245"
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
