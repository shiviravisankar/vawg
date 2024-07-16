//pulse animation
document.addEventListener('DOMContentLoaded', () => {
const circles = document.querySelectorAll('.circle');

circles.forEach((circle, index) => {
circle.style.animation = `pulse 4s infinite ${index * 0.5}s`;
});
});

document.addEventListener('DOMContentLoaded', () => {
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeOverlay');
const overlayFrame = document.getElementById('overlayFrame');
const navLinks = document.querySelectorAll('nav a');

const openOverlay = (url) => {
overlayFrame.src = url;
overlay.style.display = 'block';
};

const closeOverlay = () => {
overlay.style.display = 'none';
overlayFrame.src = '';
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
});

