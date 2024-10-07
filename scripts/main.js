import Alpine from "alpinejs";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the GSAP plugin and make GSAP global
gsap.registerPlugin(ScrollToPlugin);
window.gsap = gsap; // Make gsap globally accessible for Alpine.js

// Initialize Alpine.js
window.Alpine = Alpine;
Alpine.start();

// Example animation to check GSAP functionality
document.addEventListener("DOMContentLoaded", () => {
  gsap.from("h1", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
});
