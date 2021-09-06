const workboxVersion = "6.1.5";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
	prefix: "T blog",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"d4360d12ff2989a4b2a1ae8be5200f0c","url":"./2018/04/25/CSSLint-目录/index.html"},{"revision":"488f6dc40f5c5117e3cf3f04279618fb","url":"./2018/04/27/JS-Array-常用方法/index.html"},{"revision":"a04067f37eb9bdde4a1dd37cb030d854","url":"./2018/06/04/VUE中的-methods-computed-watch/index.html"},{"revision":"992ceb3989fe35aa3535841d306ce277","url":"./2018/06/07/JS-网传问题回顾/index.html"},{"revision":"10bb5afa99e87a8796a921da657fe025","url":"./2018/08/01/JS-Date-总结/index.html"},{"revision":"f5ef386b96ac345fe2773ad5ad5ab758","url":"./2019/11/26/推荐安装Chrome扩展程序/index.html"},{"revision":"c47e6cc827216b5d6318b3cb40b49dbc","url":"./2019/11/28/Vue与Electron成长记/index.html"},{"revision":"6570ef346762be2271aa19075f8b52cb","url":"./2019/12/09/nodejs-相关/index.html"},{"revision":"fd35e1ccf1655ad1fe9b3ae1e5064590","url":"./2020/09/16/我的效率软件/index.html"},{"revision":"ae8dd7927caa93be1f9f94c539f9db59","url":"./2021/02/18/JS图片分析开源包/index.html"},{"revision":"16345d052770af7e023d975460b530a9","url":"./2021/03/01/微信小程序/index.html"},{"revision":"c7725ceeec77ba97371fb40da5eb0873","url":"./2021/03/11/hello-world/index.html"},{"revision":"400ef9a4f13c61458e9f8f3963e4a4d5","url":"./2021/03/11/RN-相关/index.html"},{"revision":"83f0e927532af4903323c40ddff8e20b","url":"./2021/03/19/CSS-制作图形小知识/index.html"},{"revision":"a770214226d5b0ec593c7a72617074f0","url":"./2021/03/25/Flex-布局/index.html"},{"revision":"21e3a810ec1db6c499ab658a9b0dd8e9","url":"./2021/04/06/买房相关/index.html"},{"revision":"129be4aed6634db034cef9554fc14a2f","url":"./2021/04/20/如何使用WSL/index.html"},{"revision":"0069cb2610235c88d3d06debe455ea69","url":"./2021/04/22/每日总结/index.html"},{"revision":"9ac60407406db857888c1c0a24e4dd82","url":"./2021/05/08/Linux常识扫盲/index.html"},{"revision":"fa667e3025c34e4ffdfe53de771b7f7c","url":"./2021/07/13/编程相关概念/index.html"},{"revision":"38a5ed45b6ec76b66be4e4f5dbf74054","url":"./2021/07/14/JS实用代码块/index.html"},{"revision":"14ca37c6a68af81111af37309d9e581c","url":"./2021/07/15/JS类库推荐/index.html"},{"revision":"967280aaee9cebd884b1f236611e9d24","url":"./2021/08/26/VSCode笔记/index.html"},{"revision":"fe8aba286b2475fb2314fdf04187626b","url":"./404.html"},{"revision":"ea34d8041e146629800d96b8c92aabdc","url":"./about/index.html"},{"revision":"5ad7d20995de09b523f448b82f64f969","url":"./archives/2018/04/index.html"},{"revision":"fd820a9bb77edd5889c214713fead58b","url":"./archives/2018/06/index.html"},{"revision":"0a07077f4e7eff52d360c77c8616bb77","url":"./archives/2018/08/index.html"},{"revision":"b0d719a1df0469c8c67d25a2bc29e7f8","url":"./archives/2018/index.html"},{"revision":"ba17f32897bfa5b16d1b0d88122b204a","url":"./archives/2019/11/index.html"},{"revision":"ceae16b3e1a62b4962e1e72e8f5cdfd4","url":"./archives/2019/12/index.html"},{"revision":"afe96d1557fccbfd0a60d1da71f49b9f","url":"./archives/2019/index.html"},{"revision":"91b2f64f5f6216079b758c7f3d320f9d","url":"./archives/2020/09/index.html"},{"revision":"e2eb5ace2cb2bb3fbd3747cb204d597a","url":"./archives/2020/index.html"},{"revision":"d139e0dec504c186acc04ba62a798a40","url":"./archives/2021/02/index.html"},{"revision":"bf5c5d9b015de4fb2a1c9e6ea5c5d56d","url":"./archives/2021/03/index.html"},{"revision":"321a45fbb18754d83d269d2f853e7ca6","url":"./archives/2021/04/index.html"},{"revision":"7a50e8256d7fea44217874b814792c74","url":"./archives/2021/05/index.html"},{"revision":"7f16462f31820fe847283ffd526ffde4","url":"./archives/2021/07/index.html"},{"revision":"be23a209178a5f3c10011c93d21df122","url":"./archives/2021/08/index.html"},{"revision":"b351827ea48ace454ae404988027e954","url":"./archives/2021/index.html"},{"revision":"9f9e497bef13a8e5606b801a6b7513a6","url":"./archives/2021/page/2/index.html"},{"revision":"71b3fa5bc62fe8a1125e82c365fb8ab7","url":"./archives/index.html"},{"revision":"68643877ef7b9e1e84569675105a1a56","url":"./archives/page/2/index.html"},{"revision":"71d6c21ef0461dba61de0b009bb0f067","url":"./archives/page/3/index.html"},{"revision":"ffbdb88830a9d1bf87d5f0bcf1e37e03","url":"./categories/index.html"},{"revision":"bb363498cde5c790316f47f911e06140","url":"./categories/译文/index.html"},{"revision":"e8fe4cb1c47b16dcc2160e580ac1bb8f","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d7d3c2f7350673ecd18daba9e97d47c2","url":"./index.html"},{"revision":"fddd31653e64e5cb8859625e4c1a08da","url":"./js/duration.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"e18956566ed3311c327dcfdd10fe70af","url":"./link/index.html"},{"revision":"dd04b579080cd89f6cf65dcd48091311","url":"./page/2/index.html"},{"revision":"6b1a942f3fc52f5f6f7e578d28587368","url":"./page/3/index.html"},{"revision":"f651798c946af32bbba62daacc92bbab","url":"./pwa/manifest.json"},{"revision":"dd8a3354f36d11de2b2dec787b6d48b0","url":"./tags/CSS/index.html"},{"revision":"59d35ee844b29938decc4d844d93aaf2","url":"./tags/index.html"},{"revision":"c7004d47bc1b0cf91cdb8e169fd2a989","url":"./tags/javascript/index.html"},{"revision":"f8b4fa38c9f31ec56c41a737b0a0cdf3","url":"./tags/react-native/index.html"},{"revision":"ce5b1efcfbe6c2042e672b5e2897df6e","url":"./tags/RN/index.html"},{"revision":"2dbf184f90af367d8da849b0eaa3bec3","url":"./tags/vue/index.html"},{"revision":"6882072b33216a241dc0b43c9cfeb807","url":"./tags/目录/index.html"}], {
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
