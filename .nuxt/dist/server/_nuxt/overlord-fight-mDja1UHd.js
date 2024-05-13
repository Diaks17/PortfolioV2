import { _ as __nuxt_component_0 } from "./nuxt-link-kpaqSJk0.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "defu";
import "klona";
import "devalue";
const _imports_0 = "" + __publicAssetsURL("img/overlord.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "project" }, _attrs))}><div class="resume"><p>Il s’agit d’un projet ou l’on devait faire un site de réservation d’une gamme de produits, notre site devait impérativement avoir un panier afin de réserver les article, c’est comme ça que est né mon site Karma</p>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "https://overlord-fight.moussa-diakite.fr/",
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
    to: "https://www.figma.com/file/tFP4GyGdSLYUSryekLpYnm/overlord-fight?type=design&node-id=0%3A1&mode=design&t=TVkbKNSpMzugGMGf-1",
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
  _push(`</div><div class="project-images"><div class="project-img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/web/overlord-fight.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const overlordFight = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  overlordFight as default
};
//# sourceMappingURL=overlord-fight-mDja1UHd.js.map
