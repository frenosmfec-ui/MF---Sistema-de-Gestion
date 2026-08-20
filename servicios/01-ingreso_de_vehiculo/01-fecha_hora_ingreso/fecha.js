export function cargarCampoFecha(contenedorId) {
  return fetch('servicios/01-ingreso_de_vehiculo/01-fecha_hora_ingreso/fecha.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el campo fecha');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
      
      const inputFecha = document.getElementById('servFechaHora');
      if (inputFecha) {
        const ahora = new Date();
        const fechaFormateada = ahora.toISOString().slice(0, 16);
        inputFecha.value = fechaFormateada;
      }
    })
    .catch(error => console.error('Error cargando campo fecha:', error));
}