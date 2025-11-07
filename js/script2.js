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

const firebaseConfig = {
    apiKey: "AIzaSy...[your full key]",
    authDomain: "gedportfoliodb.firebaseapp.com",
    projectId: "gedportfoliodb",
    storageBucket: "gedportfoliodb.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Optional: Initialize services (e.g., db for Firestore)
  const db = firebase.firestore();

// Test Firebase connection (runs after init)
console.log('Firebase initialized:', firebase.apps.length > 0 ? 'Yes' : 'No');

// In your form submit handler
db.collection('contacts').add({
  name: document.querySelector('input[name="name"]').value,
  email: document.querySelector('input[name="email"]').value,
  message: document.querySelector('textarea[name="message"]').value,
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
}).then(() => console.log('Data saved!')).catch(e => console.error(e));
