const cardContainer = document.querySelector('.card-container');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

prevButton.addEventListener('click', () => {
    cardContainer.scrollBy({
    left: -cardContainer.offsetWidth,
    behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    cardContainer.scrollBy({
    left: cardContainer.offsetWidth,
    behavior: 'smooth'
    });
});