// Typing animation
const typingText = document.querySelector(".typing");
const words = ["Shreya Lande", "a Developer", "an AI/ML Enthusiast", "a Future Software Enginner"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  typingText.textContent = currentWord.substring(0, charIndex);

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 150);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 800);
  }
}
typeEffect();

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "⚠ Please fill in all fields.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "✅ Thank you! Your message has been sent.";
    formMessage.style.color = "lightgreen";
    document.getElementById("contactForm").reset();
  }
});