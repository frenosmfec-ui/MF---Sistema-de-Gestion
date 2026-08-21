export function cargarCampoObservaciones(contenedorId) {
  return fetch('servicios/01-ingreso_de_servicio/03-datos_vehiculo/08-observaciones_generales/observaciones_generales.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar observaciones_generales');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando observaciones_generales:', error));
}