<template>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam ea debitis officia optio cupiditate nulla labore! Obcaecati nesciunt magnam accusantium in ad vitae suscipit, unde porro dolore perspiciatis quibusdam?</p>
    <div class="photos">
        <div class="photo"data-width="33" v-for="(image, index) in images" :key="index" >
            <Shooting :image="image.path" />
        </div>
    </div>
</template>

<script>
import Shooting from '~/components/Shooting.vue';
import { ref } from 'vue';

export default {
    components: {
      Shooting 
    },
    setup() {
      const images = ref([
        { path: '/img/jaimeca1.jpg' },
        { path: '/img/jaimeca2.jpg'},
        { path: '/img/jaimeca3.jpg'},
        { path: '/img/jaimeca4.jpg'},
        { path: '/img/jaimeca5.jpg'},
        { path: '/img/jaimeca6.jpg'},
        { path: '/img/jaimeca7.jpg'},
        { path: '/img/jaimeca8.jpg'},
        { path: '/img/jaimeca9.jpg'},
        { path: '/img/jaimeca10.jpg'},

      ]);
  

      return { images }
    }
};
</script>

<style>
.photos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
}
.photo {
    width: 20vw;
    /* position: relative;
    overflow: hidden; */

}
.photo img{
    width: 100%;
}
.photo[data-width="33"] {
  width: 33.3333333333%;
}
</style>
