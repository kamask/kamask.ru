export const manifest = {
	appDir: "runtime",
	assets: new Set(["android-chrome-192x192.png","android-chrome-256x256.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","fonts/OpenSans-Bold.woff","fonts/OpenSans-Bold.woff2","fonts/OpenSans-Light.woff","fonts/OpenSans-Light.woff2","fonts/OpenSans-Regular.woff","fonts/OpenSans-Regular.woff2","mstile-150x150.png","safari-pinned-tab.svg","site.webmanifest"]),
	_: {
		mime: {".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".woff":"font/woff",".woff2":"font/woff2",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
		entry: {"file":"start-1ff6e34c.js","js":["start-1ff6e34c.js","chunks/vendor-bbe84225.js"],"css":["assets/start-61d1577b.css"]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/404\/?$/,
				params: null,
				path: "/404",
				a: [3,4],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/cp\/?$/,
				params: null,
				path: "/cp",
				a: [0,5],
				b: [1]
			}
		]
	}
};
