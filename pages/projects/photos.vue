<template>
  <div>
    <h1>Photos</h1>
    <p>Lorem ipsum dolor sit amet consectetur. Leo suspendisse sit sit sed in non tempor. Ac sed purus risus lacus lacus malesuada.</p>
    
    <div class="card-container">
      <Card v-for="(image, index) in images" :key="index" :image="image" :card-index="index + 0" />

  </div>
  </div>
</template>

<script scoped>
import Card from '../components/card.vue';
import { ref } from 'vue';

export default {
  components: {
    Card
  },
  setup() {
    const images = ref([
      '/img/1.jpg',
      '/img/2.jpg',
      '/img/3.jpg',
      '/img/4.jpg',
    ])

    return { images }
  }
};
// document.querySelector('.hexagon2').innerHTML = `<p id="exifdata"></p>`;
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