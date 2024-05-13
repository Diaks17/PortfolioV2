import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-kpaqSJk0.mjs';
import { _ as __nuxt_component_1 } from './shooting-uNja89Sl.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///Users/diaks/PortfolioV2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'file:///Users/diaks/PortfolioV2/node_modules/vue/server-renderer/index.mjs';
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

const _imports_0 = "" + publicAssetsURL("img/postTournage3.jpg");
const _sfc_main = {
  components: {
    Shooting: __nuxt_component_1
  },
  setup() {
    const images = ref([
      { path: "/img/postTournage2.jpg" },
      { path: "/img/postTournage3.jpg" },
      { path: "/img/postTournage1.jpg" },
      { path: "/img/postTournage4.jpg" },
      { path: "/img/postTournage5.jpg" },
      { path: "/img/postTournage6.jpg" },
      { path: "/img/postTournage7.jpg" },
      { path: "/img/postTournage8.jpg" },
      { path: "/img/postTournage9.jpg" },
      { path: "/img/postTournage10.jpg" }
    ]);
    return { images };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_Shooting = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-container" }, _attrs))}><div class="project-description"><div class="resume"><h2>LILBLACK</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam ea debitis officia optio cupiditate nulla labore! Obcaecati nesciunt magnam accusantium in ad vitae suscipit, unde porro dolore perspiciatis quibusdam?</p></div><div class="membres">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/projects/web/jaimeca" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`@Kry_MD`);
      } else {
        return [
          createTextVNode("@Kry_MD")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/projects/web/jaimeca" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`@Leila`);
      } else {
        return [
          createTextVNode("@Leila")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><img${ssrRenderAttr("src", _imports_0)} width="33%" srcset=""><div class="photos"><!--[-->`);
  ssrRenderList($setup.images, (image, index) => {
    _push(`<div class="${ssrRenderClass("photo photo" + index)}" data-width="33">`);
    _push(ssrRenderComponent(_component_Shooting, {
      image: image.path
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/web/post-tournage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const postTournage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { postTournage as default };
//# sourceMappingURL=post-tournage-B4XKJzp4.mjs.map
