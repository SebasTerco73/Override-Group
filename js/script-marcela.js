/**
 * PORTFOLIO INTERACTIVO - MARCELA HERRERA
 */

// 1. ALERTA DE BIENVENIDA 
window.onload = function() {
    Swal.fire({
        title: '¡Bienvenido/a!',
        text: 'Portafolio de Marcela Herrera. Biotecnología + Software.',
        icon: 'info',
        confirmButtonText: 'Comenzar',
        confirmButtonColor: '#38bdf8',
        background: '#1e293b',
        color: '#ffffff',
        backdrop: `rgba(15, 23, 42, 0.8)`
    });
};

// 2. EFECTO DE HOVER EN LA FOTO DE PERFIL
const avatar = document.querySelector('.avatar');
if (avatar) {
    avatar.addEventListener('mouseenter', () => {
        avatar.style.border = '5px solid #38bdf8';
        avatar.style.boxShadow = '0 0 30px rgba(56, 189, 248, 0.6)';
    });
    avatar.addEventListener('mouseleave', () => {
        avatar.style.border = '3px solid #38bdf8';
        avatar.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.3)';
    });
}

// 3. MENÚ HAMBURGUESA
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });
}

// 4. VALIDACIÓN DEL FORMULARIO
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        Swal.fire({
            title: '¡Mensaje Enviado!',
            text: 'Gracias por contactarte conmigo, te responderé pronto.',
            icon: 'success',
            confirmButtonColor: '#38bdf8',
            background: '#1e293b',
            color: '#ffffff'
        });
        form.reset();
    });
}

// 5. BOTÓN INTELIGENTE (SUBIR Y BAJAR) - SOLUCIÓN "HASTA EL FONDO"
const btnScroll = document.getElementById('btn-scroll-dinamico');
const iconoScroll = document.getElementById('icono-scroll');

if (btnScroll && iconoScroll) {
    window.addEventListener('scroll', () => {
        // Si bajamos más de 300px, la flecha apunta hacia arriba
        if (window.scrollY > 300) {
            iconoScroll.classList.remove('fa-arrow-down');
            iconoScroll.classList.add('fa-arrow-up');
        } else {
            // Si estamos arriba, la flecha apunta hacia abajo
            iconoScroll.classList.remove('fa-arrow-up');
            iconoScroll.classList.add('fa-arrow-down');
        }
    });

    btnScroll.addEventListener('click', () => {
        if (window.scrollY > 300) {
            // Si la flecha apunta arriba, sube al inicio
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Si la flecha apunta abajo, baja hasta el último píxel del documento
            window.scrollTo({ 
                top: document.body.scrollHeight, 
                behavior: 'smooth' 
            });
        }
    });
}