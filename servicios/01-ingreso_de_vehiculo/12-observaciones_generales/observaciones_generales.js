export function cargarCampoObservaciones(contenedorId) {
  return fetch('servicios/01-ingreso_de_vehiculo/12-observaciones_generales/observaciones_generales.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el campo observaciones');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando campo observaciones:', error));
}