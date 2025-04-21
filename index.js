console.log("JavaScript conectado com sucesso!");

// Exemplo: ação ao clicar em um botão
function mostrarMensagem() {
    alert("Você clicou no botão!");
}
function alternarTema() {
    const body = document.body;
    const botao = document.getElementById("temaBtn");
    const icone = botao.querySelector("i");

    body.classList.toggle("escuro");

    if (body.classList.contains("escuro")) {
        icone.classList.remove("fa-moon");
        icone.classList.add("fa-sun");
    } else {
        icone.classList.remove("fa-sun");
        icone.classList.add("fa-moon");
    }
}

// Seleciona todos os elementos com a classe "animar"
const elementos = document.querySelectorAll('.animar');

function animarAoRolar() {
    const alturaJanela = window.innerHeight;

    elementos.forEach(elemento => {
        const posicaoElemento = elemento.getBoundingClientRect().top;

        // Quando o elemento estiver visível, adiciona a classe 'visivel'
        if (posicaoElemento < alturaJanela - 100) {
            elemento.classList.add('visivel');
        } else {
            elemento.classList.remove('visivel');
        }
    });
}

// Aciona a função ao carregar e ao rolar
window.addEventListener('scroll', animarAoRolar);
window.addEventListener('load', animarAoRolar);

const carrossel = document.querySelector('.carrossel-imagens');
const anterior = document.querySelector('.anterior');
const proxima = document.querySelector('.proxima');

let scrollPosition = 0;
const slideWidth = 310; // largura + gap (ajuste conforme seu layout)

anterior.addEventListener('click', () => {
    scrollPosition -= slideWidth;
    if (scrollPosition < 0) scrollPosition = 0;
    carrossel.style.transform = `translateX(-${scrollPosition}px)`;
});

proxima.addEventListener('click', () => {
    const maxScroll = carrossel.scrollWidth - carrossel.clientWidth;
    scrollPosition += slideWidth;
    if (scrollPosition > maxScroll) scrollPosition = maxScroll;
    carrossel.style.transform = `translateX(-${scrollPosition}px)`;
});
// Mostrar o botão quando rolar 300px
window.addEventListener('scroll', function () {
    const botao = document.getElementById('voltarTopo');
    if (window.scrollY > 300) {
        botao.style.display = 'block';
    } else {
        botao.style.display = 'none';
    }
});

document.getElementById('voltarTopo').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let currentSlide = 0;

function moveSlide(direction) {
    let slides = document.querySelectorAll(".carrossel-imagens img");
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Volta ao último slide
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Vai ao primeiro slide
    }

    let newTransformValue = -currentSlide * 310; // 310px é o tamanho de cada imagem + o gap de 10px
    document.querySelector(".carrossel-imagens").style.transform = `translateX(${newTransformValue}px)`;
}









