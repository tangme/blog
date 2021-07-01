const workboxVersion = "6.1.5";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
	prefix: "tanglv",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4740b04eab91009ca29e6500f63a9f10","url":"./2018/04/25/CSSLint-目录/index.html"},{"revision":"b2353b78ab8e8e778287b6a6b8ff6a06","url":"./2018/04/27/JS-Array-常用方法/index.html"},{"revision":"315459c1f455ab2ada4b7b26c0642e22","url":"./2018/06/04/VUE中的-methods-computed-watch/index.html"},{"revision":"4ddf88fa052d611c0ef19d11883397b5","url":"./2018/06/07/JS-网传问题回顾/index.html"},{"revision":"f3bfb473eeeb8d83848ecb7de035612f","url":"./2018/08/01/JS-Date-总结/index.html"},{"revision":"4ba9905ebe01c8c69dc622dab442f0e7","url":"./2019/11/26/推荐安装Chrome扩展程序/index.html"},{"revision":"df4b999961cf5d52b92c6cc52446554c","url":"./2019/11/28/Vue与Electron成长记/index.html"},{"revision":"79c827b6866f7f0fd13e7015ba8a740c","url":"./2019/12/09/nodejs-相关/index.html"},{"revision":"bb4eef32f7e3d1f4330ad9a85587e891","url":"./2020/09/16/我的效率软件/index.html"},{"revision":"3b852435ccfc296b1acd11abafca7a10","url":"./2021/02/18/JS图片分析开源包/index.html"},{"revision":"0f4111fc55f18799865420792e48297d","url":"./2021/03/01/微信小程序/index.html"},{"revision":"b9621e533d48bf25f365846cd8393eb0","url":"./2021/03/11/hello-world/index.html"},{"revision":"24f3ede15d8dcda1ff8e56aa8c764ecb","url":"./2021/03/11/RN-调试/index.html"},{"revision":"b2cd586eaa00d628da2f52faf0321e22","url":"./2021/03/19/CSS-制作图形小知识/index.html"},{"revision":"2dfbdd364bb1204d60d424c2e0e2ba11","url":"./2021/03/25/Flex-布局/index.html"},{"revision":"d7d3ebd4908729c4f899d889860b988e","url":"./2021/04/06/买房相关/index.html"},{"revision":"4092cb5ee57482ce496a1a8386e04262","url":"./2021/04/20/如何使用WSL/index.html"},{"revision":"3fe7e7d98efa67a95aa35e702aef3ce0","url":"./2021/04/22/每日总结/index.html"},{"revision":"9a62c86317c15b89872335a32e8d7e21","url":"./2021/05/08/Linux常识扫盲/index.html"},{"revision":"40ad7619d3ebb776f6a01797ed2d4064","url":"./about/index.html"},{"revision":"5cee140284de3f5402746ac407fba2b0","url":"./archives/2018/04/index.html"},{"revision":"2ae84efd4f8baa19e048c1a245b485bd","url":"./archives/2018/06/index.html"},{"revision":"5604a3ea23b14082187ea408100adee3","url":"./archives/2018/08/index.html"},{"revision":"a6814580e389510585661eb505564bb9","url":"./archives/2018/index.html"},{"revision":"0d4483d81696ab31fd8ae7d4b62843b5","url":"./archives/2019/11/index.html"},{"revision":"06f070d4b42f483013f6f6623f97604e","url":"./archives/2019/12/index.html"},{"revision":"71497b95968c60fb0f964df1476e0447","url":"./archives/2019/index.html"},{"revision":"2b80dd9cd5ea6eb1df2e3b5eedd8e2ee","url":"./archives/2020/09/index.html"},{"revision":"3b9332c7e97e16f6dee6ca067feb4d4b","url":"./archives/2020/index.html"},{"revision":"1ab28d547577015e54bbc8b0e6b8ec38","url":"./archives/2021/02/index.html"},{"revision":"23daad484c1946b6eab6ca07958a6345","url":"./archives/2021/03/index.html"},{"revision":"b1459b01498e02913c019b7822f85fc7","url":"./archives/2021/04/index.html"},{"revision":"bb8e5ba70240c2e8520734bb16e20aa3","url":"./archives/2021/05/index.html"},{"revision":"da15b68c97e439c3a4e0e871d8bf3885","url":"./archives/2021/index.html"},{"revision":"c2cb36aaed66b919443292fc01b767bf","url":"./archives/index.html"},{"revision":"b04687d2b064eb03d5e7c5b35fa825c8","url":"./archives/page/2/index.html"},{"revision":"52c0a85448df2d1bc4efecc80c2762b3","url":"./categories/index.html"},{"revision":"1130c540c32b215799aea9b16dac859d","url":"./categories/译文/index.html"},{"revision":"ec87a1d8e6b45b99ca6b2124e3558b38","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"5fdf806f57793f5c08b75376c3fd36b8","url":"./index.html"},{"revision":"fddd31653e64e5cb8859625e4c1a08da","url":"./js/duration.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"633b814a55453df5d217a2e0d436bd31","url":"./page/2/index.html"},{"revision":"699dd3f7a6b852cc8daa808139b944bc","url":"./pwa/manifest.json"},{"revision":"9496ae1c34a4727ca43a8d7c8f445e52","url":"./tags/CSS/index.html"},{"revision":"9a510fcadd4f6deaaca502f492e8e4f8","url":"./tags/index.html"},{"revision":"d68bdd4e7b5f0507c5f90d9775eef914","url":"./tags/javascript/index.html"},{"revision":"320ac9ce6bb7ebd1b81aed2df7f3ec4e","url":"./tags/react-native/index.html"},{"revision":"2cfd2cdaf00d0abd38859067fc924a04","url":"./tags/RN/index.html"},{"revision":"63843d9f9ee02cf45c5233c8257b08d0","url":"./tags/vue/index.html"},{"revision":"ff16524eb0ce6f5daf8ce092fc4d961f","url":"./tags/目录/index.html"}], {
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
