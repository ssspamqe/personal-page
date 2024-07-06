const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.D74TI86p.js","app":"_app/immutable/entry/app.lLG-bBLd.js","imports":["_app/immutable/entry/start.D74TI86p.js","_app/immutable/chunks/entry.CqW6MuhG.js","_app/immutable/chunks/scheduler.Cewbzyqj.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.lLG-bBLd.js","_app/immutable/chunks/scheduler.Cewbzyqj.js","_app/immutable/chunks/index.DeFMAK_U.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CSWLmKNP.js')),
			__memo(() => import('./chunks/1-CxFt1E9x.js')),
			__memo(() => import('./chunks/3-CZS9bc3O.js')),
			__memo(() => import('./chunks/4-D29o3z93.js')),
			__memo(() => import('./chunks/5-DPgWQlqM.js')),
			__memo(() => import('./chunks/6-C-WtmO6y.js')),
			__memo(() => import('./chunks/7-cmKtjOHU.js'))
		],
		routes: [
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/comic",
				pattern: /^\/api\/comic\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BK00w3A2.js'))
			},
			{
				id: "/comic",
				pattern: /^\/comic\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/skills",
				pattern: /^\/skills\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
