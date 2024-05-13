import { p as publicAssetsURL } from '../../renderer.mjs';
import { mergeProps, useSSRContext } from 'file:///Users/diaks/PortfolioV2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file:///Users/diaks/PortfolioV2/node_modules/vue/server-renderer/index.mjs';
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

const _imports_0 = "" + publicAssetsURL("img/equipe (1).jpg");
const _imports_1 = "" + publicAssetsURL("img/equipe (2).jpg");
const _imports_2 = "" + publicAssetsURL("img/equipe (3).jpg");
const _imports_3 = "" + publicAssetsURL("img/equipe (4).jpg");
const _imports_4 = "" + publicAssetsURL("img/ecpm1 (1).jpg");
const _imports_5 = "" + publicAssetsURL("img/ecpm1 (7).jpg");
const _imports_6 = "" + publicAssetsURL("img/ecpm1 (6).jpg");
const _imports_7 = "" + publicAssetsURL("img/ecpm1 (5).jpg");
const _imports_8 = "" + publicAssetsURL("img/ecpm1 (4).jpg");
const _imports_9 = "" + publicAssetsURL("img/ecpm1 (3).jpg");
const _imports_10 = "" + publicAssetsURL("img/ecpm1 (2).jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "project1",
    class: "project"
  }, _attrs))}><div class="left-part"><p>Il s\u2019agit d\u2019un projet ou l\u2019on devait am\xE9liorer la communication d\u2019une association, pour cela mon \xE9quipe et moi avons choisit l\u2019association ECPM (Ensembles Contre la Peine de Mort), J\u2019ai participer \xE0 la r\xE9alisation des maquettes et \xE0 la cr\xE9ation du site web.</p></div><div class="right-part"><div class="first-part"><div class="team"><img${ssrRenderAttr("src", _imports_0)} alt="" srcset=""><img${ssrRenderAttr("src", _imports_1)} alt="" srcset=""><img${ssrRenderAttr("src", _imports_2)} alt="" srcset=""><img${ssrRenderAttr("src", _imports_3)} alt="" srcset=""></div></div><div class="second-part ecpm"><img${ssrRenderAttr("src", _imports_4)} alt="" srcset=""><img${ssrRenderAttr("src", _imports_5)} alt="" srcset=""><img${ssrRenderAttr("src", _imports_6)} alt="" srcset=""></div><div class="third-part ecpm"><img${ssrRenderAttr("src", _imports_7)} alt="" srcset=""><img${ssrRenderAttr("src", _imports_8)} alt="" srcset=""><img${ssrRenderAttr("src", _imports_9)} alt="" srcset=""><img${ssrRenderAttr("src", _imports_10)} alt="" srcset=""></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/web/ecpm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ecpm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ecpm as default };
//# sourceMappingURL=ecpm-kABIBNpm.mjs.map
