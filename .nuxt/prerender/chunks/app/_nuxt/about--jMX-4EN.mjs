import { gsap } from 'file:///Users/diaks/PortfolioV2/node_modules/gsap/dist/gsap.js';
import Atropos from 'file:///Users/diaks/PortfolioV2/node_modules/atropos/atropos.mjs';
import { mergeProps, useSSRContext } from 'file:///Users/diaks/PortfolioV2/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///Users/diaks/PortfolioV2/node_modules/vue/server-renderer/index.mjs';
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
    const profil = (void 0).querySelector(".profil");
    gsap.to(circle, {
      scale: 1.1,
      // Déformer le cercle pour simuler un battement de cœur
      repeat: -1,
      // Répéter l'animation indéfiniment
      yoyo: true,
      // Inverser l'animation à chaque itération
      duration: 0.8,
      // Durée d'un battement de cœur (en secondes)
      ease: "power2.inOut"
    });
    gsap.from(profil, {
      x: -400,
      opacity: 0,
      duration: 2,
      delay: 0,
      ease: "bounce.out"
    });
    Atropos({
      el: ".my-atropos",
      rotateLock: true,
      activeOffset: 40,
      shadowScale: 1,
      shadowOffset: 10,
      rotateYMax: 30
      // rest of parameters
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "atropos my-atropos" }, _attrs))} data-v-d2166212><div class="atropos-scale" data-v-d2166212><div class="atropos-rotate" data-v-d2166212><div class="atropos-inner" data-v-d2166212><div class="profil" data-v-d2166212><div class="infos" data-v-d2166212><h3 data-v-d2166212>Nom:</h3><p data-v-d2166212>Diakite</p><h3 data-v-d2166212>Pr\xE9nom:</h3><p data-v-d2166212>Moussa</p><h3 data-v-d2166212>\xC2ge:</h3><p data-v-d2166212>21 ans</p></div><div class="mail" data-v-d2166212><h3 data-v-d2166212>Email:</h3><p data-v-d2166212>diakitemoussaweb@gmail.com</p></div><div class="tel" data-v-d2166212><h3 data-v-d2166212>T\xE9l\xE9phone:</h3><p data-v-d2166212>07 00 00 00 00</p></div><div class="bio" data-v-d2166212><h3 data-v-d2166212>D\xE9scription:</h3><p data-v-d2166212>Il aime associer ses deux passions : le d\xE9veloppement web et la photographie dans ses projets.<br data-v-d2166212> Il est de nature curieux, attentif et rigoureux, des qualit\xE9s qu\u2019il sait mettre au service de son travail.</p></div><div class="wanted" data-v-d2166212><h3 data-v-d2166212>Recherche:</h3><p data-v-d2166212>Un poste de d\xE9veloppeur front-end</p></div><div class="reward" data-v-d2166212><h3 data-v-d2166212>R\xE9compense:</h3><p data-v-d2166212>Un d\xE9veloppeur front curieux attentif avec une bonne capacit\xE9 d\u2019adaptation afin de r\xE9aliser les taches qui lui seront confi\xE9s</p></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d2166212"]]);

export { about as default };
//# sourceMappingURL=about--jMX-4EN.mjs.map
