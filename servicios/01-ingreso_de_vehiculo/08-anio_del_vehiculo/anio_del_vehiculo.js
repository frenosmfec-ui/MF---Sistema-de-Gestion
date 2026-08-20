export function cargarCampoAnioVehiculo(contenedorId) {
  return fetch('servicios/01-ingreso_de_vehiculo/08-anio_del_vehiculo/anio_del_vehiculo.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el campo año');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando campo año:', error));
}