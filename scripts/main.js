import Alpine from "alpinejs";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins and make GSAP global
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
window.gsap = gsap;

window.Alpine = Alpine;
Alpine.start();

document.addEventListener("DOMContentLoaded", () => {
  // Hero heading animation
  gsap.from("h1", { duration: 1, y: -50, opacity: 0, ease: "bounce" });

  // Video cards — staggered scroll-triggered entrance
  gsap.from("#projects .grid > div", {
    scrollTrigger: {
      trigger: "#projects .grid",
      start: "top 80%",
    },
    duration: 0.8,
    y: -50,
    opacity: 0,
    ease: "bounce",
    stagger: 0.2,
  });
});