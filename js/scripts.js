document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    const button = form.querySelector("button");
    button.textContent = "Sending...";

    // Enviar el formulario con EmailJS
    emailjs
      .sendForm("service_04lcj09", "template_c8myjmp", form) // Reemplaza con tus IDs
      .then(function () {
        alert("Your message has been sent successfully!");
        form.reset(); // Limpiar formulario después de enviar
      })
      .catch(function (error) {
        console.error("EmailJS Error:", error);
        alert("There was an error sending your message. Please try again.");
      })
      .finally(function () {
        button.textContent = "Send Message"; // Restablecer texto del botón
      });
  });
});
