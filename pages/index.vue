<template>
    <div>
        Hello world
    </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Vérifier si window est défini
if (typeof window !== 'undefined') {
    // Création de la scène, de la caméra et du rendu
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Rendre le fond transparent
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Ajout de contrôles pour déplacer la caméra
    const controls = new OrbitControls(camera, renderer.domElement);

    // Création d'une sphère pour représenter la planète
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const planet = new THREE.Mesh(geometry, material);
    scene.add(planet);

    // Positionnement de la caméra
    camera.position.z = 5;

    // Fonction d'animation
    function animate() {
        requestAnimationFrame(animate);
        planet.rotation.y += 0.01; // Rotation de la planète sur son axe Y
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
body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Space Mono', monospace;
    background:linear-gradient(90deg, #000000 0%, #021C1B 100%);
}
</style>