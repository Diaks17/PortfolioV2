<template>
<div class="profil">
  <div class="infos">
    <div class="me">
   
    </div>
    <div class="link">
      <a href="https://www.linkedin.com/in/moussa-diakite-1b1b3b1b3/" target="_blank">
        <img src="../assets/img/linkedin.png" alt="linkedin">
      </a>
      <a href="https://www.linkedin.com/in/moussa-diakite-1b1b3b1b3/" target="_blank">
        <img src="../assets/img/linkedin.png" alt="linkedin">
      </a>
      
    </div>
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

</template>

<script scoped>

</script>

<style scoped>
.container {
  display: flex ;
  justify-content: center;
  align-items: center;
}
.profil {
  position: relative;
  /* margin: 0 auto; */
  /* align-self: center; */
  z-index: 2;
  width: 80%;
  padding: 20px;
  font-family: 'Auto Regular', sans-serif;
  /* height: 80%; */
  /* display: flex; */
  flex-direction: column;
  /* background-image: url("../assets/img/ruche.png"); */
  background-size: 150%;
  background-repeat: no-repeat;
  background-position: center;
  background:#132b416d;
  backdrop-filter: blur(10px);
  /* border: 1px solid #FFA401; */
  color: white;
}
.info, .mail, .tel {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 10px;
}
.profil > div > h3  {
  font-family: 'Auto Bold', sans-serif;
}
</style>