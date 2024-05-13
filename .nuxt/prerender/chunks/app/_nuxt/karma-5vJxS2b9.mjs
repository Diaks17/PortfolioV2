import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-kpaqSJk0.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///Users/diaks/PortfolioV2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file:///Users/diaks/PortfolioV2/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/h3/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/devalue/index.js';
import 'file:///Users/diaks/PortfolioV2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/destr/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/hookable/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/scule/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/klona/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/defu/dist/defu.mjs';
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
import 'file:///Users/diaks/PortfolioV2/node_modules/unhead/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/unctx/dist/index.mjs';
import 'file:///Users/diaks/PortfolioV2/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = "" + publicAssetsURL("img/resaweb1.png");
const _imports_1 = "" + publicAssetsURL("img/Home_Page_resa.jpg");
const _imports_2 = "" + publicAssetsURL("img/Form_resa.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "project" }, _attrs))}><div class="resume"><p>Il s\u2019agit d\u2019un projet ou l\u2019on devait faire un site de r\xE9servation d\u2019une gamme de produits, notre site devait imp\xE9rativement avoir un panier afin de r\xE9server les article, c\u2019est comme \xE7a que est n\xE9 mon site Karma</p>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "https://karma.moussa-diakite.fr/",
    class: "project-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Voir site`);
      } else {
        return [
          createTextVNode("Voir site")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "https://karma.diakite.butmmi.o2switch.site/index.php",
    class: "project-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Voir maquette`);
      } else {
        return [
          createTextVNode("Voir maquette")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="project-images"><div class="project-img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="project-img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="project-img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/web/karma.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const karma = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { karma as default };
//# sourceMappingURL=karma-5vJxS2b9.mjs.map
