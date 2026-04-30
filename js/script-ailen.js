const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('nav a');

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

const btnArriba = document.getElementById('btn-arriba');
const btnAbajo = document.getElementById('btn-abajo');

btnArriba.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

btnAbajo.addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const alturaPantalla = window.innerHeight;
    const alturaTotal = document.body.scrollHeight;

    btnArriba.style.opacity = scrollY > 50 ? "1" : "0";
    btnAbajo.style.opacity = scrollY + alturaPantalla >= alturaTotal - 10 ? "0" : "1";
});

// ── TOGGLE TEMA ──
const themeBtn = document.getElementById("toggle-theme"); // ← faltaba declararlo

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        themeBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "🌙";
    }
});