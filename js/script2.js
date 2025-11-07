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
setInterval(textload, 12000);


// Formspree success feedback (detects redirect after submit)
window.addEventListener('load', function() {
    // Check if Formspree redirected with success hash
    if (window.location.hash === '#success') {
        const messageDiv = document.getElementById('form-message');
        const form = document.querySelector('.contact-form');
        if (messageDiv && form) {
            messageDiv.style.display = 'block';
            form.reset();  // Clear the form fields
            window.location.hash = '';  // Remove #success from URL
            // Optional: Smooth scroll to the message
            messageDiv.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Firebase form handler (attach to your contact form)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  if (form && window.db) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();  // Stop default submit

      // Get form data
      const name = form.querySelector('input[name="name"]').value;
      const email = form.querySelector('input[name="email"]').value;
      const message = form.querySelector('textarea[name="message"]').value;

      // Save to Firestore
      window.db.collection('contacts').add({
        name: name,
        email: email,
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        console.log('Data saved to Firebase!');
        // Show success (your green message)
        const messageDiv = document.getElementById('form-message');
        if (messageDiv) messageDiv.style.display = 'block';
        form.reset();  // Clear form
      })
      .catch((error) => {
        console.error('Error saving: ', error);
        alert('Oops! Try again.');
      });
    });
  }
});
