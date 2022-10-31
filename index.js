const navToggle = document.querySelector(".navtoggle");
const modeloNav = document.querySelector(".modelonav");

navToggle.addEventListener("click", () => {
  modeloNav.classList.toggle("modelonav_visible");

  if (modeloNav.classList.contains("modelonav_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
