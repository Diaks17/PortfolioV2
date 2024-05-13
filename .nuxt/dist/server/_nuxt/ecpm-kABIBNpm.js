import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
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
const _imports_0 = "" + __publicAssetsURL("img/equipe (1).jpg");
const _imports_1 = "" + __publicAssetsURL("img/equipe (2).jpg");
const _imports_2 = "" + __publicAssetsURL("img/equipe (3).jpg");
const _imports_3 = "" + __publicAssetsURL("img/equipe (4).jpg");
const _imports_4 = "" + __publicAssetsURL("img/ecpm1 (1).jpg");
const _imports_5 = "" + __publicAssetsURL("img/ecpm1 (7).jpg");
const _imports_6 = "" + __publicAssetsURL("img/ecpm1 (6).jpg");
const _imports_7 = "" + __publicAssetsURL("img/ecpm1 (5).jpg");
const _imports_8 = "" + __publicAssetsURL("img/ecpm1 (4).jpg");
const _imports_9 = "" + __publicAssetsURL("img/ecpm1 (3).jpg");
const _imports_10 = "" + __publicAssetsURL("img/ecpm1 (2).jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "project1",
    class: "project"
  }, _attrs))}><div class="left-part"><p>Il s’agit d’un projet ou l’on devait améliorer la communication d’une association, pour cela mon équipe et moi avons choisit l’association ECPM (Ensembles Contre la Peine de Mort), J’ai participer à la réalisation des maquettes et à la création du site web.</p></div><div class="right-part"><div class="first-part"><div class="team"><img${ssrRenderAttr("src", _imports_0)} alt="" srcset=""><img${ssrRenderAttr("src", _imports_1)} alt="" srcset=""><img${ssrRenderAttr("src", _imports_2)} alt="" srcset=""><img${ssrRenderAttr("src", _imports_3)} alt="" srcset=""></div></div><div class="second-part ecpm"><img${ssrRenderAttr("src", _imports_4)} alt="" srcset=""><img${ssrRenderAttr("src", _imports_5)} alt="" srcset=""><img${ssrRenderAttr("src", _imports_6)} alt="" srcset=""></div><div class="third-part ecpm"><img${ssrRenderAttr("src", _imports_7)} alt="" srcset=""><img${ssrRenderAttr("src", _imports_8)} alt="" srcset=""><img${ssrRenderAttr("src", _imports_9)} alt="" srcset=""><img${ssrRenderAttr("src", _imports_10)} alt="" srcset=""></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/web/ecpm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ecpm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ecpm as default
};
//# sourceMappingURL=ecpm-kABIBNpm.js.map
