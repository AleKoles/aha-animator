import Alpine from "alpinejs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

history.scrollRestoration = "manual";
window.scrollTo(0, 0);

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

window.Alpine = Alpine;
window.gsap = gsap;

Alpine.start();

window.addEventListener("load", () => {

  // force start at top
  window.scrollTo(0, 0);

  ScrollTrigger.refresh();

  // HERO animation
  gsap.from(".hero-content > *", {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });

  gsap.from("#imageHeader img", {
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  });

  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {

    gsap.from(card, {
      y: 120,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -8,
        scale: 1.03,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });

  });

});