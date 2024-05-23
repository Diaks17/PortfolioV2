<template>
    <div class="project flex flex-col gap-5 p-2 mx-auto shadow-lg select-none sm:p-4 sm:flex-row sm:items-center lg:w-3/4">
      <div class="project-img h-52 w-full sm:h-full sm:w-72 flex-shrink-0">
        <nuxt-link :to="imageLink">
          <nuxt-img :src="imageSrc" :alt="imageAlt" class="object-cover w-full h-full rounded-lg" />
        </nuxt-link>
      </div>
      <div class="info flex flex-col flex-1 gap-5 sm:p-2">
        <div class="flex flex-col flex-1 gap-3">
          <div class="text-2xl sm:text-3xl lg:text-4xl font-bold">
            {{ projectTitle }}
          </div>
          <div class="text-base sm:text-lg lg:text-xl">
            <p>
              {{ projectDescription }}
            </p>
          </div>
        </div>
        <div class="flex gap-3 mt-auto">
          <div v-if="projectLink" class="h-10 sm:h-12">
            <nuxt-link :to="projectLink" class="project-link inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
              Maquette
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'ProjectComponent',
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      imageAlt: {
        type: String,
        default: 'Image de projet'
      },
      imageLink: {
        type: String,
        required: true
      },
      projectTitle: {
        type: String,
        required: true
      },
      projectDescription: {
        type: String,
        required: true
      },
      projectLink: {
        type: String,
        default: null 
      }
    }
  };
  </script>
  
  <style scoped>
  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  .project {
    color: white;
    /* font-weight: bolder; */
    background: linear-gradient(90deg, #021c1b, #174847, #021c1b);
    background-size: 200% 200%;
    animation: gradient-animation 5s linear infinite;
  }
  
  .project-link {
    opacity: 0.5;
    background-color: #D29801;
    border-radius: 0;
    transition: all 0.3s;
  }
  
  .project-link:hover {
    transition: all 0.5s;
    opacity: 1;
  }
  
  /* @import url("~/assets/styles/project.css"); */
  </style>
  