<template>
    <!-- <nav class="navbar">
            <ul class="nav-menu">
                <li>
                    <nuxt-link to="/" class="nav-link">ACCUEIL</nuxt-link>
                </li>
                <li>
                   
                </li>
                <li>
                    <nuxt-link to="/about" class="nav-link">ABOUT</nuxt-link>
                </li>
            </ul>
    </nav> -->

     
<div class="h-screen w-full bg-white relative flex overflow-hidden">

<!-- Sidebar -->
<aside class="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
  <!-- Profile -->
  <nuxt-link to="/about" class="nav-link {'nuxt-link-active': isRouteActive(id) }" :to="id + '?someParams=true'"><div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 nav-link  hover:duration-300 hover:ease-linear"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" /></svg>
    
  </div></nuxt-link>

  <!-- Courses -->
  <nuxt-link to="/projects/" class="nav-link"><div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 nav-link  hover:duration-300 hover:ease-linear">  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
   
  </div></nuxt-link> 


  <!-- Configuration -->
  <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 nav-link  hover:duration-300 hover:ease-linear">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </div>
</aside>



<div class="w-full h-full flex flex-col justify-between">
  <!-- Header -->
  <header class="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
    <span class="links">
            <a href="https://www.instagram.com/mo_oss.a/"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0356 0.422453C14.9573 0.418916 15.879 0.428179 16.8005 0.450241L17.0455 0.459083C17.3285 0.469188 17.6076 0.481819 17.9449 0.496976C19.2888 0.560132 20.2058 0.772336 21.0104 1.08433C21.844 1.40516 22.5463 1.83967 23.2486 2.54196C23.8907 3.17302 24.3877 3.93637 24.7049 4.77894C25.0169 5.58354 25.2291 6.50182 25.2923 7.84578C25.3074 8.18177 25.3201 8.46218 25.3302 8.74512L25.3377 8.99016C25.3602 9.91121 25.3699 10.8325 25.3668 11.7539L25.3681 12.6961V14.3508C25.3712 15.2726 25.3615 16.1943 25.339 17.1158L25.3314 17.3608C25.3213 17.6438 25.3087 17.9229 25.2935 18.2602C25.2304 19.6041 25.0157 20.5211 24.7049 21.3257C24.3887 22.1692 23.8916 22.9332 23.2486 23.564C22.617 24.206 21.8533 24.703 21.0104 25.0204C20.2058 25.3323 19.2888 25.5445 17.9449 25.6077C17.6076 25.6229 17.3285 25.6355 17.0455 25.6456L16.8005 25.6532C15.879 25.6756 14.9573 25.6853 14.0356 25.6822L13.0933 25.6835H11.4399C10.5182 25.6866 9.59648 25.6769 8.67502 25.6544L8.42998 25.6469C8.13014 25.636 7.83036 25.6234 7.53066 25.609C6.18673 25.5458 5.26972 25.3311 4.46387 25.0204C3.62099 24.7037 2.85751 24.2067 2.22693 23.564C1.58407 22.9328 1.08664 22.1689 0.769322 21.3257C0.457338 20.5211 0.245138 19.6041 0.181983 18.2602C0.167916 17.9604 0.155285 17.6607 0.14409 17.3608L0.137775 17.1158C0.114488 16.1943 0.103961 15.2726 0.106198 14.3508V11.7539C0.102672 10.8325 0.111936 9.91122 0.133986 8.99016L0.142827 8.74512C0.152932 8.46218 0.165563 8.18177 0.18072 7.84578C0.243875 6.50056 0.456074 5.5848 0.768058 4.77894C1.08557 3.93596 1.58397 3.17282 2.22819 2.54322C2.85834 1.89998 3.62134 1.40209 4.46387 1.08433C5.26972 0.772336 6.18546 0.560132 7.53066 0.496976L8.42998 0.459083L8.67502 0.452768C9.59605 0.429492 10.5174 0.418965 11.4387 0.42119L14.0356 0.422453ZM12.7371 6.73803C11.9003 6.72619 11.0695 6.88079 10.293 7.19283C9.51649 7.50488 8.80973 7.96815 8.2138 8.55572C7.61787 9.14329 7.14466 9.84344 6.82167 10.6155C6.49868 11.3875 6.33235 12.2161 6.33235 13.053C6.33235 13.8899 6.49868 14.7184 6.82167 15.4905C7.14466 16.2625 7.61787 16.9627 8.2138 17.5502C8.80973 18.1378 9.51649 18.6011 10.293 18.9131C11.0695 19.2252 11.9003 19.3797 12.7371 19.3679C14.4121 19.3679 16.0185 18.7025 17.2028 17.5181C18.3872 16.3337 19.0526 14.7273 19.0526 13.0523C19.0526 11.3773 18.3872 9.77095 17.2028 8.58655C16.0185 7.40215 14.4121 6.73803 12.7371 6.73803ZM12.7371 9.26426C13.2405 9.25498 13.7406 9.3461 14.2084 9.5323C14.6761 9.71849 15.1021 9.99603 15.4613 10.3487C15.8206 10.7014 16.106 11.1221 16.3009 11.5863C16.4957 12.0505 16.5961 12.5489 16.5962 13.0523C16.5963 13.5558 16.4961 14.0542 16.3014 14.5185C16.1067 14.9827 15.8214 15.4036 15.4622 15.7563C15.1031 16.1091 14.6772 16.3868 14.2095 16.5732C13.7419 16.7595 13.2417 16.8508 12.7384 16.8417C11.7334 16.8417 10.7696 16.4425 10.059 15.7318C9.34834 15.0212 8.94911 14.0573 8.94911 13.0523C8.94911 12.0473 9.34834 11.0835 10.059 10.3729C10.7696 9.66223 11.7334 9.26299 12.7384 9.26299L12.7371 9.26426ZM19.3684 4.84335C18.9609 4.85966 18.5755 5.03301 18.293 5.32709C18.0104 5.62117 17.8526 6.01317 17.8526 6.42099C17.8526 6.8288 18.0104 7.2208 18.293 7.51488C18.5755 7.80896 18.9609 7.98231 19.3684 7.99862C19.7871 7.99862 20.1887 7.83227 20.4848 7.53617C20.7809 7.24007 20.9472 6.83847 20.9472 6.41972C20.9472 6.00097 20.7809 5.59938 20.4848 5.30328C20.1887 5.00718 19.7871 4.84083 19.3684 4.84083V4.84335Z" fill="#C59335"/>
