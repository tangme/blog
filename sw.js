const workboxVersion = "6.1.5";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
	prefix: "tanglv",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4740b04eab91009ca29e6500f63a9f10","url":"./2018/04/25/CSSLint-目录/index.html"},{"revision":"b2353b78ab8e8e778287b6a6b8ff6a06","url":"./2018/04/27/JS-Array-常用方法/index.html"},{"revision":"315459c1f455ab2ada4b7b26c0642e22","url":"./2018/06/04/VUE中的-methods-computed-watch/index.html"},{"revision":"4ddf88fa052d611c0ef19d11883397b5","url":"./2018/06/07/JS-网传问题回顾/index.html"},{"revision":"f3bfb473eeeb8d83848ecb7de035612f","url":"./2018/08/01/JS-Date-总结/index.html"},{"revision":"4ba9905ebe01c8c69dc622dab442f0e7","url":"./2019/11/26/推荐安装Chrome扩展程序/index.html"},{"revision":"df4b999961cf5d52b92c6cc52446554c","url":"./2019/11/28/Vue与Electron成长记/index.html"},{"revision":"79c827b6866f7f0fd13e7015ba8a740c","url":"./2019/12/09/nodejs-相关/index.html"},{"revision":"bb4eef32f7e3d1f4330ad9a85587e891","url":"./2020/09/16/我的效率软件/index.html"},{"revision":"3b852435ccfc296b1acd11abafca7a10","url":"./2021/02/18/JS图片分析开源包/index.html"},{"revision":"0f4111fc55f18799865420792e48297d","url":"./2021/03/01/微信小程序/index.html"},{"revision":"b9621e533d48bf25f365846cd8393eb0","url":"./2021/03/11/hello-world/index.html"},{"revision":"24f3ede15d8dcda1ff8e56aa8c764ecb","url":"./2021/03/11/RN-调试/index.html"},{"revision":"b2cd586eaa00d628da2f52faf0321e22","url":"./2021/03/19/CSS-制作图形小知识/index.html"},{"revision":"2dfbdd364bb1204d60d424c2e0e2ba11","url":"./2021/03/25/Flex-布局/index.html"},{"revision":"d7d3ebd4908729c4f899d889860b988e","url":"./2021/04/06/买房相关/index.html"},{"revision":"4092cb5ee57482ce496a1a8386e04262","url":"./2021/04/20/如何使用WSL/index.html"},{"revision":"3fe7e7d98efa67a95aa35e702aef3ce0","url":"./2021/04/22/每日总结/index.html"},{"revision":"9a62c86317c15b89872335a32e8d7e21","url":"./2021/05/08/Linux常识扫盲/index.html"},{"revision":"4176d9466d0b0365ffb5e7b1998f06ab","url":"./about/index.html"},{"revision":"4b56a4dd46be1e1dd250c325e50bc59b","url":"./archives/2018/04/index.html"},{"revision":"69c7d6e0d89963edbdf2edfeeabb3aa4","url":"./archives/2018/06/index.html"},{"revision":"37843116bfad7f31ac6b8a96e7af3d5b","url":"./archives/2018/08/index.html"},{"revision":"82d27689447a6c890dc0d01dfa40b24d","url":"./archives/2018/index.html"},{"revision":"38ae3ce222b6b4ba68230f6b091c3cd5","url":"./archives/2019/11/index.html"},{"revision":"2ce2bf95a70d59db7d54ef3be3b17732","url":"./archives/2019/12/index.html"},{"revision":"adaf0f7adb0b979159c345c71f1e083c","url":"./archives/2019/index.html"},{"revision":"a3ab2d0b1769016bb0703809ba0b24bc","url":"./archives/2020/09/index.html"},{"revision":"6932822caeb6b75e1d85108c3619c4dc","url":"./archives/2020/index.html"},{"revision":"41a3af0b9c5a24671762dd0d30c88bb2","url":"./archives/2021/02/index.html"},{"revision":"993f6dcd4a228dad5b0f13e83a2d4d27","url":"./archives/2021/03/index.html"},{"revision":"1c5656b327b3cb669cdb14554e52404e","url":"./archives/2021/04/index.html"},{"revision":"1c5808c530f50dde2635308ff4b3b32b","url":"./archives/2021/05/index.html"},{"revision":"023dd634a1d0c9f13bdb9e159d272dc8","url":"./archives/2021/index.html"},{"revision":"5b23888be4fba11ae7b50628649c417c","url":"./archives/index.html"},{"revision":"d491f672d983d03b879ed7ba60f2876b","url":"./archives/page/2/index.html"},{"revision":"834cc0fbd9f86adea11523c3a3da903e","url":"./categories/index.html"},{"revision":"5314fd63f6841a4671930b0a8bd63fc1","url":"./categories/译文/index.html"},{"revision":"ec87a1d8e6b45b99ca6b2124e3558b38","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"487e3142b6c8d06f8273fca119892ec5","url":"./index.html"},{"revision":"fddd31653e64e5cb8859625e4c1a08da","url":"./js/duration.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"5656113ee13b73ab035654146e80b50b","url":"./page/2/index.html"},{"revision":"24bfae3d42195767add354cf48cc15b7","url":"./pwa/manifest.json"},{"revision":"dacd3d39de6babd3604ac438220a6255","url":"./tags/CSS/index.html"},{"revision":"3515fe4384cba9352655c96c880c34f8","url":"./tags/index.html"},{"revision":"fa78bf5592223a928eddecf30c73d1d1","url":"./tags/javascript/index.html"},{"revision":"09a38317116ef09f39b04533dc44756f","url":"./tags/react-native/index.html"},{"revision":"3ddddf41d1003b530bce860cdd05f9bb","url":"./tags/RN/index.html"},{"revision":"f8237d52301b7ff573a869ead46b4084","url":"./tags/vue/index.html"},{"revision":"86d16c7814c64c183bf406ba41949cab","url":"./tags/目录/index.html"}], {
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
