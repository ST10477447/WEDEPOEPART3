 // Mobile navigation toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
       
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        // Get all necessary elements from the DOM
const donateToggleBtn = document.getElementById('donateToggle');
const donationFormContainer = document.getElementById('donationFormContainer');
const closeFormBtn = document.getElementById('close-btn');
const bankingDetailsToggleBtn = document.getElementById('togglBtn');
const infoBox = document.getElementById('infBox');
const donationForm = document.getElementById('donation-form');

// --- 1. Toggle Main Donation Form ---

// Function to show/hide the form container
function toggleDonationForm() {
    // Toggles the 'hidden' class on the form container
    donationFormContainer.classList.toggle('hidden');
}
// Event listeners for opening and closing the form
donateToggleBtn.addEventListener('click', toggleDonationForm);
closeFormBtn.addEventListener('click', toggleDonationForm);


// --- 2. Toggle Banking Details Box ---

bankingDetailsToggleBtn.addEventListener('click', () => {
    // Toggles the 'hidden' class on the infoBox
    infoBox.classList.toggle('hidden');
    
    // Change the button text based on the state
    if (infoBox.classList.contains('hidden')) {
        bankingDetailsToggleBtn.textContent = 'Show Banking Details';
    } else {
        bankingDetailsToggleBtn.textContent = 'Hide Banking Details';
    }
});


// --- 3. Handle Form Submission ---

donationForm.addEventListener('submit', (event) => {
    // Prevent the default form submission (which reloads the page)
    event.preventDefault();

    // Collect form data (You would typically send this to a server)
    const donationData = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        amount: document.getElementById('amount').value,
        bank: document.getElementById('bank').value,
        accountNumber: document.getElementById('acc-number').value
    };

    // Log data to the console for testing
    console.log('--- Donation Data Submitted ---');
    console.log(donationData);
    
    // Simulate a successful submission
    alert(`Thank you, ${donationData.name}! Your donation of R${donationData.amount} has been successfully submitted for processing.`);

    // Reset the form
    donationForm.reset();
    
    // Optionally close the form after submission
    toggleDonationForm();
});

             // Lightbox functionality
        let currentImageIndex = 0;
        const images = [
    { src: 'images/image 1.jpg', caption: 'Pastor Thabitha speaking to primary school kids' },
    { src: 'images/image 2.jpg', caption: 'Feeding of the people' },
    { src: 'images/image 3.jpg', caption: 'Pastor Thabitha at the feeding event' },
    { src: 'images/image 4.jpg', caption: 'Feeding' },
    { src: 'images/image 5.jpg', caption: 'Feeding' },
    { src: 'images/image 6.jpg', caption: 'Our church meembers getting ready for the event' }
        ];
       
        function openLightbox(src, caption) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxCaption = document.getElementById('lightbox-caption');
           
            // Find the index of the clicked image
            currentImageIndex = images.findIndex(img => img.src === src);
           
            lightboxImg.src = src;
            lightboxCaption.textContent = caption;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
       
        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
       
        function changeImage(direction) {
            currentImageIndex += direction;
           
            // Wrap around if at beginning or end
            if (currentImageIndex < 0) {
                currentImageIndex = images.length - 1;
            } else if (currentImageIndex >= images.length) {
                currentImageIndex = 0;
            }
           
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxCaption = document.getElementById('lightbox-caption');
           
            lightboxImg.src = images[currentImageIndex].src;
            lightboxCaption.textContent = images[currentImageIndex].caption;
        }
       
        // Close lightbox when clicking outside the image
        document.getElementById('lightbox').addEventListener('click', (e) => {
            if (e.target === document.getElementById('lightbox')) {
                closeLightbox();
            }
        });
        