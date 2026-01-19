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

const coverPage = document.querySelector('.coverpg');
const exploreBtn = document.querySelector('.container1 a');
const nextSection = document.querySelector('.whatwedo');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;
    
    const opacityVal = 1 - (scrollPos / (windowHeight * 0.9));
    const blurVal = (scrollPos / windowHeight) * 20;

    if (opacityVal > 0) {
        coverPage.style.opacity = opacityVal;
        coverPage.style.filter = `blur(${blurVal}px)`;
    } else {
        coverPage.style.opacity = 0;
    }
});

exploreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    nextSection.scrollIntoView({ behavior: 'smooth' });
});