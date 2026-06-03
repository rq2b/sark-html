const observer = new IntersectionObserver(
  (entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;

      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    }
  },
  {
    threshold: 0,
    rootMargin: "-10% 0px -50% 0px",
  }
);

document.querySelectorAll("[data-stagger]").forEach((group) => {
  group.querySelectorAll(".reveal").forEach((element, index) => {
    element.style.setProperty(
      "--reveal-delay",
      `${index * 120}ms`
    );
  });
});

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});