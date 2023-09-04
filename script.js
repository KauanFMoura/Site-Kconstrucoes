// Função para abrir a imagem em tela cheia
function openFullscreenImage(src) {
    // Cria o elemento para a imagem em tela cheia
    var fullscreenImage = document.createElement('div');
    fullscreenImage.className = 'fullscreen-image';

    // Cria a tag de imagem e atribui o src
    var img = document.createElement('img');
    img.src = src;

    // Adiciona a imagem em tela cheia ao elemento principal
    fullscreenImage.appendChild(img);

    // Adiciona o elemento ao body
    document.body.appendChild(fullscreenImage);

    // Fecha a imagem em tela cheia quando clicada
    fullscreenImage.addEventListener('click', function () {
        document.body.removeChild(fullscreenImage);
    });
}

// Adiciona um listener de evento a todas as imagens de card
var cardImages = document.querySelectorAll('.card-img-top');
cardImages.forEach(function (image) {
    image.addEventListener('click', function () {
        openFullscreenImage(image.src);
    });
});