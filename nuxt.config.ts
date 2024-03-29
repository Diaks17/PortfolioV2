// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
  // nuxt.config.js
  
  export default {
  devtools: { enabled: true },
  head: {
    script: [
      { src: 'https://unpkg.com/@splinetool/viewer@1.0.87/build/spline-viewer.js', type: 'module' }
    ]
  }
  }
  