// HERO BUTTON

function startJourney() {
  document.querySelector(".birthday-section").scrollIntoView({
    behavior: "smooth"
  });
}


// FADE-IN ANIMATIONS WHEN SCROLLING

const observerOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });
}, observerOptions);


// Select sections and cards

const animatedElements = document.querySelectorAll(
  ".section, .stat-card, .admire-card, .birthday-card, .meaningful-card"
);


// Add animation class

animatedElements.forEach((element) => {

  element.classList.add("hidden");

  observer.observe(element);

});