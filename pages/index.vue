<template>
  
        <!-- <div id="container"> -->
          <!-- <svg class="circle" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="200" cy="200" r="200" fill="#FFA401"/>
</svg> -->

</template>


<script>
import { gsap } from 'gsap';

export default {
  mounted() {
    // Sélectionnez le cercle après qu'il a été monté dans le DOM
    const circle = document.querySelector('.circle');
    // Appliquer une animation à votre cercle avec GSAP
    gsap.to(circle, {
      scale: 1.1, // Déformer le cercle pour simuler un battement de cœur
      repeat: -1, // Répéter l'animation indéfiniment
      yoyo: true, // Inverser l'animation à chaque itération
      duration: 0.5, // Durée d'un battement de cœur (en secondes)
      ease: 'power2.inOut'
    });
  },
}
</script>
<style>

.circle {
position: absolute;
/* z-index: -1; */
margin: 20%;
/* transform: perspective(1000px) rotateX(45deg) rotateY(45deg); */
  height: 40vw;
  width: 40vw;
  border-radius: 50%;
  background-color: #FFA401;
}
</style>
<style scoped>

#container {
  /* height: 100vh; */
  /* width: 100%; */
  /* display: none; */
  /* background: url("../assets/img/planet.png") no-repeat; */
  background-size: 100%;
}

.page-three #container {
  display: block;
}
#container canvas {
    width: 100% !important;
    height: 100%;
}
</style>