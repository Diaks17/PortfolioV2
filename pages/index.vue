<template>
        <!-- <div id="container"> -->
          <svg class="circle" width="458" height="458" viewBox="0 0 458 458" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="229" cy="229" r="229" fill="#FFA401"/>
</svg>

          <!-- <img src="../assets/img/kahlia.gif" alt="" srcset=""> -->
        <!-- </div> -->
    <!-- </div> -->
</template>


<script>
import { gsap } from 'gsap';

export default {
  mounted() {
    // Sélectionnez le cercle après qu'il a été monté dans le DOM
    const circle = document.querySelector('.circle');
    // Appliquer une animation à votre cercle avec GSAP
    gsap.to(circle, {
      scale: 1.2, // Déformer le cercle pour simuler un battement de cœur
      repeat: -1, // Répéter l'animation indéfiniment
      yoyo: true, // Inverser l'animation à chaque itération
      duration: 0.5, // Durée d'un battement de cœur (en secondes)
      ease: 'power2.inOut', // Utiliser une courbe d'accélération pour un mouvement naturel
      perspective: 400, // Ajouter une perspective pour un effet 3D
    });
  },
}
</script>

<style scoped>
.circle {
/* position: absolute; */
/* z-index: -1; */
/* margin: 5rem; */
/* transform: perspective(1000px) rotateX(45deg) rotateY(45deg); */
  height: 50vw;
  width: 50vw;
  border-radius: 50%;
  background-color: #FFA401;
}

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