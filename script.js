// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Form validation (basic)
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  this.reset();
});
