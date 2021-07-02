const workboxVersion = "6.1.5";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
	prefix: "T blog",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"00c310f6926716eaffe06a26e5852afa","url":"./2018/04/25/CSSLint-目录/index.html"},{"revision":"8689931aa9348ca0e7432f12cc40b44e","url":"./2018/04/27/JS-Array-常用方法/index.html"},{"revision":"c848dbd03c4efcb175c02435ceedc045","url":"./2018/06/04/VUE中的-methods-computed-watch/index.html"},{"revision":"dec381098289ebd025af7d50d316b16e","url":"./2018/06/07/JS-网传问题回顾/index.html"},{"revision":"98ce8e85fb7bf9b0889afff3f0a2c744","url":"./2018/08/01/JS-Date-总结/index.html"},{"revision":"317da40e39edfb5eca60b06b3d6df904","url":"./2019/11/26/推荐安装Chrome扩展程序/index.html"},{"revision":"812f434c46f130465b3a973a0e380214","url":"./2019/11/28/Vue与Electron成长记/index.html"},{"revision":"b23e553f3507de9710ba92edf1c96aa4","url":"./2019/12/09/nodejs-相关/index.html"},{"revision":"2550406d3174382c6f1402fdbd2e7939","url":"./2020/09/16/我的效率软件/index.html"},{"revision":"188df9c8e5f989c9a513af6c4c865f4e","url":"./2021/02/18/JS图片分析开源包/index.html"},{"revision":"d00b6bd63448bf4ac05508a18921104d","url":"./2021/03/01/微信小程序/index.html"},{"revision":"3cb1474b3524f96b4462b0106291423d","url":"./2021/03/11/hello-world/index.html"},{"revision":"06088469ae67bc8b2c8d607bb0176fe3","url":"./2021/03/11/RN-调试/index.html"},{"revision":"0da546c8fed44b5a4cd1613d911e59f0","url":"./2021/03/19/CSS-制作图形小知识/index.html"},{"revision":"1046e093dd55c27cd4fbe2836e844dce","url":"./2021/03/25/Flex-布局/index.html"},{"revision":"7cb608a41a9a3a2dc19ee99db5bcfc76","url":"./2021/04/06/买房相关/index.html"},{"revision":"90208154aea76da61ede2b6cefe3a63b","url":"./2021/04/20/如何使用WSL/index.html"},{"revision":"8b5a17193aaaeead9936b2a3d40f8a16","url":"./2021/04/22/每日总结/index.html"},{"revision":"8ff6fcbed574a75e520b9dcee4647b12","url":"./2021/05/08/Linux常识扫盲/index.html"},{"revision":"f964edc8226a80f412e560b4696d759a","url":"./404.html"},{"revision":"0c4bb8caf71f616051ea6d31bbe6d1e6","url":"./about/index.html"},{"revision":"e73446dbdd52ac870e5e7a2a00e42cba","url":"./archives/2018/04/index.html"},{"revision":"3060dfb0caf886e4c6ecc3cbff98b592","url":"./archives/2018/06/index.html"},{"revision":"8626638089dbe5e3e9b7f2db154f2e6e","url":"./archives/2018/08/index.html"},{"revision":"5f21fd4ab599811d2f4dcf9d200592ca","url":"./archives/2018/index.html"},{"revision":"298b51fe3297ed75bda6fc5981c04400","url":"./archives/2019/11/index.html"},{"revision":"a6bbac045ce7ac0ee4cc25ff8fc4a45b","url":"./archives/2019/12/index.html"},{"revision":"05f8cfab18b440a72471cdb368712647","url":"./archives/2019/index.html"},{"revision":"8aac29833698a80d467af355f07ceccd","url":"./archives/2020/09/index.html"},{"revision":"e1e3c7d426f8644f73f02c0163c6353c","url":"./archives/2020/index.html"},{"revision":"d5632bc58c7619b7a2321450346f8156","url":"./archives/2021/02/index.html"},{"revision":"f596c2520e39fce0616bcef689aead7c","url":"./archives/2021/03/index.html"},{"revision":"d7cf4e84f8e07825e897f6cc1310ef5c","url":"./archives/2021/04/index.html"},{"revision":"0efdeb5c148e8a99b5df2ee7857e757b","url":"./archives/2021/05/index.html"},{"revision":"2ddaf6debb6709f68a21e4e681f7fa54","url":"./archives/2021/index.html"},{"revision":"ed2ed60ba5563c741094eb7f5f92fa5c","url":"./archives/index.html"},{"revision":"1931af1b9dbcd9cb8f7b8393d2f5aa01","url":"./archives/page/2/index.html"},{"revision":"e0576d8f5788103cf12868dcb787c655","url":"./categories/index.html"},{"revision":"18afc45677e735686ef03af0855514a5","url":"./categories/译文/index.html"},{"revision":"7ca8472f4a40af1a822afab5ef010ff4","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"e2a3fe4f030fdc757de15e281128d581","url":"./index.html"},{"revision":"fddd31653e64e5cb8859625e4c1a08da","url":"./js/duration.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"29017ec8b99558b0a43567d70157881e","url":"./page/2/index.html"},{"revision":"f651798c946af32bbba62daacc92bbab","url":"./pwa/manifest.json"},{"revision":"f6dfbbd5f1709c1b44dc66fb71a8ad17","url":"./tags/CSS/index.html"},{"revision":"3aa36e9fc503978baee5c2913cd3da2d","url":"./tags/index.html"},{"revision":"4dc7f0b9cb202904660b3a764c31501d","url":"./tags/javascript/index.html"},{"revision":"5aeca625a1bd9142244b1427c3f6ccfc","url":"./tags/react-native/index.html"},{"revision":"d008151482557a4e004fef7b67de063f","url":"./tags/RN/index.html"},{"revision":"71c7cd999c2152a7fd72f0470b0f36dd","url":"./tags/vue/index.html"},{"revision":"e30d6e8bad3e0c6b1ec265bb45bb2140","url":"./tags/目录/index.html"}], {
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