</svg>
</a>
<a href="https://www.linkedin.com/in/moussa-diakite-213618211/"><svg width="26" height="26" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.2745 0.105469C21.9693 0.105469 22.6357 0.361775 23.127 0.818004C23.6184 1.27423 23.8944 1.89301 23.8944 2.53822V19.5675C23.8944 20.2127 23.6184 20.8314 23.127 21.2877C22.6357 21.7439 21.9693 22.0002 21.2745 22.0002H2.93531C2.24048 22.0002 1.5741 21.7439 1.08278 21.2877C0.591452 20.8314 0.31543 20.2127 0.31543 19.5675V2.53822C0.31543 1.89301 0.591452 1.27423 1.08278 0.818004C1.5741 0.361775 2.24048 0.105469 2.93531 0.105469H21.2745ZM20.6195 18.9593V12.5125C20.6195 11.4608 20.1696 10.4522 19.3687 9.70854C18.5679 8.96489 17.4817 8.54711 16.3491 8.54711C15.2357 8.54711 13.9388 9.17962 13.3101 10.1284V8.77822H9.65531V18.9593H13.3101V12.9625C13.3101 12.0259 14.1222 11.2596 15.1309 11.2596C15.6173 11.2596 16.0837 11.439 16.4276 11.7584C16.7716 12.0778 16.9648 12.5109 16.9648 12.9625V18.9593H20.6195ZM5.398 6.86851C5.98167 6.86851 6.54142 6.65321 6.95413 6.26998C7.36685 5.88675 7.59871 5.36697 7.59871 4.825C7.59871 3.69377 6.61625 2.76933 5.398 2.76933C4.81087 2.76933 4.24778 2.98591 3.83261 3.37142C3.41744 3.75693 3.1842 4.2798 3.1842 4.825C3.1842 5.95623 4.17976 6.86851 5.398 6.86851ZM7.21882 18.9593V8.77822H3.59028V18.9593H7.21882Z" fill="#C59335"/>
</svg>

</a>
        </span>
        <span class="date">
                <p>{{ currentTime }}</p>
                <p>HOUR MIN SEC</p>
            </span>
        <div class="right-header">
            <span class="logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0004 21L15.6004 16.2C14.6004 15.45 13.3504 15 12.0004 15C10.6504 15 9.40039 15.45 8.40039 16.2L12.0004 21Z" fill="#C59335"/>
<path d="M11.9998 9C9.2998 9 6.8098 9.89 4.7998 11.4L6.5998 13.8C8.0998 12.67 9.9698 12 11.9998 12C14.0298 12 15.8998 12.67 17.3998 13.8L19.1998 11.4C17.1898 9.89 14.6998 9 11.9998 9Z" fill="#C59335"/>
<path d="M12.0002 3C7.9502 3 4.2102 4.34 1.2002 6.6L3.0002 9C5.5002 7.12 8.6202 6 12.0002 6C15.3802 6 18.5002 7.12 21.0002 9L22.8002 6.6C19.7902 4.34 16.0502 3 12.0002 3Z" fill="#C59335"/>
</svg>
<svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 9C3.73478 9 3.48043 8.89464 3.29289 8.70711C3.10536 8.51957 3 8.26522 3 8V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10V9H4Z" fill="#C59335"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V9C0 9.79565 0.316071 10.5587 0.87868 11.1213C1.44129 11.6839 2.20435 12 3 12H16C16.7956 12 17.5587 11.6839 18.1213 11.1213C18.6839 10.5587 19 9.79565 19 9C19.2652 9 19.5196 8.89464 19.7071 8.70711C19.8946 8.51957 20 8.26522 20 8V4C20 3.73478 19.8946 3.48043 19.7071 3.29289C19.5196 3.10536 19.2652 3 19 3C19 2.20435 18.6839 1.44129 18.1213 0.87868C17.5587 0.316071 16.7956 0 16 0ZM16 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V9C2 9.26522 2.10536 9.51957 2.29289 9.70711C2.48043 9.89464 2.73478 10 3 10H16C16.2652 10 16.5196 9.89464 16.7071 9.70711C16.8946 9.51957 17 9.26522 17 9V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2Z" fill="#C59335"/>
</svg>

            </span>
            
        </div>    
  </header>

  <!-- Main -->
  <main class="max-w-full h-full flex relative overflow-y-hidden">
    <!-- Container -->
    <div class="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
      <!-- Container -->
      <nuxt-page />
      <!-- <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
      <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
      <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
      <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
      <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
      <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
      <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
      <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
      <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div> -->
    </div>
  </main>
