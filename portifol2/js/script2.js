const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});
// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
// Close menu when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

document.querySelectorAll('.view-pdf-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const pdfUrl = this.getAttribute('data-pdf');
    document.getElementById('pdf-frame').src = pdfUrl;
    document.getElementById('pdf-modal').style.display = 'flex';
  });
});
document.getElementById('pdf-modal-close').onclick = function () {
  document.getElementById('pdf-modal').style.display = 'none';
  document.getElementById('pdf-frame').src = '';
};
window.onclick = function (event) {
  const modal = document.getElementById('pdf-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
    document.getElementById('pdf-frame').src = '';
  }
};

/*--animation text--*/
const text = document.querySelector(".second-text");

const textload = () => {
  setTimeout(() => {
    text.textContent = "Graphic-Designer";
  }, 0);

  setTimeout(() => {
    text.textContent = "mobile-app-developer";
  }, 4000);

  setTimeout(() => {
    text.textContent = "Website-developer";
  }, 8000);
}
textload();
