const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const links = document.querySelectorAll('nav a');

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});


// Función para crear burbujas
const contenedor = document.getElementById('burbujas-container');

function createBubble() {   
    const bubble = document.createElement('div');
    bubble.classList.add('burbuja');

    // Posición aleatoria dentro del contenedor
    bubble.style.left = Math.random() * contenedor.offsetWidth + 'px';
    const size = Math.random() * 15 + 10; // Tamaño aleatorio entre 15 y 25px
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.animationName = 'moverArriba';
    bubble.style.animationDuration = (Math.random() * 4 + 2) + 's'; // Duración aleatoria entre 2 y 5 segundos
    contenedor.appendChild(bubble);

    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

window.addEventListener("DOMContentLoaded", () => {
    // Crear burbujas cada 300ms
    setInterval(createBubble, 400);
});

const btnArriba = document.getElementById('btn-arriba');
const btnAbajo = document.getElementById('btn-abajo');

// subir 
btnArriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// bajar 
btnAbajo.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

// Ocultar botones al hacer scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const alturaPantalla = window.innerHeight;
    const alturaTotal = document.body.scrollHeight;
    // boton subir
    if (window.scrollY > 50) {
        btnArriba.style.opacity = "1";
    } else {
        btnArriba.style.opacity = "0";
    }

    // boton bajar
    if (scrollY + alturaPantalla >= alturaTotal - 10) {
        btnAbajo.style.opacity = "0"; // estás abajo del todo
    } else {
        btnAbajo.style.opacity = "1";
    }
});