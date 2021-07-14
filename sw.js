const workboxVersion = "6.1.5";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
	prefix: "T blog",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"25a51372f9c42273171e11dbba16f5b7","url":"./2018/04/25/CSSLint-目录/index.html"},{"revision":"00aebd1fca377a10a392869e0162e903","url":"./2018/04/27/JS-Array-常用方法/index.html"},{"revision":"9daef342c969108dd1cce0ca6bcb3dda","url":"./2018/06/04/VUE中的-methods-computed-watch/index.html"},{"revision":"d20fc53272dc54b450cfd2e1b5ab6e6d","url":"./2018/06/07/JS-网传问题回顾/index.html"},{"revision":"0c6a5072c5ad4a02216b942ff19d5850","url":"./2018/08/01/JS-Date-总结/index.html"},{"revision":"596aced071a447503fb1f17c5fde35a0","url":"./2019/11/26/推荐安装Chrome扩展程序/index.html"},{"revision":"3ae91fde41a6b087897e44d56079ad29","url":"./2019/11/28/Vue与Electron成长记/index.html"},{"revision":"d96642dcd606d6894832a5e05a6f90ce","url":"./2019/12/09/nodejs-相关/index.html"},{"revision":"f73cbf2fc591e7633e7031a67bd9c79d","url":"./2020/09/16/我的效率软件/index.html"},{"revision":"e0a23876ade8380c302ea808e702958d","url":"./2021/02/18/JS图片分析开源包/index.html"},{"revision":"06b30e48b087e076204440346d0ab30d","url":"./2021/03/01/微信小程序/index.html"},{"revision":"3c41f21a2b1be9a64b16457b9642bdd8","url":"./2021/03/11/hello-world/index.html"},{"revision":"2bf0a68c470225af27a1fb533e295815","url":"./2021/03/11/RN-调试/index.html"},{"revision":"e877c8a2237a306c594551b9d092c21b","url":"./2021/03/19/CSS-制作图形小知识/index.html"},{"revision":"93dd050d9e7f35665acfdf9aab1c3b8b","url":"./2021/03/25/Flex-布局/index.html"},{"revision":"611a652fca73585a33372c1311427ec1","url":"./2021/04/06/买房相关/index.html"},{"revision":"4cbc5624c076054e8863d7f2d28f436c","url":"./2021/04/20/如何使用WSL/index.html"},{"revision":"481d4036bede1edcfc9919e82a0dcb6f","url":"./2021/04/22/每日总结/index.html"},{"revision":"731617fece8c2e52ebea26a768d21ccb","url":"./2021/05/08/Linux常识扫盲/index.html"},{"revision":"e652a1a24ddf6091631e72cdf9e65b67","url":"./2021/07/13/编程相关概念/index.html"},{"revision":"2cf0f3d70d656009c7f6b4c708116ae7","url":"./2021/07/14/JS实用代码块/index.html"},{"revision":"059130f18225d6d748eb3d9925b38455","url":"./404.html"},{"revision":"a0b8e857e9fdb7562d1d76aa14136f35","url":"./about/index.html"},{"revision":"55e554281707ef55b3043b069d59db19","url":"./archives/2018/04/index.html"},{"revision":"16aedf0945a0aac095d812e3c89590f4","url":"./archives/2018/06/index.html"},{"revision":"c780186999fcbbf533f057b83ffdd543","url":"./archives/2018/08/index.html"},{"revision":"f070c376aa0bb91fdee381b6ee1f9e8e","url":"./archives/2018/index.html"},{"revision":"339d50ca3d68049d121169075eca6602","url":"./archives/2019/11/index.html"},{"revision":"e0d84640a756997b67a5e6a1b5fc7853","url":"./archives/2019/12/index.html"},{"revision":"439720dce2b5b73ac4f51edbe63f814c","url":"./archives/2019/index.html"},{"revision":"a5a00cdc3c72be77cec3e54a912294df","url":"./archives/2020/09/index.html"},{"revision":"e963ff225f1e4e674b729d9cf8426146","url":"./archives/2020/index.html"},{"revision":"92dbee82e3554c9cf8904a7d357b226e","url":"./archives/2021/02/index.html"},{"revision":"1e26e8a9043b7810d4d7076858403ec5","url":"./archives/2021/03/index.html"},{"revision":"e781bb4107e4a266f16e13938e2fb642","url":"./archives/2021/04/index.html"},{"revision":"2e312a2e8b7401231ce7e37287a3c333","url":"./archives/2021/05/index.html"},{"revision":"45f3c9c72c8e9d85476a83681f03ed88","url":"./archives/2021/07/index.html"},{"revision":"0b1da805264509a27f29781ab7891ff7","url":"./archives/2021/index.html"},{"revision":"8295fd65c579c3f45c9a02ccf9c0c0e2","url":"./archives/2021/page/2/index.html"},{"revision":"7207246e76053bf971fdb45a93a0f121","url":"./archives/index.html"},{"revision":"c2eb999dddf3327e23a1c8f7d6dcb60b","url":"./archives/page/2/index.html"},{"revision":"6834851b8782c127de5d80d84f32ce7f","url":"./archives/page/3/index.html"},{"revision":"9c9b8ac4f2df6963b74d500b64dbdada","url":"./categories/index.html"},{"revision":"28fea7c8a7206889da40e364d4e96f41","url":"./categories/译文/index.html"},{"revision":"e8fe4cb1c47b16dcc2160e580ac1bb8f","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"df20b7601d4cec9206013cfae1ab2191","url":"./index.html"},{"revision":"fddd31653e64e5cb8859625e4c1a08da","url":"./js/duration.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"69dabeea1a7509fc562e0972c2263222","url":"./link/index.html"},{"revision":"6ae0e7e12ae8ed0c4a9ab0b6c7e80bd3","url":"./page/2/index.html"},{"revision":"d44f437e4801d06bd2de91ff215b74e4","url":"./page/3/index.html"},{"revision":"f651798c946af32bbba62daacc92bbab","url":"./pwa/manifest.json"},{"revision":"d60ae50f7f378d1d1eb7e2a5a6e7c0c4","url":"./tags/CSS/index.html"},{"revision":"059266f6ca90f038df876cc7b0178f6c","url":"./tags/index.html"},{"revision":"7fab69f9ced5092ebe66342c9875ce81","url":"./tags/javascript/index.html"},{"revision":"52ff4f27ad8892b42f3d28695927c926","url":"./tags/react-native/index.html"},{"revision":"037d4e43df6f97a328a3ee32102e4a46","url":"./tags/RN/index.html"},{"revision":"c9f92f64e0c4e73bd424c16c009982b8","url":"./tags/vue/index.html"},{"revision":"d7f49e8c72bccbf512ea5b61a2936c8f","url":"./tags/目录/index.html"}], {
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
