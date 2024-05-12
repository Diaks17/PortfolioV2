<template>
<div class="project-container">
    <div class="project-description">
    <div class="resume">
    <h2>LILBLACK</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam ea debitis officia optio cupiditate nulla labore! Obcaecati nesciunt magnam accusantium in ad vitae suscipit, unde porro dolore perspiciatis quibusdam?</p>
    </div>
   <div class="membres">
    <nuxt-link to="/projects/web/jaimeca">Kry_MD</nuxt-link>
    <nuxt-link to="/projects/web/jaimeca">Leila</nuxt-link>

    </div>
</div>

  <img src="/img/jaimeca3.jpg" width="33%" srcset="">
  <div class="photos">
    <div
      :class="'photo photo' + index" 
      data-width="33" 
      v-for="(image, index) in images" 
      :key="index" 
    >
      <Shooting :image="image.path" />
    </div>
  </div>
</div>

</template>

<script>
import Shooting from '~/components/shooting.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ref, onMounted } from 'vue';

export default {
  components: {
    Shooting 
  },
  setup() {
    const images = ref([
      { path: '/img/lilblack2.jpg'},
      { path: '/img/lilblack3.jpg'},
      { path: '/img/lilblack1.jpg'},
      { path: '/img/lilblack4.jpg'},
      { path: '/img/lilblack5.jpg'},
      { path: '/img/lilblack6.jpg'},
      { path: '/img/lilblack7.jpg'},
      { path: '/img/lilblack8.jpg'},
      { path: '/img/lilblack9.jpg'},
      { path: '/img/lilblack10.jpg'},
    ]);

    // onMounted(() => {
    //   gsap.registerPlugin(ScrollTrigger);
      
    //   // images.value.forEach((image, index) => {
    //     gsap.to(".photo0", {
    //       scrollTrigger: {
    //         trigger: ".photo0",
    //         scrub: 1,
    //         markers: true,
    //       },
    //       y: 50,
    //       opacity: 1,
    //       duration: 0.5,
    //       ease: "power4.in",
    //       visibility: "visible",
    //     });
    //     gsap.to(".photo1", {
    //       scrollTrigger: {
    //         trigger: ".photo0",
    //         start: "top 200%",
    //         scrub: 1,
    //         markers: true,
    //       },
    //       y: 50,
    //       opacity: 1,
    //       duration: 0.5,
    //       ease: "power4.in",
    //     });
    //   });

    return { images };
  },
};
</script>

<style>
.project-container {
  margin: 0 auto;
  margin-left: 20%;
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  align-items: center;
}
.project-description {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;

}
.resume {
  width: 50%;
  color: white;
}
.photos {
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
}

.photo {
  width: 20vw;
  /* opacity: 0; */
}

.photo img {
  width: 100%;
}

.photo[data-width="33"] {
  width: 25%;
}
</style>
