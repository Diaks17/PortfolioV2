import { gsap } from "gsap";
import Atropos from "atropos";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "atropos my-atropos" }, _attrs))} data-v-d2166212><div class="atropos-scale" data-v-d2166212><div class="atropos-rotate" data-v-d2166212><div class="atropos-inner" data-v-d2166212><div class="profil" data-v-d2166212><div class="infos" data-v-d2166212><h3 data-v-d2166212>Nom:</h3><p data-v-d2166212>Diakite</p><h3 data-v-d2166212>Prénom:</h3><p data-v-d2166212>Moussa</p><h3 data-v-d2166212>Âge:</h3><p data-v-d2166212>21 ans</p></div><div class="mail" data-v-d2166212><h3 data-v-d2166212>Email:</h3><p data-v-d2166212>diakitemoussaweb@gmail.com</p></div><div class="tel" data-v-d2166212><h3 data-v-d2166212>Téléphone:</h3><p data-v-d2166212>07 00 00 00 00</p></div><div class="bio" data-v-d2166212><h3 data-v-d2166212>Déscription:</h3><p data-v-d2166212>Il aime associer ses deux passions : le développement web et la photographie dans ses projets.<br data-v-d2166212> Il est de nature curieux, attentif et rigoureux, des qualités qu’il sait mettre au service de son travail.</p></div><div class="wanted" data-v-d2166212><h3 data-v-d2166212>Recherche:</h3><p data-v-d2166212>Un poste de développeur front-end</p></div><div class="reward" data-v-d2166212><h3 data-v-d2166212>Récompense:</h3><p data-v-d2166212>Un développeur front curieux attentif avec une bonne capacité d’adaptation afin de réaliser les taches qui lui seront confiés</p></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d2166212"]]);
export {
  about as default
};
//# sourceMappingURL=about--jMX-4EN.js.map
