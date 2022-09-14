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
    "revision": "6841ebb1ed42fd9e36cac3adb6617993"
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
    "url": "assets/js/12.d5a12f0a.js",
    "revision": "7b4b907e345dc71bde5f89b6c8abc8a9"
  },
  {
    "url": "assets/js/13.b80a4af1.js",
    "revision": "a5b647e7d8071aedbc96b9881f882c2a"
  },
  {
    "url": "assets/js/14.5f924852.js",
    "revision": "edddc78d86dcaef751018ef08cda00c4"
  },
  {
    "url": "assets/js/15.e8669f07.js",
    "revision": "42e67a60f2cbd72426f24a5cbb374311"
  },
  {
    "url": "assets/js/16.68e9bb4b.js",
    "revision": "67fedde0bd35a92b05060a60f710c736"
  },
  {
    "url": "assets/js/17.81826f14.js",
    "revision": "3ccb10a92edd069925666d9133873238"
  },
  {
    "url": "assets/js/18.5ac236ed.js",
    "revision": "6ebf26e8a597d729a1f560a4bfc03fc9"
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
    "url": "assets/js/app.9e8183cf.js",
    "revision": "82ee76a11c6b3d101ad87c8b8bbb995e"
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
    "revision": "4b35ac0a3478a71bb48900119982eaca"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e3e1d13f472960b9dd500b10806bacd9"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "1ffb284d191291d7b44a66e2e950c28d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c9d0f147a44ac216fe0dbfb162439368"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "3716ad9af3137698980db730cc221f7c"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "dca1040a0c898cfbe5dcf69453749337"
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
    "revision": "cf185ae67b482c269c6821d237d3ad66"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "92b748d8d71ae0373cb93df093c9e251"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "3ff19434cdffc91d77311d974b44c4e0"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5da5a41c832fca19c51014f697a2a8c1"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f5bf1a1efa7e062a97cd5e5055c376bc"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "d8fec92bc7e884eb093c512fe93802f7"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "907bbe698d45d3c61ceeea621f090911"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "7b1e0ac4852b4636406002728ace0e54"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "eb838a2c0126729241c3debce0387a70"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "acc6e30103c159fadeb36708821b9276"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b9b19514bc75e82d2d859609945fa103"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "caea3d4beb959d3371b803fa3e83621b"
  },
  {
    "url": "timeline/index.html",
    "revision": "3e20dd934c6905c979e3c0cc9fa6a33c"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c742b9d49d5b9428e467037c490acaf9"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "438055d0b80931c50e6b06c99653e5f1"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "a6cf0cb71854a702d687addd3840cf5c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "cf5a7ad91484a59732a19d38c6333cfd"
  },
  {
    "url": "生活分享/life.html",
    "revision": "4432158a04b3fcf3cfd6fa71dd93b942"
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
