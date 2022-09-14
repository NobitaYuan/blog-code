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
    "revision": "637de867507f68ef0055444feabd91f7"
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
    "url": "assets/js/12.6b98eb08.js",
    "revision": "8e0eee022a448151912136003c905799"
  },
  {
    "url": "assets/js/13.ff8869d1.js",
    "revision": "b8934ecdfbc3eb16d6388595c0372104"
  },
  {
    "url": "assets/js/14.a4f14ad7.js",
    "revision": "414390e3837d548064f4ffd1c4809a7b"
  },
  {
    "url": "assets/js/15.54c65796.js",
    "revision": "31f6354b53226bdfec8eac4ce8fa2e15"
  },
  {
    "url": "assets/js/16.fc67d057.js",
    "revision": "7bed02765cf9056e995bf32ff82bb3e1"
  },
  {
    "url": "assets/js/17.8550f9f9.js",
    "revision": "373f14b9be1aa9a48128046bff34fae1"
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
    "url": "assets/js/app.779d77de.js",
    "revision": "14033379e53bacb1b76b061ae748c19a"
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
    "revision": "9f8eb06ad3993e16d4d9badcabb1093f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "970bf453115b0c06f8c00aa3bd659d9e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "b7557c199bacdd4f9d8088510ff2c8bf"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3110660181d621bbc9086539ed6ef388"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "5ed78813c551926fe305cf4873890bb9"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a141347afcd15a7318974177f197011f"
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
    "revision": "7de7742e6535c9cf19dcc40e9e38e451"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "a92d5ba3f61626bf59f51117e6d7ad40"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "9e2ca5c4c25fe1a108e413dc7a9a413d"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "aff35ff97d9978f8f4b2d34b1cbdbf7b"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f51b2aa23c0d299aad0e29b3e37709f0"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "2cc8b9e970935d43dc0ab91b6a9179b9"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "adad2071ff7021f5956be819737821e3"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "74df12ed880304d4420d314bdd59f774"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "37a7d43876fc7cb3cf96e35b00d3df74"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "e8ea1938cc895f34b3a2c5bc0852fc42"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "7f56bd6f7b32710a3aba496df1836a5c"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "f28bbe8fe167172e169767ea79ec6791"
  },
  {
    "url": "timeline/index.html",
    "revision": "1259a26674bfb246ef6347d61a2aecda"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "0cceaf2e8619606d1918c7162dbb547a"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "1a5b03004d07aa4065b7576d3a83f19e"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "4ba28785448837ea7d4b9b96d5c1387f"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "bf42b8f17c8c9bb945ac57822a826f99"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d6cfda4206ad3ad045f0a06c530512e1"
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
