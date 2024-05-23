<template>
    <div class="w-full h-full">
      <ProjectComponent
        imageSrc="/img/Home_Page_resa.jpg"
        imageAlt="Image du projet ResaWeb"
        imageLink="https://karma.moussa-diakite.fr/"
        projectTitle="RESAWEB"
        projectDescription="Il s’agit d’un projet où l’on devait faire un site de réservation d’une gamme de produits, notre site devait impérativement avoir un panier afin de réserver les articles, c’est comme ça qu’est né mon site Karma."
        projectLink="https://karma.diakite.butmmi.o2switch.site/index.php"
      />
    </div>
  </template>
  
  <script>
  import ProjectComponent from '~/components/ProjectComponent.vue';
  
  export default {
    components: {
      ProjectComponent
    }
  };
  </script>
  
  <style>
  html, body, #__nuxt, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  </style>
  