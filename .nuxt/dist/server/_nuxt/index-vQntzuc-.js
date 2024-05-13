import { gsap } from "gsap";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
import "vue/server-renderer";
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
export {
  index as default
};
//# sourceMappingURL=index-vQntzuc-.js.map
