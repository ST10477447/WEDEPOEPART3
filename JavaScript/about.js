 document.getElementById("menu").classList.toggle("active");
    
 const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
       
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
// Lightbox functionality
        let currentImageIndex = 0;
        const images = [
            { src: 'images/u.png', caption: 'Our late Pastor and Founder Rev Dr Yohanan Uche Akwada' },
            { src: 'images/o.png', caption: 'General Overseer Pastor Tabitha Akwada' },
            { src: 'images/v.png', caption: 'Ministering Pastor Mercy Okafor' },
            { src: 'images/n.jpg', caption: 'Pastor Churchill' },
            { src: 'images/x.png', caption: 'Pastor Lukmon' },
            { src: 'images/p.jpg', caption: 'Pastor Connie' },
            { src: 'images/q.jpg', caption: 'Glorious Choir' }
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
        function toggleMenu() {
      document.getElementById("menu").classList.toggle("active");
    }