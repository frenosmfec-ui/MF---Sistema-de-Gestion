export function cargarCampoAnioVehiculo(contenedorId) {
  return fetch('servicios/01-ingreso_de_servicio/03-datos_vehiculo/04-anio_del_vehiculo/anio_del_vehiculo.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar anio_del_vehiculo');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando anio_del_vehiculo:', error));
}