// nav/nav.js
fetch('nav/nav.html')
  .then(response => {
    if (!response.ok) throw new Error('No se pudo cargar la navegación');
    return response.text();
  })
  .then(data => {
    document.getElementById('nav-container').innerHTML = data;
    
    // Opcional: Si tienes la lógica de cambio de pestañas en JS, 
    // asegúrate de inicializar los event listeners DESPUÉS de que el HTML se cargue.
    // Ejemplo: initTabListeners();
  })
  .catch(error => console.error('Error cargando la navegación:', error));