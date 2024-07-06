import { c as create_ssr_component, b as add_attribute } from './ssr-BNFyIjdB.js';

const avatar = "/_app/immutable/assets/avatar.4ROL9QmQ.jpg";
const css = {
  code: '.svelte-6plkuq.svelte-6plkuq{font-family:"Calibri"}header.svelte-6plkuq.svelte-6plkuq{padding:0}p.svelte-6plkuq.svelte-6plkuq{font-size:300%;text-align:center}#sidebar.svelte-6plkuq.svelte-6plkuq{width:15%;height:100%;position:fixed;top:0;left:0;float:left;background-color:#ECC8AF;color:white;text-align:center;box-shadow:0 4px 100px rgba(0, 0, 0, 0.2);border-bottom-right-radius:20px;border-top-right-radius:20px}#sidebar.svelte-6plkuq>footer.svelte-6plkuq{position:absolute;bottom:0}#sidebar.svelte-6plkuq>.svelte-6plkuq{margin:10%;color:#413934}#avatar-label.svelte-6plkuq.svelte-6plkuq{margin-top:0}#sidebar-nav.svelte-6plkuq.svelte-6plkuq{margin-top:30%}#sidebar-nav.svelte-6plkuq>a.svelte-6plkuq{display:block;margin-bottom:10px;font-size:180%}#avatar-image.svelte-6plkuq.svelte-6plkuq{margin-bottom:1%;width:80%;border-radius:50%;border-width:10px}',
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import avatar from \\"../lib/images/avatar.jpg\\";\\nexport const prerender = true;\\n<\/script>\\n\\n<aside id=\\"sidebar\\">\\n    <header>\\n        <img id=\\"avatar-image\\" src={avatar} alt=\\"avatar\\">\\n        <p id=\\"avatar-label\\">Stepan Dementev</p>\\n        <nav id=\\"sidebar-nav\\">\\n            <a href=\\".\\">Hello!</a>\\n            <a href=\\"./about\\">About Me</a>\\n            <a href=\\"./skills\\">Skills</a>\\n            <a href=\\"./projects\\">Projects</a>\\n            <a href=\\"./contact\\">Contact with me</a>\\n            <a href=\\"./comic\\">Comic</a>\\n        </nav>\\n    </header>\\n\\n    <footer>\\n        Created at Innopolis University\\n    </footer>\\n</aside>\\n\\n<slot />\\n\\n<style>\\n    * {\\n        font-family: \\"Calibri\\";\\n    }\\n\\n    header {\\n        padding: 0;\\n    }\\n\\n    p {\\n        font-size: 300%;\\n        text-align: center;\\n    }\\n\\n    #sidebar {\\n        width: 15%;\\n        height: 100%;\\n        position: fixed;\\n        top: 0;\\n        left: 0;\\n        float: left;\\n        background-color: #ECC8AF;\\n        color: white;\\n        text-align: center;\\n        box-shadow: 0 4px 100px rgba(0, 0, 0, 0.2);\\n        border-bottom-right-radius: 20px;\\n        border-top-right-radius: 20px;\\n    }\\n\\n    #sidebar > footer {\\n        position: absolute;\\n        bottom: 0;\\n    }\\n\\n    #sidebar > * {\\n        margin: 10%;\\n        color: #413934;\\n    }\\n\\n    #avatar-label {\\n        margin-top: 0;\\n    }\\n\\n    #sidebar-nav {\\n        margin-top: 30%;\\n    }\\n\\n    #sidebar-nav > a {\\n        display: block;\\n        margin-bottom: 10px;\\n        font-size: 180%;\\n    }\\n\\n\\n    #avatar-image {\\n        margin-bottom: 1%;\\n        width: 80%;\\n        border-radius: 50%;\\n        border-width: 10px;\\n    }\\n</style>"],"names":[],"mappings":"AA0BI,4BAAE,CACE,WAAW,CAAE,SACjB,CAEA,kCAAO,CACH,OAAO,CAAE,CACb,CAEA,6BAAE,CACE,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MAChB,CAEA,oCAAS,CACL,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC1C,0BAA0B,CAAE,IAAI,CAChC,uBAAuB,CAAE,IAC7B,CAEA,sBAAQ,CAAG,oBAAO,CACd,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CACZ,CAEA,sBAAQ,CAAG,cAAE,CACT,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,OACX,CAEA,yCAAc,CACV,UAAU,CAAE,CAChB,CAEA,wCAAa,CACT,UAAU,CAAE,GAChB,CAEA,0BAAY,CAAG,eAAE,CACb,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,IACf,CAGA,yCAAc,CACV,aAAa,CAAE,EAAE,CACjB,KAAK,CAAE,GAAG,CACV,aAAa,CAAE,GAAG,CAClB,YAAY,CAAE,IAClB"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0) $$bindings.prerender(prerender);
  $$result.css.add(css);
  return `<aside id="sidebar" class="svelte-6plkuq" data-svelte-h="svelte-1m675fa"><header class="svelte-6plkuq"><img id="avatar-image"${add_attribute("src", avatar, 0)} alt="avatar" class="svelte-6plkuq"> <p id="avatar-label" class="svelte-6plkuq">Stepan Dementev</p> <nav id="sidebar-nav" class="svelte-6plkuq"><a href="." class="svelte-6plkuq">Hello!</a> <a href="./about" class="svelte-6plkuq">About Me</a> <a href="./skills" class="svelte-6plkuq">Skills</a> <a href="./projects" class="svelte-6plkuq">Projects</a> <a href="./contact" class="svelte-6plkuq">Contact with me</a> <a href="./comic" class="svelte-6plkuq">Comic</a></nav></header> <footer class="svelte-6plkuq">Created at Innopolis University</footer></aside> ${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-DBd-fqjY.js.map
