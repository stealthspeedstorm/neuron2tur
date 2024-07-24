// script.js
document.querySelectorAll('.navbar a').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(0.95)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

