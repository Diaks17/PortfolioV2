<template>
    <div>
        Hello world
        <div id="container"></div>
    </div>
</template>

<script>

export default {
  mounted() {
    document.body.classList.add('page-three');
  },
  beforeUnmount() {
    document.body.classList.remove('page-three');
  }
}

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import planetTexture from '@/assets/img/texture.jpg'; // Importez votre image de texture

// Vérifier si window est défini
if (typeof window !== 'undefined') {
    // Création de la scène, de la caméra et du rendu
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.5, 2000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Rendre le fond transparent
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);

    // Définir la largeur et la hauteur du canvas
    renderer.setSize(1000, 800); // Définir la taille souhaitée
    document.getElementById('container').appendChild(renderer.domElement);

    // Ajout de contrôles pour déplacer la caméra
    const controls = new OrbitControls(camera, renderer.domElement);

    // Chargement de la texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(planetTexture);

    // Création d'une sphère avec la texture
    const geometry = new THREE.SphereGeometry(1, 100, 100);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const planet = new THREE.Mesh(geometry, material);
    scene.add(planet);

    // Positionnement de la caméra
    camera.position.z = 5;

    // Fonction d'animation
    function animate() {
        requestAnimationFrame(animate);
        planet.rotation.y += 0.001; // Rotation de la planète sur son axe Y
        renderer.render(scene, camera);
    }
    animate();

    // Désactiver les contrôles lorsque la souris est sur le canvas
    renderer.domElement.addEventListener('mouseenter', () => {
        controls.enabled = false;
    });

    // Activer les contrôles lorsque la souris quitte le canvas
    renderer.domElement.addEventListener('mouseleave', () => {
        controls.enabled = true;
    });
} else {
    // Gérer le cas où window n'est pas défini (par exemple, exécution côté serveur)
    console.error('Window is not defined. Cannot create Three.js scene.');
}
</script>

<style scoped>
#container {
  display: none;
}

.page-three #container {
  display: block;
}
#container canvas {
    width: 100% !important;
    height: 100%;
}
</style>