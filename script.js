document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('helloBtn').addEventListener('click', function() {
    alert('Hello and welcome to my website!');
  });

  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = 'Thank you for your message!';
    this.reset();
  });
});
