export function cargarCampoKilometraje(contenedorId) {
  return fetch('servicios/01-ingreso_de_servicio/03-datos_vehiculo/06-kilometraje_actual/kilometraje_actual.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar kilometraje_actual');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando kilometraje_actual:', error));
}