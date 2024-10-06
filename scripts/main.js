import Alpine from 'alpinejs';
import { gsap } from 'gsap';

window.Alpine = Alpine;
Alpine.start();

console.log('JavaScript loaded successfully'); // Add this line

document.addEventListener('DOMContentLoaded', () => {
    gsap.from('h1', { duration: 1, y: -50, opacity: 0, ease: 'bounce' });
});