<template>
    <div class="projets-menu">
      <div class="projets-link">
        <nuxt-link to="/projects/web/karma">RESAWEB</nuxt-link>
      </div>
      <div class="projets-link">
        <nuxt-link to="/projects/web">SHOOTING</nuxt-link>
      </div>
      <div class="projets-link">
        <nuxt-link to="/projects/web">RESAWEB</nuxt-link>
      </div>
      <div class="projets-link">
        <nuxt-link to="/projects/web">RESAWEB</nuxt-link>
      </div>
      <div class="projets-link">
        <nuxt-link to="/projects/web">RESAWEB</nuxt-link>
      </div>
      <div class="projets-link">
        <nuxt-link to="/projects/web">RESAWEB</nuxt-link>
      </div>
      <div class="projets-link">
        <nuxt-link to="/projects/web">RESAWEB</nuxt-link>
      </div>
      <div class="projets-link">
        <nuxt-link to="/projects/web">RESAWEB</nuxt-link>
      </div>
      <div class="projets-link">
        <nuxt-link to="/projects/web">RESAWEB</nuxt-link>
      </div>
      <!-- Ajoutez d'autres liens de projets ici -->
    </div>
</template>

<script>

</script>

<style scoped>
.container {
  position: relative;  
  /* overflow: hidden; */
  margin-top: 10%;
  /* margin: 0 auto; */
  height: 50% ;
}

.projets-menu {
  position: relative;
  /* top: 50%; */
  /* position: fixed; */
  /* transform: translateY(-50%); */
  transition: top 0.3s ease;
  display: flex;
  flex-direction: column;
  /* width: 30%; */
  height: 70%;
  margin: 0 auto;
  justify-content: space-around;
  align-items: flex-start;
  color: yellow;
}

.hidden {
  top: 200%; /* ou toute autre valeur pour cacher le menu */
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
  font-family: 'Auto Extra';
  opacity: 0.5;
}

.projets-link a {
  color: #C59335;
  text-decoration: none;
}

.projets-link:hover {
  background: linear-gradient(90deg, #132b4100, #132B41, #132b4100);
  opacity: 1;
}
</style>
