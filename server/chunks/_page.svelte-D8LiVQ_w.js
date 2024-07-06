import { c as create_ssr_component } from './ssr-BNFyIjdB.js';

/* empty css                     */
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0) $$bindings.prerender(prerender);
  return `<main data-svelte-h="svelte-h1j389"><div class="structure-part" id="projects-part"><h1>Projects</h1> <ul><li><p><a href="https://github.com/ssspamqe/Link-Tracker"><b>Link-Tracker</b></a>
                    an application consisting of two services - Telegram bot and Scrapper
                    (an application that checks resource updates using links stored in PostgreSQL). The client
                    registers in Bot, sends links to the GitHub repository or a question on StackOverflow and
                    receives information about, for example, new answers to a question or a new commit directly in
                    the messenger. Communication between the services is implemented through the Rest API and Kafka.
                    There
                    is coverage with both unit and integration tests.</p></li> <li><p><a href="https://github.com/ssspamqe/Fractal-Generator"><b>Fractal Generator</b></a>
                    an application written in pure Java language (using Lombok and
                    Junit5), which generates fractal images in the form of concrete files (.png, .jpg, .jpeg).
                    There is a coverage with unit tests. Learn more in README.md file (in Russian).</p></li></ul></div></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D8LiVQ_w.js.map
