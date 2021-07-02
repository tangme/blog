const workboxVersion = "6.1.5";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
	prefix: "T blog",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"c3665766410835fa491fad9446e308dc","url":"./2018/04/25/CSSLint-目录/index.html"},{"revision":"a8c91430124294d8e2071b798b3fa5a8","url":"./2018/04/27/JS-Array-常用方法/index.html"},{"revision":"b26e2a2c85cf909619ee1ade195f81ad","url":"./2018/06/04/VUE中的-methods-computed-watch/index.html"},{"revision":"9e7a557dbcd030042f965bfc59d9ae25","url":"./2018/06/07/JS-网传问题回顾/index.html"},{"revision":"9ddc25f63fe7683a17130813972f487c","url":"./2018/08/01/JS-Date-总结/index.html"},{"revision":"7ed2b3c380cae8661f5204773340ef25","url":"./2019/11/26/推荐安装Chrome扩展程序/index.html"},{"revision":"83178b6ba7c8fc4628bb2f88491af0bf","url":"./2019/11/28/Vue与Electron成长记/index.html"},{"revision":"463be84710974fd2a80b4da579733ea6","url":"./2019/12/09/nodejs-相关/index.html"},{"revision":"d3edc15995c295584d6680861e9a0736","url":"./2020/09/16/我的效率软件/index.html"},{"revision":"71a50160dee2361f0ba1822c4786ab32","url":"./2021/02/18/JS图片分析开源包/index.html"},{"revision":"b2b27363863dece4d25343b4f7584f06","url":"./2021/03/01/微信小程序/index.html"},{"revision":"c8c1a65784e53f29313279131548ae94","url":"./2021/03/11/hello-world/index.html"},{"revision":"6edab79c55bbda7905bc3ef01a34bbc9","url":"./2021/03/11/RN-调试/index.html"},{"revision":"c430750291dc46d39049470bf17932d0","url":"./2021/03/19/CSS-制作图形小知识/index.html"},{"revision":"aa99a8437834a90b53128f23eac319ca","url":"./2021/03/25/Flex-布局/index.html"},{"revision":"28818377b8327924d19679f83a11733c","url":"./2021/04/06/买房相关/index.html"},{"revision":"6f8f535f6adf47a9702c8ea32396be09","url":"./2021/04/20/如何使用WSL/index.html"},{"revision":"9a50ea3dfeec28eaaebc3ac8c2c7d7e9","url":"./2021/04/22/每日总结/index.html"},{"revision":"6b4d79e3b05e102e0ef2602edc60c854","url":"./2021/05/08/Linux常识扫盲/index.html"},{"revision":"98fd82b1acfac776c5743452f98ed1df","url":"./404.html"},{"revision":"45885dc0356c3fa65fa98c06cb13e508","url":"./about/index.html"},{"revision":"e4ef65ea40c6c52c61375c1e7477f16b","url":"./archives/2018/04/index.html"},{"revision":"392d50ef8762da8ff87846c689e49276","url":"./archives/2018/06/index.html"},{"revision":"18201d74f3d274096c812ce0b2c486e8","url":"./archives/2018/08/index.html"},{"revision":"a5d13ca5d6f4eb914aa2142b54579d4d","url":"./archives/2018/index.html"},{"revision":"ee7b237b743f77c59898307bbbdbb67a","url":"./archives/2019/11/index.html"},{"revision":"7cb036af9a4c3186b34f670aacfd63b0","url":"./archives/2019/12/index.html"},{"revision":"238b8ca584ceb928cbb6b42dbc8aa62a","url":"./archives/2019/index.html"},{"revision":"a1725105f35941a80fc520fb482231d3","url":"./archives/2020/09/index.html"},{"revision":"eda2e70c66893f7fb52235d3118ad2aa","url":"./archives/2020/index.html"},{"revision":"659f72519a6c1eb58b314a65b8a72cd9","url":"./archives/2021/02/index.html"},{"revision":"8cc9766a710dcd1289381da07b8f32e1","url":"./archives/2021/03/index.html"},{"revision":"d6739211599f12d0b5bf4f1e06f369c2","url":"./archives/2021/04/index.html"},{"revision":"2a2b6470285f3ac53c483416a159f7ee","url":"./archives/2021/05/index.html"},{"revision":"178cf9026f6cadca5bef6ea9c1a0e819","url":"./archives/2021/index.html"},{"revision":"56acd5a004a4d5cdd3917288c8075556","url":"./archives/index.html"},{"revision":"61cf4deb3031dec74d557dd00aaee6d1","url":"./archives/page/2/index.html"},{"revision":"dd2a549a7630c4d9025610b33054870f","url":"./categories/index.html"},{"revision":"2dfd1543507341fac89e68114f7301db","url":"./categories/译文/index.html"},{"revision":"7ca8472f4a40af1a822afab5ef010ff4","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d8bd5c8b2bbd8d3db749a26c2f7b9ede","url":"./index.html"},{"revision":"fddd31653e64e5cb8859625e4c1a08da","url":"./js/duration.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"37219f40d0de7d82d464419eaf5abf1a","url":"./page/2/index.html"},{"revision":"f651798c946af32bbba62daacc92bbab","url":"./pwa/manifest.json"},{"revision":"36c89a33eef500d7c36007dbb0183ec7","url":"./tags/CSS/index.html"},{"revision":"2ffe04febea6b5a6d2cee0591eba7a12","url":"./tags/index.html"},{"revision":"4db80fdcc65228a330e367491922f179","url":"./tags/javascript/index.html"},{"revision":"df92609f93e9759839163e6bc2ec3414","url":"./tags/react-native/index.html"},{"revision":"5578e4e28aec2d44d0856c64468febd0","url":"./tags/RN/index.html"},{"revision":"8543799cd2e9b13a60b9a24b35d7a6bc","url":"./tags/vue/index.html"},{"revision":"3e4ee89367a73a0b71e40ae7335f58f2","url":"./tags/目录/index.html"}], {
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
