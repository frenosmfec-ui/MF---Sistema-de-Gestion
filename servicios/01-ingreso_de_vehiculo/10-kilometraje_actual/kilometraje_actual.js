export function cargarCampoKilometraje(contenedorId) {
  return fetch('servicios/01-ingreso_de_vehiculo/10-kilometraje_actual/kilometraje_actual.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el campo kilometraje');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando campo kilometraje:', error));
}