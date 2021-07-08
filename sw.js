const workboxVersion = "6.1.5";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
	prefix: "T blog",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"eed9990a2d7a7b7a816aef3a0a0ac364","url":"./2018/04/25/CSSLint-目录/index.html"},{"revision":"101a789f16a64aa776b65c57ff38e836","url":"./2018/04/27/JS-Array-常用方法/index.html"},{"revision":"f1e513cf9ebf11d735c703877dcf1899","url":"./2018/06/04/VUE中的-methods-computed-watch/index.html"},{"revision":"e5a5e66bcfca825614daada1dbc48ec5","url":"./2018/06/07/JS-网传问题回顾/index.html"},{"revision":"5f08f1ade7c7ff26ada370148979ad04","url":"./2018/08/01/JS-Date-总结/index.html"},{"revision":"37ab581ac44e6728b535606e22106523","url":"./2019/11/26/推荐安装Chrome扩展程序/index.html"},{"revision":"cdeae8ae8b069f95b39f5545ddcff403","url":"./2019/11/28/Vue与Electron成长记/index.html"},{"revision":"3ab0bfb345c9088c3b9cd7bbb992e600","url":"./2019/12/09/nodejs-相关/index.html"},{"revision":"544b59472e8da8d23d0b6d06e4daa66c","url":"./2020/09/16/我的效率软件/index.html"},{"revision":"ea4437eeafcec9856bc13329c4255e37","url":"./2021/02/18/JS图片分析开源包/index.html"},{"revision":"ac76f86115359193a5a1243cf95080d3","url":"./2021/03/01/微信小程序/index.html"},{"revision":"745b89e2e59fa542dde23b1ac9f622ec","url":"./2021/03/11/hello-world/index.html"},{"revision":"f5e1715d978677ca184f0a002aa4ea8f","url":"./2021/03/11/RN-调试/index.html"},{"revision":"5e1204ae3149ed1c178940f4d78a4886","url":"./2021/03/19/CSS-制作图形小知识/index.html"},{"revision":"7580f601b2727af278ba7ec6dc6eebc6","url":"./2021/03/25/Flex-布局/index.html"},{"revision":"31ab17b914605eb33ccbad70ec45df05","url":"./2021/04/06/买房相关/index.html"},{"revision":"d11a67b179fed9226c3b7e6e952446f5","url":"./2021/04/20/如何使用WSL/index.html"},{"revision":"efb1837526387ba491b7014cb9ec155a","url":"./2021/04/22/每日总结/index.html"},{"revision":"1d9f6d605a89968801f8ffaab0457f7b","url":"./2021/05/08/Linux常识扫盲/index.html"},{"revision":"9be0721a15b232166a39db2310454de1","url":"./404.html"},{"revision":"29ee695040ab7f2726881713d0e80781","url":"./about/index.html"},{"revision":"f5e62deb4d4e47b6d332403620bf7ea6","url":"./archives/2018/04/index.html"},{"revision":"5af9be17dcbd615469843ff2215fc6e0","url":"./archives/2018/06/index.html"},{"revision":"65792e4589de42a6f6b335921c3ba938","url":"./archives/2018/08/index.html"},{"revision":"2c6be4b03b2feededf88297a90e4d02d","url":"./archives/2018/index.html"},{"revision":"c6818a01ab6e0030bb7ac211030d015b","url":"./archives/2019/11/index.html"},{"revision":"0465d6ddddcda213840114f7454c08d6","url":"./archives/2019/12/index.html"},{"revision":"2db874d51ab5860e3d57e57abf07f069","url":"./archives/2019/index.html"},{"revision":"19ce1ad5bbb7a8f399a6b7503c7aa354","url":"./archives/2020/09/index.html"},{"revision":"fe1f293caf355f24785ba0b877d16b34","url":"./archives/2020/index.html"},{"revision":"f485073be14ffedc9ba8ceb11ebb4cbe","url":"./archives/2021/02/index.html"},{"revision":"6dcb92f228001312b6d6c5cf89f8b1bc","url":"./archives/2021/03/index.html"},{"revision":"36fefee3ce71bf3d0de5903fb94cbc9c","url":"./archives/2021/04/index.html"},{"revision":"2b07835ece56c0e8f04a078a798dd523","url":"./archives/2021/05/index.html"},{"revision":"c5771d2f4986df7cbf7fb9bb2ae3757e","url":"./archives/2021/index.html"},{"revision":"0eab92f81ee918ccd78c18b87886888f","url":"./archives/index.html"},{"revision":"e04e6dcc7be970370dcfcb6e028e9c53","url":"./archives/page/2/index.html"},{"revision":"c9aaa91402eadcb33a32508f7db4f344","url":"./categories/index.html"},{"revision":"3179852d8b097de6f978963d4f49692b","url":"./categories/译文/index.html"},{"revision":"e8fe4cb1c47b16dcc2160e580ac1bb8f","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"3aa19163a860d0b53b211cdf43347eaf","url":"./index.html"},{"revision":"fddd31653e64e5cb8859625e4c1a08da","url":"./js/duration.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"1998eb9a6e81b9069f6d2a213ca6a7e3","url":"./link/index.html"},{"revision":"79f9c53addd0ed10e8d5e8b54f25802d","url":"./page/2/index.html"},{"revision":"f651798c946af32bbba62daacc92bbab","url":"./pwa/manifest.json"},{"revision":"f94e4dddb720bf338cd4f4b69467ec3c","url":"./tags/CSS/index.html"},{"revision":"07caaa0d87253cb62928e02f9ed7e18f","url":"./tags/index.html"},{"revision":"7aa28bf08e3c6ca2c512fb3223cbb3e1","url":"./tags/javascript/index.html"},{"revision":"cdbe4b8c155f99ba6132b9d6283fb544","url":"./tags/react-native/index.html"},{"revision":"d09977ac243d9585cedec808efc54488","url":"./tags/RN/index.html"},{"revision":"2b95bce99569dbbcadde2f32c59acea6","url":"./tags/vue/index.html"},{"revision":"57b4f621b44eae5511c33eab0621e158","url":"./tags/目录/index.html"}], {
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
