const workboxVersion = "6.1.5";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
	prefix: "tanglv",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4740b04eab91009ca29e6500f63a9f10","url":"./2018/04/25/CSSLint-目录/index.html"},{"revision":"b2353b78ab8e8e778287b6a6b8ff6a06","url":"./2018/04/27/JS-Array-常用方法/index.html"},{"revision":"315459c1f455ab2ada4b7b26c0642e22","url":"./2018/06/04/VUE中的-methods-computed-watch/index.html"},{"revision":"4ddf88fa052d611c0ef19d11883397b5","url":"./2018/06/07/JS-网传问题回顾/index.html"},{"revision":"f3bfb473eeeb8d83848ecb7de035612f","url":"./2018/08/01/JS-Date-总结/index.html"},{"revision":"4ba9905ebe01c8c69dc622dab442f0e7","url":"./2019/11/26/推荐安装Chrome扩展程序/index.html"},{"revision":"df4b999961cf5d52b92c6cc52446554c","url":"./2019/11/28/Vue与Electron成长记/index.html"},{"revision":"79c827b6866f7f0fd13e7015ba8a740c","url":"./2019/12/09/nodejs-相关/index.html"},{"revision":"bb4eef32f7e3d1f4330ad9a85587e891","url":"./2020/09/16/我的效率软件/index.html"},{"revision":"3b852435ccfc296b1acd11abafca7a10","url":"./2021/02/18/JS图片分析开源包/index.html"},{"revision":"0f4111fc55f18799865420792e48297d","url":"./2021/03/01/微信小程序/index.html"},{"revision":"b9621e533d48bf25f365846cd8393eb0","url":"./2021/03/11/hello-world/index.html"},{"revision":"24f3ede15d8dcda1ff8e56aa8c764ecb","url":"./2021/03/11/RN-调试/index.html"},{"revision":"b2cd586eaa00d628da2f52faf0321e22","url":"./2021/03/19/CSS-制作图形小知识/index.html"},{"revision":"2dfbdd364bb1204d60d424c2e0e2ba11","url":"./2021/03/25/Flex-布局/index.html"},{"revision":"d7d3ebd4908729c4f899d889860b988e","url":"./2021/04/06/买房相关/index.html"},{"revision":"4092cb5ee57482ce496a1a8386e04262","url":"./2021/04/20/如何使用WSL/index.html"},{"revision":"3fe7e7d98efa67a95aa35e702aef3ce0","url":"./2021/04/22/每日总结/index.html"},{"revision":"9a62c86317c15b89872335a32e8d7e21","url":"./2021/05/08/Linux常识扫盲/index.html"},{"revision":"0b2d2105953675b7bd0c9a9e4f3e4260","url":"./about/index.html"},{"revision":"cfdc15cd98297a3863657752ca387a71","url":"./archives/2018/04/index.html"},{"revision":"b7d010a227db52a09c251cfac77569b6","url":"./archives/2018/06/index.html"},{"revision":"4cfd1d756fbfe93d61998e831876bb91","url":"./archives/2018/08/index.html"},{"revision":"adfd1049cd111b5986d3691ca70ed083","url":"./archives/2018/index.html"},{"revision":"77737a6c041edf92d024c77a6cd71e2b","url":"./archives/2019/11/index.html"},{"revision":"8cb5277bf90410f5bda4bf868f7d6d9d","url":"./archives/2019/12/index.html"},{"revision":"b135eb059a5ad38f9e4ba5d11d5639ef","url":"./archives/2019/index.html"},{"revision":"dab0232982f0ab06bf6da9eee4996281","url":"./archives/2020/09/index.html"},{"revision":"b9add060495f2ae74cecf4f4b524d8dc","url":"./archives/2020/index.html"},{"revision":"b2f44cb3227145c5c26db86caedafa86","url":"./archives/2021/02/index.html"},{"revision":"48afc9a84e526e937da96e25e81dd4b6","url":"./archives/2021/03/index.html"},{"revision":"909c45a447dbe623faf16c8a60c6a356","url":"./archives/2021/04/index.html"},{"revision":"7644aa4a930594b54ebc11ff4f2123d9","url":"./archives/2021/05/index.html"},{"revision":"9c7bfe2941fae3cf39366b12eb9113d5","url":"./archives/2021/index.html"},{"revision":"c52bd937ea0c81f9c6b48e1f77e2f0ce","url":"./archives/index.html"},{"revision":"bde5550a0b0dcef52de2e2d6b278c293","url":"./archives/page/2/index.html"},{"revision":"bb1e66655ecd9df33a3e843f564f4b29","url":"./categories/index.html"},{"revision":"d3e1b2008fa107c099866d97d3e315d4","url":"./categories/译文/index.html"},{"revision":"ec87a1d8e6b45b99ca6b2124e3558b38","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0c30b3ef9f25a66602b84fee73f25227","url":"./index.html"},{"revision":"fddd31653e64e5cb8859625e4c1a08da","url":"./js/duration.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"bed65b4c4bb95b37c5bb775d55b1fb7c","url":"./page/2/index.html"},{"revision":"e765c5d14709f9b8003cd5da13343293","url":"./pwa/manifest.json"},{"revision":"a2f49f22ab80d1de5dec5c146f82c95b","url":"./tags/CSS/index.html"},{"revision":"44adf66b503bbea30dbe050b3e590879","url":"./tags/index.html"},{"revision":"c577925ceac6cc590a307c9d38c12947","url":"./tags/javascript/index.html"},{"revision":"8031db16ed0ba287af41523bad8b5143","url":"./tags/react-native/index.html"},{"revision":"0ef6e38333853b02017584adec57d387","url":"./tags/RN/index.html"},{"revision":"1d372f1945cdb7fb0666a45850446ddc","url":"./tags/vue/index.html"},{"revision":"4ab0d917bd63f5404d6bd158aa386e6d","url":"./tags/目录/index.html"}], {
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
