const workboxVersion = "6.1.5";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
	prefix: "T blog",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"fa14c9d7fd246cc597bededda32a36cf","url":"./2018/04/25/CSSLint-目录/index.html"},{"revision":"515184d35faa8469e089c4f9a0d381e4","url":"./2018/04/27/JS-Array-常用方法/index.html"},{"revision":"c837056ae0422cc753ac23c687f0b5df","url":"./2018/06/04/VUE中的-methods-computed-watch/index.html"},{"revision":"6c7f3c904cc30f64d55fdc970b9cb214","url":"./2018/06/07/JS-网传问题回顾/index.html"},{"revision":"c6b0040a9d40791301635b0bedce2178","url":"./2018/08/01/JS-Date-总结/index.html"},{"revision":"7f8b99e52b8b717c1879defb3cc86590","url":"./2019/11/26/推荐安装Chrome扩展程序/index.html"},{"revision":"5178ab4bc1ac20d4a3843a0609baa502","url":"./2019/11/28/Vue与Electron成长记/index.html"},{"revision":"5c1592c15480f2ad2b0c88e383056ed7","url":"./2019/12/09/nodejs-相关/index.html"},{"revision":"bc877f740d03f7e2164e53ec8dc316f0","url":"./2020/09/16/我的效率软件/index.html"},{"revision":"bdf2fb7400070191b1bb564d7785b0b2","url":"./2021/02/18/JS图片分析开源包/index.html"},{"revision":"9a6bf7a53eeb86d75572d09540822cf2","url":"./2021/03/01/微信小程序/index.html"},{"revision":"83dc0e5f8e54c8bea220d78620518a08","url":"./2021/03/11/hello-world/index.html"},{"revision":"c07e76c01e10aa4670d35cce7683cf75","url":"./2021/03/11/RN-相关/index.html"},{"revision":"2a4724ca3a7dac6401280ed11b099b48","url":"./2021/03/19/CSS-制作图形小知识/index.html"},{"revision":"39804100d17c8c1e3c3068fce6fed910","url":"./2021/03/25/Flex-布局/index.html"},{"revision":"1d4d396c24b77fe2a182b7c24c234447","url":"./2021/04/06/买房相关/index.html"},{"revision":"9c9c54adbd3257aa43b12f07fb2b7c34","url":"./2021/04/20/如何使用WSL/index.html"},{"revision":"bffab54b71b882617600c5ce93bb4001","url":"./2021/04/22/每日总结/index.html"},{"revision":"658e3ae75993b6cae35403fe2b4800c9","url":"./2021/05/08/Linux常识扫盲/index.html"},{"revision":"e2145e51b5598fe40e8a054227168e0f","url":"./2021/07/13/编程相关概念/index.html"},{"revision":"629a49e141b14c97f20562ec2c5e4fef","url":"./2021/07/14/JS实用代码块/index.html"},{"revision":"edd9d94a8dbb246335ae71ff20565ef6","url":"./2021/07/15/JS类库推荐/index.html"},{"revision":"2a0eb47a1a2e5db684e87b584db7510f","url":"./2021/08/26/VSCode笔记/index.html"},{"revision":"f908b62afb069080b7f45ee4dff30445","url":"./404.html"},{"revision":"b832b3c10312ff186b6dd9ab619fd5b3","url":"./about/index.html"},{"revision":"a677c4017c38cbd9d39c70a4d2eb17d6","url":"./archives/2018/04/index.html"},{"revision":"43f8bee0b69670e9dd0205d9ea751e26","url":"./archives/2018/06/index.html"},{"revision":"2e1f50091b18eec4020a7142f539da55","url":"./archives/2018/08/index.html"},{"revision":"8c799241bfcab076b87f18f6e27427cc","url":"./archives/2018/index.html"},{"revision":"baf35af7cb2297c68ef595809767203d","url":"./archives/2019/11/index.html"},{"revision":"1ba37f4eb34da1b8f219ab2dc6b9c7fc","url":"./archives/2019/12/index.html"},{"revision":"ddb8e7500fff48e76367506b91d69516","url":"./archives/2019/index.html"},{"revision":"c7e7467af6aafa505e86c94ab2d0d636","url":"./archives/2020/09/index.html"},{"revision":"fad60fe63ad6773fb9292d38dfff7e7d","url":"./archives/2020/index.html"},{"revision":"97a9887ba6cf64497ecdb535a7db602b","url":"./archives/2021/02/index.html"},{"revision":"c4b819e7d5f1c27a513ec662f1105351","url":"./archives/2021/03/index.html"},{"revision":"0e7a0673fc24389beabdedce0df233b6","url":"./archives/2021/04/index.html"},{"revision":"0c422254d3ab8531630817f3f86b2cd6","url":"./archives/2021/05/index.html"},{"revision":"ce4e5480d4b3c81c0e1f98d1d28ec4d7","url":"./archives/2021/07/index.html"},{"revision":"1c876c82843b1bec3e72fbf08b7c6901","url":"./archives/2021/08/index.html"},{"revision":"95916e2cce506bdf84df6fb58076913b","url":"./archives/2021/index.html"},{"revision":"e4d82750a8be7b5b6d83c2442d89f311","url":"./archives/2021/page/2/index.html"},{"revision":"075b0ff6b513db61b6ca1359f0a3f40b","url":"./archives/index.html"},{"revision":"d4a6b4636635a7577e8db583e3a91dda","url":"./archives/page/2/index.html"},{"revision":"577543232876b94e9c2dd1b9fecf2720","url":"./archives/page/3/index.html"},{"revision":"2d8d70856f6a134f934b545e4b9332a4","url":"./categories/index.html"},{"revision":"3445b59f1000342903a4e22335184105","url":"./categories/译文/index.html"},{"revision":"e8fe4cb1c47b16dcc2160e580ac1bb8f","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"3c713512aad4a16dcc522386e92d31ee","url":"./index.html"},{"revision":"fddd31653e64e5cb8859625e4c1a08da","url":"./js/duration.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"210a7a1a9370a613440d8afbc0b920e7","url":"./link/index.html"},{"revision":"5f76eda5e7332ef40e25697838a91e5b","url":"./page/2/index.html"},{"revision":"253864b7d47377d30036870e587bd579","url":"./page/3/index.html"},{"revision":"f651798c946af32bbba62daacc92bbab","url":"./pwa/manifest.json"},{"revision":"98f749c3372d97732860120a702b048b","url":"./tags/CSS/index.html"},{"revision":"ac5f5732d91b01a29657443a62163bc3","url":"./tags/index.html"},{"revision":"8cf0cd4324992346994cc9062710f492","url":"./tags/javascript/index.html"},{"revision":"e2648034738a5a9e440968c18269398b","url":"./tags/react-native/index.html"},{"revision":"eeb2c1338cf6307cd5d4fa9900a1fcca","url":"./tags/RN/index.html"},{"revision":"9a0a116caf6509ea3416b576e1e78f03","url":"./tags/vue/index.html"},{"revision":"37b9022ae4f059a8d5308c35ffbfcf8e","url":"./tags/目录/index.html"}], {
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
