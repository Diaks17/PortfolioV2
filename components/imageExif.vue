<template>
  <div>
    <img :src="imageSrc" @click="getImageExif" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: '_nuxt/assets/img/1.jpg'
    };
  },
  methods: {
    getImageExif() {
      const url = this.imageSrc;
      this.$exif.getData(url, (exifData) => {
        const prettyExif = this.$exif.pretty(exifData);
        if (prettyExif) {
          alert(prettyExif);
        } else {
          alert("No EXIF data found in image.");
        }
      });
    }
  }
};
</script>
