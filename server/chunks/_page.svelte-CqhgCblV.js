import { c as create_ssr_component, e as escape, b as add_attribute } from './ssr-BNFyIjdB.js';

/* empty css                     */
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  let { data } = $$props;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0) $$bindings.prerender(prerender);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<main><div id="comic-part" class="structure-part"><h1 id="comic-title">${escape(data.title)}</h1> <img id="comic-image"${add_attribute("src", data.imageSrc, 0)}${add_attribute("alt", data.alt, 0)}> <p id="upload-date">${escape(data.date)}</p></div></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CqhgCblV.js.map
