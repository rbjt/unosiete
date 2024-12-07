// Inicializar EmailJS si decides incluir un User ID (opcional, pero no obligatorio)
// emailjs.init("tu_userID"); // Reemplaza "tu_userID" si decides usar esta función

// Enviar el mensaje al hacer submit
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const button = form.querySelector("button");
  button.textContent = "Sending...";

  const formData = new FormData(form);

  emailjs.sendForm("service_04lcj09", "template_c8myjmp", formData)
    .then(function (response) {
      alert("Your message has been sent successfully!");
      form.reset();
    })
    .catch(function (error) {
      alert("There was an error sending your message. Please try again.");
    })
    .finally(function () {
      button.textContent = "Send Message"; // Restablecer texto del botón
    });
});
