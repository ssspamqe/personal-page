import { e as error } from './index-CvuFLVuQ.js';

async function load({ fetch }) {
  const res = await fetch("/api/comic").then();
  let comic = await res.json();
  if (res.ok) return comic;
  throw error(500);
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CqhgCblV.js')).default;
const universal_id = "src/routes/comic/+page.ts";
const imports = ["_app/immutable/nodes/4.DRG1yT6i.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.Cewbzyqj.js","_app/immutable/chunks/index.DeFMAK_U.js"];
const stylesheets = ["_app/immutable/assets/styles.BWpLtoxl.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-D29o3z93.js.map
