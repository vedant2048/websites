const cards = document.querySelectorAll('.card1,.card2,.card3');  // Correctly selecting element by class
const targetElement = document.querySelector('.whatwedo');  // Correctly selecting element by class
const targetLinks = document.querySelectorAll('.whatwedo h2');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        targetElement.style.backgroundColor = 'rgba(0, 0, 0, 0.68)';
        targetLinks.forEach(link => link.style.color = "#ffffff");
    });

    card.addEventListener('mouseleave', () => {
        targetElement.style.backgroundColor = '#557975a7';
        targetLinks.forEach(link => link.style.color = "#000000");
    });
});
