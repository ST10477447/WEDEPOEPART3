 // Mobile navigation toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
       
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
       
        // Lightbox functionality
        let currentImageIndex = 0;
        const images = [
            { src: 'images/b.jpg', caption: 'Church program' },
            { src: 'images/j.jpg', caption: 'Choir' },
            { src: 'images/k.jpg', caption: 'pastor Churchil' },
            { src: 'images/image 7.jpg', caption: 'Quote' },
            { src: 'images/image 8.jpg', caption: 'Quote' },
            { src: 'images/image 10.jpg', caption: 'Misson and Foundation' },
            { src: 'images/w.png', caption: 'Church founders' },
            { src: 'images/v.png', caption: 'Pastor Mercy' }
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