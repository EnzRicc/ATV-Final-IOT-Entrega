function moveSlide(direction, carouselId) {
  const carousel = document.getElementById(carouselId);
  const items = carousel.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  let currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));

  // Remove classe ativa do item atual
  items[currentIndex].classList.remove('active');

  // Calcula o próximo índice
  currentIndex = (currentIndex + direction + totalItems) % totalItems;

  // Adiciona a classe ativa ao novo item
  items[currentIndex].classList.add('active');

  // Atualiza a posição do contêiner
  const inner = carousel.querySelector('.carousel-inner');
  inner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Configuração do Canvas
const canvas = document.createElement('canvas');
document.querySelector('.background-animation').appendChild(canvas);
const ctx = canvas.getContext('2d');

let width, height, squareSize, columns, rows, offsetX, offsetY;

function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    // Configurações do grid de quadrados
    squareSize = 50; // Tamanho de cada quadrado
    columns = Math.ceil(width / squareSize);
    rows = Math.ceil(height / squareSize);
    offsetX = 0; // Posição inicial em X
    offsetY = 0; // Posição inicial em Y
}

// Atualiza a posição dos quadrados e desenha o grid
function update() {
    ctx.clearRect(0, 0, width, height);

    // Desenha os quadrados
    for (let row = -1; row < rows + 1; row++) {
        for (let col = -1; col < columns + 1; col++) {
            const x = col * squareSize + offsetX;
            const y = row * squareSize + offsetY;

            // Alterna as cores (preto/branco)
            ctx.fillStyle = (row + col) % 2 === 0 ? '#000' : '#fff';
            ctx.fillRect(x, y, squareSize, squareSize);
        }
    }

    // Move os quadrados na diagonal
    offsetX -= 2; // Velocidade em X
    offsetY += 2; // Velocidade em Y

    // Reinicia o grid quando sair da tela
    if (offsetX <= -squareSize) offsetX = 0;
    if (offsetY >= squareSize) offsetY = 0;

    requestAnimationFrame(update);
}

// Redimensiona o canvas ao alterar o tamanho da janela
window.addEventListener('resize', init);

// Inicializa e inicia a animação
init();
update();

// Função para fechar o popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Mostrar o popup ao carregar a página
window.onload = function () {
    const popupMessage = document.getElementById("popup-message");
    popupMessage.textContent = "Fique à vontade para explorar todas as matérias!";
    document.getElementById("popup").style.display = "flex";
};
