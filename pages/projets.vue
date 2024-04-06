<template>
  <div class="atropos my-atropos">
  <!-- scale container (required) -->
  <div class="atropos-scale">
    <!-- rotate container (required) -->
    <div class="atropos-rotate">
      <!-- inner container (required) -->
      <div class="atropos-inner">
        <div class="projets-menu">
    <div class="projets-link">
      <nuxt-link to="/projets">PROJETS</nuxt-link></div>
    <div class="projets-link">
      <nuxt-link to="/photos">PHOTOS</nuxt-link>
    </div>
  </div>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
import Atropos from 'atropos';
import 'atropos/css';
export default {
  mounted() {
    const myAtropos = Atropos({
      el: '.my-atropos',
      rotateLock: true,
      activeOffset: 40,
      shadowScale: 1,
      shadowOffset: 10,
      rotateYMax: 30,
      // rest of parameters
    });
  },
}
</script>

<style scoped>
.projets-menu {
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 50%;
  margin: 0 auto;
  justify-content: flex-end;
  align-items: center;
  color: yellow
}
.projets-link {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #C59335;
  font-size: 4rem;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
  padding: 5px;
  font-family:  'Auto Extra' ;
  opacity: 0.5;

}
.projets-link  a {
  color: #C59335;
  text-decoration: none;
}
.projets-link:hover {
  background:linear-gradient(90deg, #132b4100, #132B41 , #132b4100);
  opacity: 1;
}
</style>