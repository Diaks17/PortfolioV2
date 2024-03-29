<template>
  <div class="projets-menu">
    <div class="projets-link">
      <nuxt-link to="/projets">PROJETS</nuxt-link></div>
    <div class="projets-link">
      <nuxt-link to="/photos">PHOTOS</nuxt-link>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.projets-menu {
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
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