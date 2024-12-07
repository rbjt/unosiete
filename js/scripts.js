// Seleccionar el formulario
const contactForm = document.querySelector('.contact-form');

// Agregar un evento al formulario
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar que la página se recargue

  // Obtener los valores de los campos
  const name = contactForm.querySelector('input[name="name"]').value;
  const email = contactForm.querySelector('input[name="email"]').value;
  const message = contactForm.querySelector('textarea[name="message"]').value;

  // Mostrar un mensaje de confirmación
  alert(`Thank you, ${name}! Your message has been sent.`);

  // Opcional: limpiar el formulario
  contactForm.reset();
});
