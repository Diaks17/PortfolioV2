import { _ as __nuxt_component_0 } from "./nuxt-link-kpaqSJk0.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
const _sfc_main = {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.projects.forEach((project, index2) => {
      gsap.from(`.projets-link:nth-child(${index2 + 1})`, {
        scrollTrigger: {
          trigger: `.projets-link:nth-child(${index2 + 1})`,
          scrub: 1,
          start: "top 80%"
        },
        y: 100,
        opacity: 1,
        duration: 0.5,
        ease: "power4.in"
      });
    });
  },
  data() {
    return {
      projects: [
        { name: "RESAWEB", route: "/projects/web/karma" },
        { name: "OVER-FIGHT", route: "/projects/web/overlord-fight" },
        { name: "SHOOTING", route: "/projects/web" },
        { name: "PHOTOS", route: "/projects/photos" },
        { name: "J'AIME ÇA", route: "/projects/web/jaimeca" }
        // Ajoutez d'autres projets ici
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "projets-menu" }, _attrs))} data-v-1c93b942><!--[-->`);
  ssrRenderList($data.projects, (project, index2) => {
    _push(`<div class="projets-link" data-v-1c93b942>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: project.route
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(project.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(project.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1c93b942"]]);
export {
  index as default
};
//# sourceMappingURL=index-qlyiSdvE.js.map
