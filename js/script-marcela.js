(function() {
  const toggleButton = document.querySelector('#toggleInfo');
  const infoSection = document.querySelector('#infoSection');
  
  if (!toggleButton) return;

  // Lógica para desplegar/ocultar la info principal
  toggleButton.addEventListener('click', function() {
    infoSection.classList.toggle('active');
    this.textContent = infoSection.classList.contains('active') 
      ? 'Ocultar información' 
      : 'Más sobre mí';
  });

  // Lógica para las pestañas (Habilidades, Pelis, Música)
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
})();