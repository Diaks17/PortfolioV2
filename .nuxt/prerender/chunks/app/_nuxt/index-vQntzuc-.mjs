import { gsap } from 'file:///Users/diaks/PortfolioV2/node_modules/gsap/dist/gsap.js';
import { useSSRContext } from 'file:///Users/diaks/PortfolioV2/node_modules/vue/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/hookable/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/unctx/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/h3/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/unhead/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/defu/dist/defu.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/vue/server-renderer/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/destr/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/scule/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/klona/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/ohash/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/diaks/PortfolioV2/node_modules/pathe/dist/index.mjs';

const _sfc_main = {
  mounted() {
    const circle = (void 0).querySelector(".circle");
    gsap.to(circle, {
      scale: 1.1,
      // Déformer le cercle pour simuler un battement de cœur
      repeat: -1,
      // Répéter l'animation indéfiniment
      yoyo: true,
      // Inverser l'animation à chaque itération
      duration: 0.5,
      // Durée d'un battement de cœur (en secondes)
      ease: "power2.inOut"
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6fe8f026"]]);

export { index as default };
//# sourceMappingURL=index-vQntzuc-.mjs.map
