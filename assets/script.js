document.addEventListener('DOMContentLoaded', () => {
    // Pulse animation
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle, index) => {
        circle.style.animation = `pulse 4s infinite ${index * 0.5}s`;
    });

    // Overlay functionality
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('closeOverlay');
    const overlayContentContainer = document.getElementById('overlayContentContainer');
    const navLinks = document.querySelectorAll('nav a');

    const openOverlay = (url) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                overlayContentContainer.innerHTML = html;
                overlay.style.display = 'block';
                // Initialize navigation after content is loaded
                initializeOverlayNavigation();
            })
            .catch(error => {
                console.error('Error loading overlay content:', error);
                overlayContentContainer.innerHTML = '<p>Error loading content. Please try again later.</p>';
                overlay.style.display = 'block';
            });
    };

    const closeOverlay = () => {
        overlay.style.display = 'none';
        overlayContentContainer.innerHTML = '';
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const overlayUrl = link.getAttribute('data-overlay');
            if (overlayUrl) {
                e.preventDefault();
                openOverlay(overlayUrl);
            }
        });
    });

    closeButton.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeOverlay();
    });

    // Function to initialize navigation in the overlay
    function initializeOverlayNavigation() {
        const links = overlayContentContainer.querySelectorAll('#sidebar a');
        const pages = overlayContentContainer.querySelectorAll('.page');
        const menuItems = overlayContentContainer.querySelectorAll('.menu-item');

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const pageId = this.getAttribute('data-page');

                pages.forEach(page => page.classList.remove('active'));
                menuItems.forEach(item => item.classList.remove('active'));

                overlayContentContainer.querySelector(`#${pageId}`).classList.add('active');
                this.parentElement.classList.add('active');

                // Scroll to the top of the content area
                overlayContentContainer.querySelector('#content').scrollIntoView({behavior: 'smooth'});
            });
        });
    }
});