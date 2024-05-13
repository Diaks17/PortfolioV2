import { _ as __nuxt_component_0 } from "./nuxt-link-kpaqSJk0.js";
import { _ as __nuxt_component_1 } from "./shooting-uNja89Sl.js";
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
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
const _imports_0 = "" + __publicAssetsURL("img/jaimeca3.jpg");
const _sfc_main = {
  components: {
    Shooting: __nuxt_component_1
  },
  setup() {
    const images = ref([
      { path: "/img/jaimeca1.jpg" },
      { path: "/img/jaimeca2.jpg" },
      { path: "/img/jaimeca3.jpg" },
      { path: "/img/jaimeca4.jpg" },
      { path: "/img/jaimeca5.jpg" },
      { path: "/img/jaimeca6.jpg" },
      { path: "/img/jaimeca7.jpg" },
      { path: "/img/jaimeca8.jpg" },
      { path: "/img/jaimeca9.jpg" },
      { path: "/img/jaimeca10.jpg" }
    ]);
    return { images };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_Shooting = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-container" }, _attrs))}><div class="project-description"><div class="resume"><h2>J&#39;AIME ÇA</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam ea debitis officia optio cupiditate nulla labore! Obcaecati nesciunt magnam accusantium in ad vitae suscipit, unde porro dolore perspiciatis quibusdam?</p></div><div class="membres">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/web/jaimeca.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jaimeca = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  jaimeca as default
};
//# sourceMappingURL=jaimeca-Fe92uZjE.js.map
