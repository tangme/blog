const workboxVersion = "6.1.5";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
	prefix: "T blog",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"529957477cab35cebb1fd13d9ae697bd","url":"./2018/04/25/CSSLint-目录/index.html"},{"revision":"f336c4160e7edc5a76fa8b1017ae76b7","url":"./2018/04/27/JS-Array-常用方法/index.html"},{"revision":"cb6f138bfcaf502ac235c7f375cfb754","url":"./2018/06/04/VUE中的-methods-computed-watch/index.html"},{"revision":"642777a8ec4aff30ff7530e5075ed44b","url":"./2018/06/07/JS-网传问题回顾/index.html"},{"revision":"10f3015726470edd22525ca001a73b46","url":"./2018/08/01/JS-Date-总结/index.html"},{"revision":"1ea02c5d0b680d14f66cf958ca0013ae","url":"./2019/11/26/推荐安装Chrome扩展程序/index.html"},{"revision":"dce09c66f29a4d1c8aa3900c25e82f8f","url":"./2019/11/28/Vue与Electron成长记/index.html"},{"revision":"1ef117a6d0a2812e4aae013f92919a5d","url":"./2019/12/09/nodejs-相关/index.html"},{"revision":"aadc8d19a07eacb556a13204400e7281","url":"./2020/09/16/我的效率软件/index.html"},{"revision":"e2d5237b62bdf4732c30de9cbfdde8f4","url":"./2021/02/18/JS图片分析开源包/index.html"},{"revision":"b3795dd484b6f814c1260e4f6b68d53f","url":"./2021/03/01/微信小程序/index.html"},{"revision":"9763791b6950e77eb973a00636eae4e8","url":"./2021/03/11/hello-world/index.html"},{"revision":"2ea653f3c1ef0dd69482c3a8a25b091e","url":"./2021/03/11/RN-调试/index.html"},{"revision":"4dd3ac5c8cf6fa9c2c19808026c70787","url":"./2021/03/19/CSS-制作图形小知识/index.html"},{"revision":"f45ba049d020e14845d6409241c55d76","url":"./2021/03/25/Flex-布局/index.html"},{"revision":"c67001f16e6c8b72a7d25423a944c3c1","url":"./2021/04/06/买房相关/index.html"},{"revision":"7e0c9922b6370df57db1f8d9131c50e4","url":"./2021/04/20/如何使用WSL/index.html"},{"revision":"6d7829a5d0836d25df545082767167ab","url":"./2021/04/22/每日总结/index.html"},{"revision":"57ed17d24f3e3f0438c4655bbe3bc011","url":"./2021/05/08/Linux常识扫盲/index.html"},{"revision":"e46807497e6013f7f6bc99e39b03db7b","url":"./2021/07/13/编程相关概念/index.html"},{"revision":"1a5b1ebf5edfa1618576e2966e6c3709","url":"./2021/07/14/JS实用代码块/index.html"},{"revision":"7b7fb8fae88e37d3543d2fafb6aa2309","url":"./2021/07/15/JS类库推荐/index.html"},{"revision":"7f432f6fdcfad219be2c037e144216e2","url":"./404.html"},{"revision":"c3d333f18a4ab584081e4cde70570624","url":"./about/index.html"},{"revision":"d263ba2b8ea0b87fb564c4241eec00c2","url":"./archives/2018/04/index.html"},{"revision":"cf5258710ddf09dd857ea9d612f6ec66","url":"./archives/2018/06/index.html"},{"revision":"80e8b6213d580a98881369b8ce588cd5","url":"./archives/2018/08/index.html"},{"revision":"f66a655696a7cc5c8e53e8a9791a3268","url":"./archives/2018/index.html"},{"revision":"811889af8c880e7a3d428ffa549ada17","url":"./archives/2019/11/index.html"},{"revision":"d1b04948484944f083d1804e9a8bc38f","url":"./archives/2019/12/index.html"},{"revision":"ea60902cacc7ca7bb1c5737f31d7896b","url":"./archives/2019/index.html"},{"revision":"33635c01587be8b5330077e49b932959","url":"./archives/2020/09/index.html"},{"revision":"5eb1f8dda9d146dd2895a2897bea22fa","url":"./archives/2020/index.html"},{"revision":"e5ed542ddd6463eaa539d19c8eff9aea","url":"./archives/2021/02/index.html"},{"revision":"98f3cf98efb0c54946df153e2294cdb7","url":"./archives/2021/03/index.html"},{"revision":"1fa3fef8d6738323d23ba11720cf180c","url":"./archives/2021/04/index.html"},{"revision":"08e1a70554c1f3680a199cbbb8246779","url":"./archives/2021/05/index.html"},{"revision":"7621b75c39b54941d8d38cdbcbcb7b56","url":"./archives/2021/07/index.html"},{"revision":"cdcf8c6aa30cde35439106854f1f6978","url":"./archives/2021/index.html"},{"revision":"b3f27b524f21f736c6ccd6acff026ad7","url":"./archives/2021/page/2/index.html"},{"revision":"4d8c789c9fc781bb58e1ba6bb553a72b","url":"./archives/index.html"},{"revision":"a2ebe3a025a292f69ac1d6c23fdd1bde","url":"./archives/page/2/index.html"},{"revision":"d42fd7cddfaa1a1349fca5c867027cb2","url":"./archives/page/3/index.html"},{"revision":"70c745deb43bb90e04e4057c86c23602","url":"./categories/index.html"},{"revision":"09e2b75169dcfbf62ecf41b73481cd7c","url":"./categories/译文/index.html"},{"revision":"e8fe4cb1c47b16dcc2160e580ac1bb8f","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"5aaeef652a8619e9f8595b3093875845","url":"./index.html"},{"revision":"fddd31653e64e5cb8859625e4c1a08da","url":"./js/duration.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"e1b5869f7aca5f6bcb05c84fd52ac399","url":"./link/index.html"},{"revision":"e06cf79d899727869cf2e403ad7be24a","url":"./page/2/index.html"},{"revision":"344c242e085a78efbccdb7203503ad6c","url":"./page/3/index.html"},{"revision":"f651798c946af32bbba62daacc92bbab","url":"./pwa/manifest.json"},{"revision":"fd10f09f7f0f3e2aeb034a5c137f3290","url":"./tags/CSS/index.html"},{"revision":"c1a5e1d6c345de51c7892c6d985f82c2","url":"./tags/index.html"},{"revision":"673558de3bf8f44fe3f06722a7d879cd","url":"./tags/javascript/index.html"},{"revision":"1000d86882caefb8fe24574ebe48a534","url":"./tags/react-native/index.html"},{"revision":"7ea3965e9abc46d6e63e40c3b403faf2","url":"./tags/RN/index.html"},{"revision":"ad90a343b7c9d61bcb2911d789b4af10","url":"./tags/vue/index.html"},{"revision":"0a968e170dfd564254ccd011be422283","url":"./tags/目录/index.html"}], {
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
