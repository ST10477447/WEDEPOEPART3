
// 1. Array of all images and captions
const galleryImages = [
    { src: 'images/b.jpg', caption: 'Church Event' },
    { src: 'images/j.jpg', caption: 'Church Choir' },
    { src: 'images/k.jpg', caption: 'Pastor Churchill' }
];

// 2. Tracker for the currently displayed image
let currentIndex = 0;

// 3. Function to open the lightbox and load the selected image
function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    document.getElementById('myLightbox').style.display = 'block';
}

// 4. Function to update the lightbox content (image and caption)
function updateLightbox() {
    const imgElement = document.getElementById('lightboxImage');
    const captionElement = document.getElementById('caption');
    
    // Set the full-size image source and caption based on the current index
    imgElement.src = galleryImages[currentIndex].src;
    captionElement.innerHTML = galleryImages[currentIndex].caption;
}

// 5. Function to close the lightbox
function closeLightbox() {
    document.getElementById('myLightbox').style.display = 'none';
}

// 6. Function for navigation (changes the currentIndex)
function changeImage(direction) {
    currentIndex += direction;
    
    // Logic to loop the gallery:
    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1; // Go to last image
    } else if (currentIndex >= galleryImages.length) {
        currentIndex = 0; // Go to first image
    }
    
    updateLightbox(); // Load the new image
}