document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Grab form data
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  // Reset the error styles before validation
  name.style.border = '';
  email.style.border = '';
  message.style.border = '';

  let isValid = true;

  // Check if fields are empty
  if (!name.value) {
    name.style.border = '2px solid red'; // Highlight empty fields
    isValid = false;
  }
  if (!email.value) {
    email.style.border = '2px solid red'; // Highlight empty fields
    isValid = false;
  }
  if (!message.value) {
    message.style.border = '2px solid red'; // Highlight empty fields
    isValid = false;
  }

  // Simulate form submission (could connect to a backend or API in a real app)
  const responseMessage = document.getElementById('response-message');
  if (isValid) {
    responseMessage.textContent = 'Thank you for your message, ' + name.value + '! I will get back to you soon.';
    responseMessage.style.color = 'green'; // Success message
    document.getElementById('contact-form').reset();  // Reset the form fields
  } else {
    responseMessage.textContent = 'Please fill out all fields.';
    responseMessage.style.color = 'red'; // Error message
  }
});
