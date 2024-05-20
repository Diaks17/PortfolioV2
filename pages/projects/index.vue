<template>
  <div class="projets-menu">
      <div class="projets-link" v-for="(project, index) in projects" :key="index">
          <nuxt-link :to="project.route">{{ project.name }}</nuxt-link>
      </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  mounted() {
      gsap.registerPlugin(ScrollTrigger);

      this.projects.forEach((project, index) => {
          gsap.from(`.projets-link:nth-child(${index + 1})`, {
              scrollTrigger: {
                  trigger: `.projets-link:nth-child(${index + 1})`,
                  scrub: 1,
                  start: "top 80%",
                  markers: true,
              },
              y: 100,
              opacity: 1,
              duration: 0.5,
              ease: "power4.in",
          });
      });
  },
  data() {
      return {
          projects: [
              { name: "RESAWEB", route: "/projects/web/karma" },
              { name: "OVER-FIGHT", route: "/projects/web/overlord-fight" },
              { name: "SHOOTING", route: "/projects/web" },
              { name: "PHOTOS", route: "/projects/photos/" },
              // { name: "J'AIME ÇA", route: "/projects/web/jaimeca" },
              // { name: "J'AIME ÇA", route: "/projects/web/jaimeca" },
              // { name: "J'AIME ÇA", route: "/projects/web/jaimeca" },
              // { name: "J'AIME ÇA", route: "/projects/web/jaimeca" },
              // { name: "J'AIME ÇA", route: "/projects/web/jaimeca" },
              // { name: "J'AIME ÇA", route: "/projects/web/jaimeca" },
              // { name: "J'AIME ÇA", route: "/projects/web/jaimeca" },
              // { name: "J'AIME ÇA", route: "/projects/web/jaimeca" },
              // { name: "J'AIME ÇA", route: "/projects/web/jaimeca" },
              // Ajoutez d'autres projets ici
          ]
      };
  }
};
</script>

<style scoped>
.container {
  position: relative;
  margin-top: 10%;
  height: 50%;
}

.projets-menu {
  position: relative;
  width: 100%;
  transition: top 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 70%;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  color: yellow;
}

.hidden {
  top: 200%;
}

.projets-link {
  display: flex;
  width: 100%;
  height: 100%;
  opacity: 0;
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
