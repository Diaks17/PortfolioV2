import imagesLoaded from 'imagesloaded';

 @param {string} selector
 @returns {Promise}
export function preloadImages(selector = 'img') {
    return new Promise((resolve) => {
        // Utilisation de la bibliothèque imagesLoaded pour s'assurer que toutes les images sont entièrement chargées.
        // Ceci est particulièrement utile pour obtenir des dimensions précises, éviter les décalages de mise en page, etc.
        // `background: true` assure le chargement des images de fond.
        imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
    });
}

/**
 * Determines the direction from which the mouse entered an element.
 * 
 * @param {HTMLElement} element - The element to check against.
 * @param {number} lastX - The mouse's X-coordinate right before entering the element.
 * @param {number} lastY - The mouse's Y-coordinate right before entering the element.
 * @returns {string} - A string indicating the direction ("top", "right", "bottom", "left", or "unknown").
 */
export function getMouseEnterDirection(element, lastX, lastY) {
    const { top, right, bottom, left } = element.getBoundingClientRect();
    
    if (lastY <= Math.floor(top)) return "top";
    if (lastY >= Math.floor(bottom)) return "bottom";
    if (lastX <= Math.floor(left)) return "left";
    if (lastX >= Math.floor(right)) return "right";
    
    return "unknown";
}
