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

  window.scrollTo(0, 0);
  ScrollTrigger.refresh();

 
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


  Alpine.nextTick(() => {

    const projectItems = document.querySelectorAll(
      "#projects .featured-video, #projects .project-card"
    );

    if (projectItems.length) {
      gsap.fromTo(
        projectItems,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#projects",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { y: -8, scale: 1.04, duration: 0.3, ease: "power2.out" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });

    gsap.from(".featured-video svg", {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".featured-video",
        start: "top 85%"
      }
    });

  });

});