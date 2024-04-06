<template>
<!-- <svg class="circle" width="458" height="458" viewBox="0 0 458 458" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="229" cy="229" r="229" fill="#FFA401"/>
</svg> -->
<div class="atropos my-atropos">
  <!-- scale container (required) -->
  <div class="atropos-scale ">
    <!-- rotate container (required) -->
    <div class="atropos-rotate">
      <!-- inner container (required) -->
      <div class="atropos-inner">
        <div class="profil">
  <div class="infos">
      <h3>Nom:</h3>
      <p>Diakite</p>
      <h3>Prénom:</h3>
      <p>Moussa</p>
      <h3>Âge:</h3>
      <p>21 ans</p>
  </div>
  <div class="mail">
    <h3>Email:</h3>
    <p>diakitemoussaweb@gmail.com</p>
  </div>
  <div class="tel">
    <h3>Téléphone:</h3>
    <p>07 00 00 00 00</p>
  </div>
  <div class="bio">
    <h3>Déscription:</h3>
    <p>Il aime associer ses deux passions : le développement web et la photographie dans ses projets.<br>
    Il est de nature curieux, attentif et rigoureux, des qualités qu’il sait mettre au service de son travail.</p>
  </div>
  <div class="wanted">
    <h3>Recherche:</h3>
    <p>Un poste de développeur front-end</p>
  </div>
  <div class="reward">
    <h3>Récompense:</h3>
    <p>Un développeur front curieux attentif avec une bonne capacité d’adaptation afin de réaliser les taches qui lui seront confiés</p>
  </div>
</div>  
      </div>
    </div>
  </div>
</div>
</template>

<script scoped>
import { gsap } from 'gsap';
import Atropos from 'atropos';
import 'atropos/css';

export default {
  mounted() {
    // Sélectionnez le cercle après qu'il a été monté dans le DOM
    const circle = document.querySelector('.circle');
    const profil = document.querySelector('.profil');

    // Appliquer une animation à votre cercle avec GSAP
    gsap.to(circle, {
      scale: 1.1, // Déformer le cercle pour simuler un battement de cœur
      repeat: -1, // Répéter l'animation indéfiniment
      yoyo: true, // Inverser l'animation à chaque itération
      duration: 0.8, // Durée d'un battement de cœur (en secondes)
      ease: 'power2.inOut',
    });
    gsap.from(profil, {
      x: -400,
      opacity: 0,
      duration: 2,
      delay: 0,
      ease: 'bounce.out'
    });
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
/* .container {
  gap: 10em;
} */
.my-atropos {
  width: 80%;
  /* height: 160px; */
}

.profil {
  position: relative;
  z-index: 2;
  width: 90%;
  padding: 20px;
  font-family: 'Auto Regular', sans-serif;
  /* height: 80%; */
  /* display: flex; */
  flex-direction: column;
  /* background-image: url("../assets/img/ruche.png"); */
  background-size: 150%;
  background-repeat: no-repeat;
  background-position: center;
  background: linear-gradient(180deg, #132B41 0%, #021C1B 100%);
  backdrop-filter: blur(20px);
  border: 1px solid white;
  color: white;
}
.infos, .mail, .tel {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 10px;
}
.profil > div > h3  {
  font-family: 'Auto Bold', sans-serif;
}
</style>