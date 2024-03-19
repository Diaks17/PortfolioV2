<template>
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
</template>

<script>
export default {
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ]
}
</script>

<style scoped>
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
    background-color: #f6f6f657;
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