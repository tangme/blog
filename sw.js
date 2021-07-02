const workboxVersion = "6.1.5";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
	prefix: "T blog",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"c44b40d024eff6b392440a03b6eb720e","url":"./2018/04/25/CSSLint-目录/index.html"},{"revision":"2d99da7ea47e79021963e042e3574b66","url":"./2018/04/27/JS-Array-常用方法/index.html"},{"revision":"11fd4466cdbd7ec53cd9dcee217c50b2","url":"./2018/06/04/VUE中的-methods-computed-watch/index.html"},{"revision":"e2cac3cd9008655bab85060820b25f8c","url":"./2018/06/07/JS-网传问题回顾/index.html"},{"revision":"685be4b8bda15067d0881c8d095d8e27","url":"./2018/08/01/JS-Date-总结/index.html"},{"revision":"653d568b946e8b451a57dfd9e331315a","url":"./2019/11/26/推荐安装Chrome扩展程序/index.html"},{"revision":"e455831f12448ff19ee41f7eb9c7f213","url":"./2019/11/28/Vue与Electron成长记/index.html"},{"revision":"30eec703e3d67993a8da9b0e55d4fad6","url":"./2019/12/09/nodejs-相关/index.html"},{"revision":"50cffc64d89387e2b8f1c625c23d6ab2","url":"./2020/09/16/我的效率软件/index.html"},{"revision":"1d5047bc06a732c4a53d17cc87cf37c7","url":"./2021/02/18/JS图片分析开源包/index.html"},{"revision":"997836bf567d6b76c63663a90aca5576","url":"./2021/03/01/微信小程序/index.html"},{"revision":"3feb46f73833c91a8a6572044f745de9","url":"./2021/03/11/hello-world/index.html"},{"revision":"73a33783c1924cc4ad60a9e41a8d0a9c","url":"./2021/03/11/RN-调试/index.html"},{"revision":"0c182bcd040c0d90582500500c7f8832","url":"./2021/03/19/CSS-制作图形小知识/index.html"},{"revision":"413bc5a06a7e4f2ac862f2f97a2d8338","url":"./2021/03/25/Flex-布局/index.html"},{"revision":"0ed0b8fe05bba388059f321d0a35be0b","url":"./2021/04/06/买房相关/index.html"},{"revision":"36577dd4c3430bb80fbd8c36d0fcf8a6","url":"./2021/04/20/如何使用WSL/index.html"},{"revision":"84af3d5765b50a3661af8e952dbe29b1","url":"./2021/04/22/每日总结/index.html"},{"revision":"8f83fff4402b134f89aacc254875e0d0","url":"./2021/05/08/Linux常识扫盲/index.html"},{"revision":"98ee243bfa1b175bacf83dd7955985cc","url":"./404.html"},{"revision":"2181c0b213c791ea38f0fe80a41d8a26","url":"./about/index.html"},{"revision":"2df2171b1fffb5a111fad82e5bdb0e22","url":"./archives/2018/04/index.html"},{"revision":"33feaf513026acbeabb70d1e3aed301d","url":"./archives/2018/06/index.html"},{"revision":"b7e612f5a2ba23008e2c3ab123ae4f4c","url":"./archives/2018/08/index.html"},{"revision":"985cc4de21cb04620cb6a49042ac8c3c","url":"./archives/2018/index.html"},{"revision":"b52176f92ab6da4c9f80e576028c0935","url":"./archives/2019/11/index.html"},{"revision":"780165a161e55a0fac83ceebc11df43c","url":"./archives/2019/12/index.html"},{"revision":"6dcd02867d60ea0f09c476ab4ef8171d","url":"./archives/2019/index.html"},{"revision":"33693c7e8480ed7357dae3fad2ccb444","url":"./archives/2020/09/index.html"},{"revision":"fb6e192f6fe54068b2d3d7972b3b5564","url":"./archives/2020/index.html"},{"revision":"982617f1d33695d033414a42eb91f7bd","url":"./archives/2021/02/index.html"},{"revision":"da475cf2b32c3b074773827f26cfa45b","url":"./archives/2021/03/index.html"},{"revision":"be3733a99965b4b11b37f5e105d75b77","url":"./archives/2021/04/index.html"},{"revision":"4421fca66bd228ea8511a943284daef9","url":"./archives/2021/05/index.html"},{"revision":"0b12c018248be889b73e0908eed9148f","url":"./archives/2021/index.html"},{"revision":"2319ee04a17b5ccd2d62d8916d69b47f","url":"./archives/index.html"},{"revision":"ae06d2bebf417f192c1ac36779835462","url":"./archives/page/2/index.html"},{"revision":"0024fd2e2ee67b1239359a078574b5aa","url":"./categories/index.html"},{"revision":"e98698afda517acca3e03c24529f188b","url":"./categories/译文/index.html"},{"revision":"b5b0b748dffa774299abfb75228c2f5f","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"b8402d86fc407df81a0073c01538b41a","url":"./index.html"},{"revision":"fddd31653e64e5cb8859625e4c1a08da","url":"./js/duration.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"0c5896f91d3fe8f19e30402e0fc56b03","url":"./page/2/index.html"},{"revision":"f651798c946af32bbba62daacc92bbab","url":"./pwa/manifest.json"},{"revision":"bddb2325b35caa51f4352b8d4a2c8192","url":"./tags/CSS/index.html"},{"revision":"a5bbe748ed53caa3f7f9236be3200707","url":"./tags/index.html"},{"revision":"24645d83647aae8f04926791ad9de50f","url":"./tags/javascript/index.html"},{"revision":"ca8cb1284fd0f73a10fa832e75e78823","url":"./tags/react-native/index.html"},{"revision":"135c92a1811eb58629f2051b5b6bd9df","url":"./tags/RN/index.html"},{"revision":"cdf3e1b15e3583e83f0bb83c90cbec20","url":"./tags/vue/index.html"},{"revision":"c883c7642a1779f561d46ad99750832b","url":"./tags/目录/index.html"}], {
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
