const workboxVersion = "6.1.5";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
	prefix: "T blog",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"42b3bc1aefe4a0905f4187297d7d1051","url":"./2018/04/25/CSSLint-目录/index.html"},{"revision":"d90e21bd393e463c0e23582c5d9f8146","url":"./2018/04/27/JS-Array-常用方法/index.html"},{"revision":"7afdbbc273fa5f6f252bfd0593116c13","url":"./2018/06/04/VUE中的-methods-computed-watch/index.html"},{"revision":"2a570a2ee73d529327a42661f84916cc","url":"./2018/06/07/JS-网传问题回顾/index.html"},{"revision":"64bddce4555f1e0806524f19996a4b63","url":"./2018/08/01/JS-Date-总结/index.html"},{"revision":"7972174a7ab2c7b9c67ef1addfeea238","url":"./2019/11/26/推荐安装Chrome扩展程序/index.html"},{"revision":"19d16f640245d2a57695d959c553cb5f","url":"./2019/11/28/Vue与Electron成长记/index.html"},{"revision":"19866037bab3a87d1a4c93e242e5dda5","url":"./2019/12/09/nodejs-相关/index.html"},{"revision":"1c883957c963227cb2a7da769b9a1a75","url":"./2020/09/16/我的效率软件/index.html"},{"revision":"45e9ba227fb39b3d48e014a508a6903a","url":"./2021/02/18/JS图片分析开源包/index.html"},{"revision":"070efd0b94091ada8a69bdccf03ae09f","url":"./2021/03/01/微信小程序/index.html"},{"revision":"1cdc333b5183e60959b7ff27591b3368","url":"./2021/03/11/hello-world/index.html"},{"revision":"bcddc223c1767d2667aadcaf6eee57d1","url":"./2021/03/11/RN-调试/index.html"},{"revision":"3f0e92fee980802210657f91c7fd3fe1","url":"./2021/03/19/CSS-制作图形小知识/index.html"},{"revision":"1cd11972c7fcc5e244317f26db1252e7","url":"./2021/03/25/Flex-布局/index.html"},{"revision":"f9b09b3d986bb08b19980e0c850e537b","url":"./2021/04/06/买房相关/index.html"},{"revision":"40430d8fd16f86b398eecc2382fd5850","url":"./2021/04/20/如何使用WSL/index.html"},{"revision":"50e6cf9fdd1a1bfe2b3c4a860ad31204","url":"./2021/04/22/每日总结/index.html"},{"revision":"c19ae796a6a14123f8f37a52d1646956","url":"./2021/05/08/Linux常识扫盲/index.html"},{"revision":"a976ad3c95bd5da04d34048fe0f97d69","url":"./2021/07/13/编程相关概念/index.html"},{"revision":"4a7f0c02d1b5f76d939d7a6f2fc7187f","url":"./404.html"},{"revision":"e8b145798e8a62329f643833da218fc1","url":"./about/index.html"},{"revision":"80860b2caa5a6eedfee8a01a5c160b7d","url":"./archives/2018/04/index.html"},{"revision":"bcd2d3b1ca557081302cab88ab7e735b","url":"./archives/2018/06/index.html"},{"revision":"fcd59ccd809c346860c8a6a46ad75408","url":"./archives/2018/08/index.html"},{"revision":"87e44cbe0dd3799aebdf190c46a2adbd","url":"./archives/2018/index.html"},{"revision":"bf46a64be8ed3c10974d0753eb49ac46","url":"./archives/2019/11/index.html"},{"revision":"3a33cc1b7149ab5a51fdaa3b0f480afc","url":"./archives/2019/12/index.html"},{"revision":"ccd16f20999ac77e4ee97709c7698627","url":"./archives/2019/index.html"},{"revision":"f27204af2ab8373da5ba7404acf249fa","url":"./archives/2020/09/index.html"},{"revision":"e76d44c71faacd0e7c7e86f3003b5f8b","url":"./archives/2020/index.html"},{"revision":"1973e08c14dc8bf82adc7e45aada48cc","url":"./archives/2021/02/index.html"},{"revision":"d10b4b2fe24ff038b3282432642c3984","url":"./archives/2021/03/index.html"},{"revision":"25d3e40121c2e8eaa7b1395050b4a7f6","url":"./archives/2021/04/index.html"},{"revision":"3bc4c27c2cab85da72586e52612a3c06","url":"./archives/2021/05/index.html"},{"revision":"36dd4d77eba5fea2e6d0fe10e7c6a489","url":"./archives/2021/07/index.html"},{"revision":"eff584c2c9159f7a32a1415aa18432e3","url":"./archives/2021/index.html"},{"revision":"f9d686a70bd3fa0376ac81ecae32b3b8","url":"./archives/2021/page/2/index.html"},{"revision":"58a8e36559f26a0414f9cfd36aff9967","url":"./archives/index.html"},{"revision":"8f30aeebe3379afa0a53771f3b2925d1","url":"./archives/page/2/index.html"},{"revision":"7a50d21f17eca93f12d55ec10815160c","url":"./categories/index.html"},{"revision":"b0b78a3cfca038699b86534b208fbb78","url":"./categories/译文/index.html"},{"revision":"e8fe4cb1c47b16dcc2160e580ac1bb8f","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"1c7b156965588db93f5644873f8aee7f","url":"./index.html"},{"revision":"fddd31653e64e5cb8859625e4c1a08da","url":"./js/duration.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"cb7860380346f34d061bff689c5310c2","url":"./link/index.html"},{"revision":"88b7480750a490e1bd676666ab693475","url":"./page/2/index.html"},{"revision":"f651798c946af32bbba62daacc92bbab","url":"./pwa/manifest.json"},{"revision":"a9592df8ffdccc25e595fd2c53720176","url":"./tags/CSS/index.html"},{"revision":"680b46948b9f45160e6a77aa73970967","url":"./tags/index.html"},{"revision":"bd88413c5e59210311a5bd543dcea67d","url":"./tags/javascript/index.html"},{"revision":"b05c600f80080d9ccd2d2239097bd6dc","url":"./tags/react-native/index.html"},{"revision":"a20cbee766fcc2417a6d5aee0c973e90","url":"./tags/RN/index.html"},{"revision":"998fd9701afc532ede05f86a67c1f3d7","url":"./tags/vue/index.html"},{"revision":"42fa19cd0b8b5d12914ea86814997dfe","url":"./tags/目录/index.html"}], {
	directoryIndex: null,
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
	/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
	new workbox.strategies.CacheFirst({
		cacheName: "images",
		plugins: [
			new workbox.expiration.ExpirationPlugin({
				maxEntries: 1000,
				maxAgeSeconds: 60 * 60 * 24 * 30,
			}),
			new workbox.cacheableResponse.CacheableResponsePlugin({
				statuses: [0, 200],
			}),
		],
	})
);

