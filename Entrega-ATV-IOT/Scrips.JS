const carouselImages = document.querySelector('.carousel-images');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? 2 : currentIndex - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 2) ? 0 : currentIndex + 1;
    updateCarousel();
});

function updateCarousel() {
    const offset = currentIndex * -100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

// Exibe o popup ao carregar a página
window.onload = function() {
    document.getElementById("popup").classList.add("active");
};
 
// Função para fechar o popup
function fecharPopup() {
    document.getElementById("popup").classList.remove("active");
}