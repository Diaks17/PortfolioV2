<template>
  <div>
    <h1>Photos</h1>
    <p>Lorem ipsum dolor sit amet consectetur. Leo suspendisse sit sit sed in non tempor. Ac sed purus risus lacus lacus malesuada.</p>
    
    <div class="card-container">
      <nuxt-link v-for="(image, index) in images" :key="index" :to="image.route">
        <Cardproject :image="image.path" :card-index="index + 0" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Cardproject from '~/components/cardproject.vue';
import { ref } from 'vue';

export default {
  components: {
    Cardproject
  },
  setup() {
    const images = ref([
      { path: '/img/jaimeca1.jpg', route: 'web/jaimeca' },
      { path: '/img/p2.jpg', route: 'web/project2' },
      { path: '/img/p3.jpg', route: 'web/karma' },
      { path: '/img/p4.jpg', route: 'web/' },
    ])

    return { images }
  }
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 0;
  color: #D29801;

}
p {
  font-size: 1rem;
  color: white;
  width: 50%;
  margin-top: 0;
}
.card-container {
  display: flex;
  
  gap: 20px;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
