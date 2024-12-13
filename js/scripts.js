const btn = document.getElementById('button');
const successMessage = document.querySelector('.success-message');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_c8myjmp';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      successMessage.textContent = '¡Message sent successfully!';
      successMessage.classList.add('show');

      // Hide message after 3 seconds
      setTimeout(() => {
        successMessage.classList.remove('show');
      }, 3000);
    }, (err) => {
      btn.value = 'Send';
      alert('An error occurred while sending the message. Try again.');
    });
});