// Fonts
workbox.routing.registerRoute(
	/\.(?:eot|ttf|woff|woff2)$/,
	new workbox.strategies.CacheFirst({
		cacheName: "fonts",
		plugins: [
			new workbox.expiration.ExpirationPlugin({
				maxEntries: 1000,
				maxAgeSeconds: 60 * 60 * 24 * 30,
			}),
			new workbox.cacheableResponse.CacheableResponsePlugin({
				statuses: [0, 200],
			}),
		],
	})
);

// Google Fonts
workbox.routing.registerRoute(
	/^https:\/\/fonts\.googleapis\.com/,
	new workbox.strategies.StaleWhileRevalidate({
		cacheName: "google-fonts-stylesheets",
	})
);
workbox.routing.registerRoute(
	/^https:\/\/fonts\.gstatic\.com/,
	new workbox.strategies.CacheFirst({
		cacheName: "google-fonts-webfonts",
		plugins: [
			new workbox.expiration.ExpirationPlugin({
				maxEntries: 1000,
				maxAgeSeconds: 60 * 60 * 24 * 30,
			}),
			new workbox.cacheableResponse.CacheableResponsePlugin({
				statuses: [0, 200],
			}),
		],
	})
);

// Static Libraries
workbox.routing.registerRoute(
	/^https:\/\/cdn\.jsdelivr\.net/,
	new workbox.strategies.CacheFirst({
		cacheName: "static-libs",
		plugins: [
			new workbox.expiration.ExpirationPlugin({
				maxEntries: 1000,
				maxAgeSeconds: 60 * 60 * 24 * 30,
			}),
			new workbox.cacheableResponse.CacheableResponsePlugin({
				statuses: [0, 200],
			}),
		],
	})
);

workbox.googleAnalytics.initialize();