</div>

</div>


</template>
<script>
// import "./static/js/bootstrap.min.js";
export default {
//   head() {
//     return {
//       title: 'Moussa Diakite',
//       meta: [
//         { charset: 'utf-8' },
//         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//         { hid: 'description', name: 'description', content: 'Moussa Diakite Portfolio' }
//       ],
//       link: [
//         { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
//         { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css', integrity: "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz", crossorigin: "anonymous" }
//       ],
//       script: [
//         { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js', integrity: "sha384-1q8jxq1l1Q8jv6", crossorigin: "anonymous" }
//       ]
//     }
//   },
  data() {
    return {
      currentTime: ''
    };
  },
  mounted() {
    if (process.client) {
      // Update the time every second
      this.interval = setInterval(this.updateTime, 1000);
      // Call updateTime immediately to set the initial time
      this.updateTime();
    }
  },
  beforeDestroy() {
    if (process.client) {
      // Clean up the interval when a component is destroyed
      clearInterval(this.interval);
    }
  },
  methods: {
    isRouteActive(id) {
      if (this.$route.path.includes(id)) {
        return true
      } else {
        return false
      }
    },
    log() {
      console.log(this.categories)
    },
    updateTime() {
      const date = new Date();
      const hours = this.padZero(date.getHours());
      const minutes = this.padZero(date.getMinutes());
      const seconds = this.padZero(date.getSeconds());
      this.currentTime = `${hours}:${minutes}:${seconds}`;
    },
    padZero(value) {
      // Add a leading zero if the value is less than 10
      return value < 10 ? `0${value}` : value;
    }
  }
};
</script>


<style>


</style>
<style>
@font-face {
    font-family: 'Auto Extra';
    src: url(../assets/fonts/AutonomousExtraBold.woff);
}

@font-face {
    font-family: 'Auto Bold';
    src: url(../assets/fonts/AutonomousBold.woff);
    font-weight: bold;
}

@font-face {
    font-family: 'Auto Regular';
    src: url(../assets/fonts/AutonomousRegular.woff);
    /* font-weight: 500; */
}
@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.nuxt-link-active {
    color: yellow;
    /* styles here */
}
.nuxt-link-active {
    color: yellow;
  /* styles here */
}
body {
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.container {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    width: 80%;
    margin-left: 20%;
    padding: 1rem;
    /* padding: 0 0 1rem 0; */
    font-family: 'Space Mono', monospace;
}

</style>

<style>
header {
    /* border-bottom: 1px white solid; */
    background:linear-gradient(180deg, #021C1B 100%,#000 0%); 

}
aside {
  background:linear-gradient(45deg, #000 0%, #021C1B 100%); 
}
header, aside {
  border: #C59335 0.1px solid;
  /* border-right: #C59335 1px solid; */
  background-color: #174847 !important;
}
main {
    background:linear-gradient(90deg, #000000 0%, #021C1B 100%); 
}
.links {
    display: flex;
    gap: 1rem;
}
.right-header {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: flex-start;
}
.logo {
    display: flex;
    gap: 1rem;
    align-items: center;

}
.date p {
    margin: 0;
}
/* NAVIGATION */
.navbar {
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 20vw;    
    display: flex;
    justify-self: center;
    background-color: #ffffff11;
    backdrop-filter: blur(10px);    
}
.nav-menu {
    display: flex;
    margin: 0 auto;
    padding: 0;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    gap: 5rem;
   
}
.nav-menu li {
    list-style: none;
    align-items: flex-start;
    
}
.nav-link {
    text-decoration: none;
    color: #fff !important;
    font-family: 'Space Mono', monospace;
    font-weight: bold;
    /* font-size: 1.5rem; */
    padding: 0.5rem;
}
.nav-link:hover {
    transition: width 2s;
    background:linear-gradient(90deg, #132b4100, #132B41 , #132b4100);
    color: #C59335 !important;
}
 /* SCREEN ASSETS */
.arrow-tl {
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 3;
 }
.arrow-tr {
    position: fixed;
    top: 1rem;
    right: 1rem;
}

.arrow-bl {
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    z-index: 3;
}
.arrow-br {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
}
.line {
    position: fixed;
    top: 5rem;
    right: 3rem;
}

</style>