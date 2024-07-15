document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach((circle, index) => {
        circle.style.animation = `pulse 4s infinite ${index * 0.5}s`;
    });
});