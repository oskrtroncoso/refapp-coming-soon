const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.14 }
  );

  document
    .querySelectorAll(".reveal")
    .forEach((element) => observer.observe(element));
} else {
  document
    .querySelectorAll(".reveal")
    .forEach((element) => element.classList.add("visible"));
}

const form = document.querySelector("#access-form");
const status = document.querySelector("#form-status");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const button = form.querySelector('button[type="submit"]');

  if (!(button instanceof HTMLButtonElement)) {
    return;
  }

  button.disabled = true;
  button.textContent = "Request Received";

  if (status) {
    status.textContent =
      "Thank you. Your early access request has been recorded.";
  }
});
