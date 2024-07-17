//pulse animation
document.addEventListener('DOMContentLoaded', () => {
const circles = document.querySelectorAll('.circle');

circles.forEach((circle, index) => {
circle.style.animation = `pulse 4s infinite ${index * 0.5}s`;
});
});

//overlay
document.addEventListener('DOMContentLoaded', () => {
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeOverlay');
const overlayContentContainer = document.getElementById('overlayContentContainer');
const navLinks = document.querySelectorAll('nav a');

const openOverlay = (url) => {
fetch(url)
.then(response => response.text())
.then(html => {
overlayContentContainer.innerHTML = html;
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
});