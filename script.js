const cardImageOverlay = document.querySelector('.card__image-overlay');
const cardTitle = document.querySelector('.card__title');
const cardCreatorName = document.querySelector('.card__creator-name');
const card = document.querySelector('.card');
const eyeOverlayImg = document.querySelector('.eye-overlay-img');


card.addEventListener('click', () => {
    cardImageOverlay.classList.toggle('is-active');
    cardTitle.classList.toggle('is-active');
    cardCreatorName.classList.toggle('is-active');
    eyeOverlayImg.toggleAttribute('hidden');
});
