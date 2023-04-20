document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          }
      });
  });

  document.querySelectorAll("section").forEach((section) => {
      section.style.opacity = "0";
      section.querySelectorAll("h2, h3, p, ul, figure").forEach((el) => {
          el.style.opacity = "0";
      });
      observer.observe(section);
  });
});