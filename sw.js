const workboxVersion = "6.1.5";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
	prefix: "tanglv",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4740b04eab91009ca29e6500f63a9f10","url":"./2018/04/25/CSSLint-目录/index.html"},{"revision":"b2353b78ab8e8e778287b6a6b8ff6a06","url":"./2018/04/27/JS-Array-常用方法/index.html"},{"revision":"315459c1f455ab2ada4b7b26c0642e22","url":"./2018/06/04/VUE中的-methods-computed-watch/index.html"},{"revision":"4ddf88fa052d611c0ef19d11883397b5","url":"./2018/06/07/JS-网传问题回顾/index.html"},{"revision":"f3bfb473eeeb8d83848ecb7de035612f","url":"./2018/08/01/JS-Date-总结/index.html"},{"revision":"4ba9905ebe01c8c69dc622dab442f0e7","url":"./2019/11/26/推荐安装Chrome扩展程序/index.html"},{"revision":"df4b999961cf5d52b92c6cc52446554c","url":"./2019/11/28/Vue与Electron成长记/index.html"},{"revision":"79c827b6866f7f0fd13e7015ba8a740c","url":"./2019/12/09/nodejs-相关/index.html"},{"revision":"bb4eef32f7e3d1f4330ad9a85587e891","url":"./2020/09/16/我的效率软件/index.html"},{"revision":"3b852435ccfc296b1acd11abafca7a10","url":"./2021/02/18/JS图片分析开源包/index.html"},{"revision":"0f4111fc55f18799865420792e48297d","url":"./2021/03/01/微信小程序/index.html"},{"revision":"b9621e533d48bf25f365846cd8393eb0","url":"./2021/03/11/hello-world/index.html"},{"revision":"24f3ede15d8dcda1ff8e56aa8c764ecb","url":"./2021/03/11/RN-调试/index.html"},{"revision":"b2cd586eaa00d628da2f52faf0321e22","url":"./2021/03/19/CSS-制作图形小知识/index.html"},{"revision":"2dfbdd364bb1204d60d424c2e0e2ba11","url":"./2021/03/25/Flex-布局/index.html"},{"revision":"d7d3ebd4908729c4f899d889860b988e","url":"./2021/04/06/买房相关/index.html"},{"revision":"4092cb5ee57482ce496a1a8386e04262","url":"./2021/04/20/如何使用WSL/index.html"},{"revision":"3fe7e7d98efa67a95aa35e702aef3ce0","url":"./2021/04/22/每日总结/index.html"},{"revision":"9a62c86317c15b89872335a32e8d7e21","url":"./2021/05/08/Linux常识扫盲/index.html"},{"revision":"c0bcd5edcc2fa4fb7a91a2580138201a","url":"./about/index.html"},{"revision":"56d1d611ffe7376c3d4682433edb65dc","url":"./archives/2018/04/index.html"},{"revision":"7eae1594118b9f37298a7d8eef10c7a2","url":"./archives/2018/06/index.html"},{"revision":"ad2dad456ba92f6eb87442ad3a9f4708","url":"./archives/2018/08/index.html"},{"revision":"a116cd024dce634276d499eb2288c2ec","url":"./archives/2018/index.html"},{"revision":"a46120f3322419d67aa60a26dc33da54","url":"./archives/2019/11/index.html"},{"revision":"5ff9c155a95995770ade093b584733c5","url":"./archives/2019/12/index.html"},{"revision":"a060aee3c778a4d227aa570eb0c4196e","url":"./archives/2019/index.html"},{"revision":"67c5c159f2ea9157c3a3cd4901901e31","url":"./archives/2020/09/index.html"},{"revision":"7cab1f572361e7ebd93e6454d47f4cdb","url":"./archives/2020/index.html"},{"revision":"546f9444725dae78ed6b16cb31c4a124","url":"./archives/2021/02/index.html"},{"revision":"6b9b02e15d9f9e1cb6213e95d6a43c18","url":"./archives/2021/03/index.html"},{"revision":"36a43463424b57de5cd4278f9e9305ab","url":"./archives/2021/04/index.html"},{"revision":"a9446351aa0d02d8ab3de00472bac98f","url":"./archives/2021/05/index.html"},{"revision":"1d2594a6012256a307f3f29ef91a0ea1","url":"./archives/2021/index.html"},{"revision":"9155fd72d710294d85a9637eaaafafc8","url":"./archives/index.html"},{"revision":"f5c518164f8b794b6137caaeae401874","url":"./archives/page/2/index.html"},{"revision":"6695cbfdc65fa9a9fc1fbe21e39dd257","url":"./categories/index.html"},{"revision":"1c2a3f23f3f30a0dad36bedca70593a3","url":"./categories/译文/index.html"},{"revision":"ec87a1d8e6b45b99ca6b2124e3558b38","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"1c9efde1e528d24ac66081f09f137ce8","url":"./index.html"},{"revision":"fddd31653e64e5cb8859625e4c1a08da","url":"./js/duration.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"485ef626b182006985ec7f92426f55c6","url":"./page/2/index.html"},{"revision":"536662ab0470384be43448845652a625","url":"./pwa/manifest.json"},{"revision":"9561073d2298e099ba5458580a5b99a1","url":"./tags/CSS/index.html"},{"revision":"255f4ff1fb4aa57c5322f896043cc72c","url":"./tags/index.html"},{"revision":"e8540899f9119675f9c42e00fe6dd727","url":"./tags/javascript/index.html"},{"revision":"003e43c7d7292489adcb9bad59a75192","url":"./tags/react-native/index.html"},{"revision":"d113a71237f27230a82da0d80d051556","url":"./tags/RN/index.html"},{"revision":"557b3004b5b901153d7ac56b89566638","url":"./tags/vue/index.html"},{"revision":"272f2a55bebd8cd217014a683e590d62","url":"./tags/目录/index.html"}], {
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
