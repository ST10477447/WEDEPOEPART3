// Mobile navigation toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
       
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from submitting normally

    // Gather form data (basic example)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simple check
    if (name && email && subject && message) {
        // --- In a real application, you would send this data to a server using fetch() ---
        
        // Example of a successful alert
        alert('Thank you, ' + name + '! Your message has been received.');
        
        // Clear the form after success
        this.reset();
    } else {
        alert('Please fill out all required fields.');
    }
});
document.getElementById('church-survey').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your feedback!');
    this.reset();
});
function toggleMenu() {
      document.getElementById("menu").classList.toggle("active");
    }