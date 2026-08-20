// Cargar el header externo
fetch('header/header.html')
  .then(response => {
    if (!response.ok) throw new Error('No se pudo cargar el header');
    return response.text();
  })
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
    
    // Si tienes una función para actualizar la fecha, llámala aquí
    // actualizarFecha();
  })
  .catch(error => console.error('Error cargando el header:', error));

  // header/header.js

// 1. Cargar el HTML del header
fetch('header/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
    
    // 2. Establecer la fecha actual en formato "Lunes, 21 de Agosto 2026"
    const dateElement = document.getElementById('headerDate');
    if (dateElement) {
      const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const fechaHoy = new Date().toLocaleDateString('es-EC', opciones);
      // Capitalizar la primera letra
      dateElement.textContent = fechaHoy.charAt(0).toUpperCase() + fechaHoy.slice(1);
    }
  })
  .catch(error => console.error('Error cargando header:', error));