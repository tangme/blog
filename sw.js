const workboxVersion = "6.1.5";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
	prefix: "T blog",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"15212e12d60f2c153571a8b366d5eb42","url":"./2018/04/25/CSSLint-目录/index.html"},{"revision":"946ff90e4a9a29c66329fd41dbafa248","url":"./2018/04/27/JS-Array-常用方法/index.html"},{"revision":"169299ec5f3858b02893c4b492b85a0b","url":"./2018/06/04/VUE中的-methods-computed-watch/index.html"},{"revision":"b9f4e20c0f87aede5a0d80e9e2e293bb","url":"./2018/06/07/JS-网传问题回顾/index.html"},{"revision":"d39a8976003715db5db7d47a83c1fb2c","url":"./2018/08/01/JS-Date-总结/index.html"},{"revision":"88f6541b61dad02cfd3be8ef4bb9e012","url":"./2019/11/26/推荐安装Chrome扩展程序/index.html"},{"revision":"3d8ae86a0d0d37f723a9616a4b61fdae","url":"./2019/11/28/Vue与Electron成长记/index.html"},{"revision":"a731f83a116255df1b26b74b5d5327e0","url":"./2019/12/09/nodejs-相关/index.html"},{"revision":"f34679fedae15b97e4c3c3edc4950f07","url":"./2020/09/16/我的效率软件/index.html"},{"revision":"dbee6379746930bc8115381be6da53be","url":"./2021/02/18/JS图片分析开源包/index.html"},{"revision":"fdfd32f2ffc1fa40fd1f922d85c2fc88","url":"./2021/03/01/微信小程序/index.html"},{"revision":"293b7cf1106e6d9ba89a9c71bb321b1b","url":"./2021/03/11/hello-world/index.html"},{"revision":"a8a0c06fe90bca8a48ceecf1d9ddb78d","url":"./2021/03/11/RN-相关/index.html"},{"revision":"0fe1070d098ffaa973599607ea01c959","url":"./2021/03/19/CSS-制作图形小知识/index.html"},{"revision":"20a5ffb7a61ea7a0397b2465497a7d1b","url":"./2021/03/25/Flex-布局/index.html"},{"revision":"e828ad6d814524e0813caf6af558fce2","url":"./2021/04/06/买房相关/index.html"},{"revision":"8b5e826d00dc8e4ba810e650ebd782e0","url":"./2021/04/20/如何使用WSL/index.html"},{"revision":"76e7d133635be6febbf323dcc26c6123","url":"./2021/05/08/Linux常识扫盲/index.html"},{"revision":"32a8b26bcd772536b0ab7d3d28ff7f14","url":"./2021/07/13/编程相关概念/index.html"},{"revision":"2f5bf72e9f646623bedb117a62015301","url":"./2021/07/14/JS实用代码块/index.html"},{"revision":"a701bc7c61a7ab8e6b4eb1ce503fe2ab","url":"./2021/07/15/JS类库推荐/index.html"},{"revision":"54efa8cec9fd5f26d9a2366b954fe46f","url":"./2021/08/26/VSCode笔记/index.html"},{"revision":"200ce81b540471c4b05dee1b2ca00f42","url":"./404.html"},{"revision":"2f552e174fe924a2de566a98e3a235d2","url":"./about/index.html"},{"revision":"cb9baa24ca4a8c77c269923c3ce0073c","url":"./archives/2018/04/index.html"},{"revision":"2f69732ae1b55b5fc9576193a42eb64d","url":"./archives/2018/06/index.html"},{"revision":"7ecb0960e8185880e09d66563c721b96","url":"./archives/2018/08/index.html"},{"revision":"0d1581bd3fc7889fd14dd796e56185d3","url":"./archives/2018/index.html"},{"revision":"a31e707a547c66834d9c00407246e31d","url":"./archives/2019/11/index.html"},{"revision":"a33ca68c75678947afb7ea81e5417203","url":"./archives/2019/12/index.html"},{"revision":"9b7b92f908575dfa878e5bea4a11a05e","url":"./archives/2019/index.html"},{"revision":"fd233852c64e606c229706c226f5066e","url":"./archives/2020/09/index.html"},{"revision":"a4aa074f7c8761242e995e0145964444","url":"./archives/2020/index.html"},{"revision":"9935f22ff8af14c3a12a1e2fb6cf8a16","url":"./archives/2021/02/index.html"},{"revision":"f28f201f768f24e729ee429419e2f6c6","url":"./archives/2021/03/index.html"},{"revision":"35efeaa8517adc7cdb456f539c8532e4","url":"./archives/2021/04/index.html"},{"revision":"0f0f24c24ffd8f0f31267e76a0aa08f5","url":"./archives/2021/05/index.html"},{"revision":"f97d5dd9eace95b8d291482a196a371d","url":"./archives/2021/07/index.html"},{"revision":"d1352e9b882aaf8791de06dbae7e70c7","url":"./archives/2021/08/index.html"},{"revision":"83c41396659f8979d0ab4856e67bcf59","url":"./archives/2021/index.html"},{"revision":"e0fc2536ee9f9056f62b1e67496e69f7","url":"./archives/2021/page/2/index.html"},{"revision":"833e149f0e0f3c55f35f8d5355ab680b","url":"./archives/index.html"},{"revision":"63907b5c5a98b7c13eef7acfd2135e35","url":"./archives/page/2/index.html"},{"revision":"0681e748099c30b2f3bedff4c70e1be1","url":"./archives/page/3/index.html"},{"revision":"65ad6231d2e75dba750a50cedc571d0a","url":"./categories/index.html"},{"revision":"ab78e8cb5aaf0d0f21d93ef77d02b7a0","url":"./categories/译文/index.html"},{"revision":"e8fe4cb1c47b16dcc2160e580ac1bb8f","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"5a37f98fbbb14be742553a9a25c17582","url":"./index.html"},{"revision":"fddd31653e64e5cb8859625e4c1a08da","url":"./js/duration.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"5bf6a1cd38127c40e7f8fb8154bf62ee","url":"./link/index.html"},{"revision":"8f83aa63f8045793bda8d9784f1a9b96","url":"./page/2/index.html"},{"revision":"c64993b0ceacbb78c27fd684184e442a","url":"./page/3/index.html"},{"revision":"f651798c946af32bbba62daacc92bbab","url":"./pwa/manifest.json"},{"revision":"c04d657b8005a9b7e02898e61b19485d","url":"./tags/CSS/index.html"},{"revision":"396afa0367e3907a046c33b9f7c710b2","url":"./tags/index.html"},{"revision":"7e82c836f7941a2aec5fbf3d30ee02b3","url":"./tags/javascript/index.html"},{"revision":"56f2656eca643f1b90b95b40d7dd347b","url":"./tags/react-native/index.html"},{"revision":"46ef36ebb40db677d46da1480ccef6ca","url":"./tags/RN/index.html"},{"revision":"297f2ec3d9d341b31a2e77eb90f766cb","url":"./tags/vue/index.html"},{"revision":"28966d2bb5784d1b332419607ae181af","url":"./tags/目录/index.html"}], {
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
