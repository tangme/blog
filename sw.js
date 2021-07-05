const workboxVersion = "6.1.5";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
	prefix: "T blog",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"c44b40d024eff6b392440a03b6eb720e","url":"./2018/04/25/CSSLint-目录/index.html"},{"revision":"2d99da7ea47e79021963e042e3574b66","url":"./2018/04/27/JS-Array-常用方法/index.html"},{"revision":"11fd4466cdbd7ec53cd9dcee217c50b2","url":"./2018/06/04/VUE中的-methods-computed-watch/index.html"},{"revision":"e2cac3cd9008655bab85060820b25f8c","url":"./2018/06/07/JS-网传问题回顾/index.html"},{"revision":"685be4b8bda15067d0881c8d095d8e27","url":"./2018/08/01/JS-Date-总结/index.html"},{"revision":"653d568b946e8b451a57dfd9e331315a","url":"./2019/11/26/推荐安装Chrome扩展程序/index.html"},{"revision":"e455831f12448ff19ee41f7eb9c7f213","url":"./2019/11/28/Vue与Electron成长记/index.html"},{"revision":"30eec703e3d67993a8da9b0e55d4fad6","url":"./2019/12/09/nodejs-相关/index.html"},{"revision":"50cffc64d89387e2b8f1c625c23d6ab2","url":"./2020/09/16/我的效率软件/index.html"},{"revision":"1d5047bc06a732c4a53d17cc87cf37c7","url":"./2021/02/18/JS图片分析开源包/index.html"},{"revision":"997836bf567d6b76c63663a90aca5576","url":"./2021/03/01/微信小程序/index.html"},{"revision":"3feb46f73833c91a8a6572044f745de9","url":"./2021/03/11/hello-world/index.html"},{"revision":"73a33783c1924cc4ad60a9e41a8d0a9c","url":"./2021/03/11/RN-调试/index.html"},{"revision":"0c182bcd040c0d90582500500c7f8832","url":"./2021/03/19/CSS-制作图形小知识/index.html"},{"revision":"413bc5a06a7e4f2ac862f2f97a2d8338","url":"./2021/03/25/Flex-布局/index.html"},{"revision":"4c44c37b40a7e5cb7587448ea7d106c4","url":"./2021/04/06/买房相关/index.html"},{"revision":"36577dd4c3430bb80fbd8c36d0fcf8a6","url":"./2021/04/20/如何使用WSL/index.html"},{"revision":"84af3d5765b50a3661af8e952dbe29b1","url":"./2021/04/22/每日总结/index.html"},{"revision":"8f83fff4402b134f89aacc254875e0d0","url":"./2021/05/08/Linux常识扫盲/index.html"},{"revision":"3d778557842eb235ddbfe649c5d415c6","url":"./404.html"},{"revision":"bcdeaf18cebc654a3fd9c2c3b21d59a8","url":"./about/index.html"},{"revision":"391673a23a1ec6fc7e7b94e6c27a2a75","url":"./archives/2018/04/index.html"},{"revision":"2174d695fef263336396304d68a3fd4c","url":"./archives/2018/06/index.html"},{"revision":"dad096c82a920e3fbc36ae2743274d30","url":"./archives/2018/08/index.html"},{"revision":"83e9ee46a33f230767e618bb923e2bbb","url":"./archives/2018/index.html"},{"revision":"90ab8af2179249183a33059f22e1d9b2","url":"./archives/2019/11/index.html"},{"revision":"605a2ba4f57579cc05e6772784259551","url":"./archives/2019/12/index.html"},{"revision":"7af0e58f4ae9d329bb6de86909fde07d","url":"./archives/2019/index.html"},{"revision":"11d1e049a143895f0c9d95c00eb026de","url":"./archives/2020/09/index.html"},{"revision":"c1ec899af0d768009059c448b4d4b1bd","url":"./archives/2020/index.html"},{"revision":"b6eef5ec7c46b49517a3c773fca47fcd","url":"./archives/2021/02/index.html"},{"revision":"e8734c031529d09850e1e1e90f6927a1","url":"./archives/2021/03/index.html"},{"revision":"6f67ea5acf8a75016d2150576843668c","url":"./archives/2021/04/index.html"},{"revision":"415fb36afed91958c3fd19a31803af87","url":"./archives/2021/05/index.html"},{"revision":"ed6e77ac4b2bc5ccecf4ecf2b2b2eba8","url":"./archives/2021/index.html"},{"revision":"c426937685354adde3c8e956a47c306f","url":"./archives/index.html"},{"revision":"9e6917d3030a567ab363ab53f3a966fc","url":"./archives/page/2/index.html"},{"revision":"c19271e2c12749f81f45dd67eab51168","url":"./categories/index.html"},{"revision":"8ff5b73d449eb16440c79e538b80c812","url":"./categories/译文/index.html"},{"revision":"b5b0b748dffa774299abfb75228c2f5f","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d9befb7757a836cdd03b1fab91a085a4","url":"./index.html"},{"revision":"fddd31653e64e5cb8859625e4c1a08da","url":"./js/duration.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"56666b8c3ab0da477237f1ae2d94c73f","url":"./page/2/index.html"},{"revision":"f651798c946af32bbba62daacc92bbab","url":"./pwa/manifest.json"},{"revision":"48fdf1e6fbe31d31f0495c8c7dd706fa","url":"./tags/CSS/index.html"},{"revision":"4ff16a2f1efc1f0f973571f9553c57ab","url":"./tags/index.html"},{"revision":"28f4a934b3f2b596b3d3d71b4e7e5492","url":"./tags/javascript/index.html"},{"revision":"f6ac1a4ff2fa803d583bd6f2189026bd","url":"./tags/react-native/index.html"},{"revision":"d01f04ee1b81f3d87bf6137262b310f3","url":"./tags/RN/index.html"},{"revision":"872f96645d147e2a08fc4629f9dbca29","url":"./tags/vue/index.html"},{"revision":"60568670c5b40a7963d29887a8de4df4","url":"./tags/目录/index.html"}], {
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
