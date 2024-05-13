import { gsap } from 'file:///Users/diaks/PortfolioV2/node_modules/gsap/dist/gsap.js';
import exifr from 'file:///Users/diaks/PortfolioV2/node_modules/exifr/dist/full.umd.js';
import { useSSRContext, ref, mergeProps } from 'file:///Users/diaks/PortfolioV2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'file:///Users/diaks/PortfolioV2/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main$1 = {
  props: {
    image: String,
    cardIndex: Number
  },
  data() {
    return {
      exifData: ""
    };
  },
  methods: {
    async handleImageClick(event) {
      if (this.$route.name === "photos") {
        console.log("Image clicked");
        const file = event.target.src;
        console.log("Image file:", file);
        try {
          const exifData = await exifr.parse(file);
          console.log("EXIF data:", exifData);
          this.exifData = "ISO: " + exifData.ISO + "\nFocal: " + exifData.FNumber + "\nShutter speed: " + exifData.ShutterSpeedValue;
        } catch (error) {
          console.log("Error reading EXIF data:", error);
          alert("Error reading EXIF data: " + error.message);
        }
      }
    },
    startAnimation(event) {
      const card = event.target.closest(".card");
      const hexagon1 = card.querySelector(".hexagon1");
      const hexagon2 = card.querySelector(".hexagon2");
      const cardImage = card.querySelector(".card-image");
      const exifdata = card.querySelector(".exifdata");
      gsap.to(hexagon1, { y: -138, x: 138, ease: "power1.out", duration: 0.3, opacity: 1 });
      gsap.to(hexagon2, { y: -138, x: -138, ease: "power1.out", duration: 0.3, opacity: 1 });
      gsap.to(cardImage, { scale: 0.85, ease: "power1.out", filter: "grayscale(0)", duration: 0.3 });
      gsap.to(exifdata, { y: 10, x: 10, ease: " power1.out", duration: 0.3, delay: 0.5, opacity: 1 });
    },
    resetAnimation(event) {
      const card = event.target.closest(".card");
      const hexagon1 = card.querySelector(".hexagon1");
      const hexagon2 = card.querySelector(".hexagon2");
      const cardImage = card.querySelector(".card-image");
      const exifdata = card.querySelector(".exifdata");
      gsap.to(hexagon1, { y: 0, x: 0, ease: "power1.out", duration: 0.25, opacity: 0, delay: 0.25 });
      gsap.to(hexagon2, { y: 0, x: 0, ease: "power1.out", duration: 0.25, opacity: 0, delay: 0.25 });
      gsap.to(cardImage, { scale: 1, ease: "power1.out", filter: "grayscale(0.7)", duration: 0.25, delay: 0.25 });
      gsap.to(exifdata, { y: 0, x: 0, ease: " power1.out", duration: 0.25, opacity: 0 });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-51d8adc3><div class="card-image" data-v-51d8adc3><img${ssrRenderAttr("src", $props.image)} data-v-51d8adc3><div data-v-51d8adc3></div></div><div class="hexagon" data-v-51d8adc3><div class="hexagon1" data-v-51d8adc3><div class="number" data-v-51d8adc3>${ssrInterpolate($props.cardIndex + 1)}</div><svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-51d8adc3><g filter="url(#filter0_b_1389_695)" data-v-51d8adc3><path d="M19 0H138V118L118 138H0V19L19 0Z" fill="white" fill-opacity="0.1" data-v-51d8adc3></path></g><defs data-v-51d8adc3><filter id="filter0_b_1389_695" x="-10" y="-10" width="158" height="158" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-51d8adc3><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-51d8adc3></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="5" data-v-51d8adc3></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1389_695" data-v-51d8adc3></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1389_695" result="shape" data-v-51d8adc3></feBlend></filter></defs></svg></div><div class="hexagon2" data-v-51d8adc3><p id="exifdata" class="exifdata" data-v-51d8adc3>${ssrInterpolate($data.exifData)}</p><svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-51d8adc3><g filter="url(#filter0_b_1389_696)" data-v-51d8adc3><path d="M119 0H0V118L20 138H138V19L119 0Z" fill="white" fill-opacity="0.1" data-v-51d8adc3></path></g><defs data-v-51d8adc3><filter id="filter0_b_1389_696" x="-10" y="-10" width="158" height="158" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-51d8adc3><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-51d8adc3></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="5" data-v-51d8adc3></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1389_696" data-v-51d8adc3></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1389_696" result="shape" data-v-51d8adc3></feBlend></filter></defs></svg></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-51d8adc3"]]);
const _sfc_main = {
  components: {
    Card: __nuxt_component_0
  },
  setup() {
    const images = ref([
      "/img/photo1.jpg",
      "/img/photo2.jpg",
      "/img/photo3.jpg",
      "/img/photo4.jpg",
      "/img/photo5.jpg",
      "/img/photo6.jpg"
    ]);
    return { images };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Card = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-676f44d2><h1 data-v-676f44d2>Photos</h1><p data-v-676f44d2>Lorem ipsum dolor sit amet consectetur. Leo suspendisse sit sit sed in non tempor. Ac sed purus risus lacus lacus malesuada.</p><div class="card-container" data-v-676f44d2><!--[-->`);
  ssrRenderList($setup.images, (image, index) => {
    _push(ssrRenderComponent(_component_Card, {
      key: index,
      image,
      "card-index": index + 0
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/photos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const photos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-676f44d2"]]);

export { photos as default };
//# sourceMappingURL=photos-C3jk48Fo.mjs.map
