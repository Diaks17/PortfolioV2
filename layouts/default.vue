<template>
    <div class="home">
       <nav class="navbar">
            <ul class="nav-menu">
                <li>
                    <nuxt-link to="/" class="nav-link">ACCUEIL</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/projets" class="nav-link">PROJETS</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about" class="nav-link">ABOUT</nuxt-link>
                </li>
            </ul>
         </nav>
    </div>
        <slot/>

</template>

<script setup>
// pages/my-cool-page.vue or app.vue
useHead({
  bodyAttrs: {
    class: 'test'
  }
})
</script>

<style>
.test {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Space Mono', monospace;
    background:linear-gradient(90deg, #000000 0%, #021C1B 100%); 
}
#__nuxt {
    height: 100%;
}
</style>


<style scoped>
.home {
  height: 100%;
}
.navbar {
    height: 100%;
    width: 40vh;    
    display: flex;
    justify-self: center;
}
.nav-menu {
    display: flex;
    margin: 0 auto;
    padding: 0;
    height: 100%;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    gap: 5rem;
    align-items: center;
    background-color: #ffffff11;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #ccc;
}
.nav-menu li {
    list-style: none;
}
.nav-link {
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
    padding: 0.5rem;
}
.nav-link:hover {
    background:linear-gradient(90deg, #132b4100, #132B41 , #132b4100);
}
 /* SCREEN ASSETS */
.arrow-tl {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 2;
 }
.arrow-tr {
    position: absolute;
    top: 1rem;
    right: 1rem;
}

.arrow-bl {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    z-index: 2;
}
.arrow-br {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
}
.line {
    position: absolute;
    top: 5rem;
    right: 3rem;
}
</style>