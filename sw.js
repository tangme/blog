const workboxVersion = "6.1.5";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
	prefix: "T blog",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a6ecac0b628bb230f8f013d9a73780e4","url":"./2018/04/25/CSSLint-目录/index.html"},{"revision":"840cc9066c460bc6acbf16947ff3803b","url":"./2018/04/27/JS-Array-常用方法/index.html"},{"revision":"146e0491e459d27c06c6b56316990e58","url":"./2018/06/04/VUE中的-methods-computed-watch/index.html"},{"revision":"4606e6813816daaeb600a1ff8cea3074","url":"./2018/06/07/JS-网传问题回顾/index.html"},{"revision":"6d3d026e72b2f5bcb5ec5dac73c778dd","url":"./2018/08/01/JS-Date-总结/index.html"},{"revision":"8559b95bcee6527362dd10445f8e1fb1","url":"./2019/11/26/推荐安装Chrome扩展程序/index.html"},{"revision":"d0b23a38a179e03484b950a7bfa77aa0","url":"./2019/11/28/Vue与Electron成长记/index.html"},{"revision":"2049856c4caaf5da953b9e2fbc295c92","url":"./2019/12/09/nodejs-相关/index.html"},{"revision":"512ae8a3ceb2cfc580218adbd28a53b5","url":"./2020/09/16/我的效率软件/index.html"},{"revision":"ca8957014277fa0ccc2a56617dfcdf16","url":"./2021/02/18/JS图片分析开源包/index.html"},{"revision":"33c09954ea483594b874e452b7cc41db","url":"./2021/03/01/微信小程序/index.html"},{"revision":"849799c1179702869175fa1f1a378a4b","url":"./2021/03/11/hello-world/index.html"},{"revision":"7499e95bc97e0c39b86979ac14158a28","url":"./2021/03/11/RN-调试/index.html"},{"revision":"9fc45646577384b15c973ef8c177b8d5","url":"./2021/03/19/CSS-制作图形小知识/index.html"},{"revision":"7891a95696f34c4c3edad1ec74263960","url":"./2021/03/25/Flex-布局/index.html"},{"revision":"83b372993cdc9530bcdc50ef95b31c9d","url":"./2021/04/06/买房相关/index.html"},{"revision":"bf89b229e30628b5a60e4aeb9b034828","url":"./2021/04/20/如何使用WSL/index.html"},{"revision":"cb6ea7bea43513b36905dd8853504d3f","url":"./2021/04/22/每日总结/index.html"},{"revision":"be85c4cf11049d36d596e8bacac9fc1b","url":"./2021/05/08/Linux常识扫盲/index.html"},{"revision":"e71c094188ff6e8e0007e79576f4df59","url":"./404.html"},{"revision":"59fa62921eadb60de83b63e5ed21ecf4","url":"./about/index.html"},{"revision":"bc72f71d1a88828d2ab305645501cf20","url":"./archives/2018/04/index.html"},{"revision":"745981e4ed87dc3babeb91228c830f2f","url":"./archives/2018/06/index.html"},{"revision":"10f082ffe46549df21b4ff82ab5f8b13","url":"./archives/2018/08/index.html"},{"revision":"d0424884fad82b34aaa1b5154b3ab96c","url":"./archives/2018/index.html"},{"revision":"d1cd6415e85d41167e1dbf6208210cba","url":"./archives/2019/11/index.html"},{"revision":"44a14783a0cfa3c89295e98ad51e9128","url":"./archives/2019/12/index.html"},{"revision":"0f406ff1dd55048049f1e68a81ce304f","url":"./archives/2019/index.html"},{"revision":"f6b1d27d52d6c164663e37276b57a8bd","url":"./archives/2020/09/index.html"},{"revision":"a86737968dd261eb2b41dd5db7f80c8d","url":"./archives/2020/index.html"},{"revision":"83a0b8b79865f2f71f7e01b564abe442","url":"./archives/2021/02/index.html"},{"revision":"c9f32054f097228d080186d07d06846f","url":"./archives/2021/03/index.html"},{"revision":"a34f57603ae8088f216a68f6f99d2055","url":"./archives/2021/04/index.html"},{"revision":"2c07c4dd4600456070ac7bbd7da747c1","url":"./archives/2021/05/index.html"},{"revision":"0ab216cbaa4d69f908a84ff5fe6870c9","url":"./archives/2021/index.html"},{"revision":"37a67105bf052b8f84a925b3809538f4","url":"./archives/index.html"},{"revision":"5464f552b042eca0f307b2ec1419837f","url":"./archives/page/2/index.html"},{"revision":"e54278100c4754adf5418a387fb56864","url":"./categories/index.html"},{"revision":"00d0cc3d5de15974080b0d7c11281b22","url":"./categories/译文/index.html"},{"revision":"b5b0b748dffa774299abfb75228c2f5f","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a72f906968c3a5406e1813bd1405d45b","url":"./index.html"},{"revision":"fddd31653e64e5cb8859625e4c1a08da","url":"./js/duration.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"6a9e9637690badb29b26068a98908da6","url":"./page/2/index.html"},{"revision":"f651798c946af32bbba62daacc92bbab","url":"./pwa/manifest.json"},{"revision":"e7ba08d2b934361df3218b8c356c4036","url":"./tags/CSS/index.html"},{"revision":"1fdc874bf825cc9c4079fb584e8f5fb8","url":"./tags/index.html"},{"revision":"a6716232297b73b76f557b608b823025","url":"./tags/javascript/index.html"},{"revision":"2af3589292ab61a2ba468390e48bd4a4","url":"./tags/react-native/index.html"},{"revision":"2685bc9ae4641f72ac6888f4a916e6e9","url":"./tags/RN/index.html"},{"revision":"8d79febdce1c9c9e5eb78ba61da76600","url":"./tags/vue/index.html"},{"revision":"c44fe783661d5553e35478f9a27b6dea","url":"./tags/目录/index.html"}], {
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
