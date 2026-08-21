export function cargarCampoTipoVehiculo(contenedorId) {
  return fetch('servicios/01-ingreso_de_servicio/03-datos_vehiculo/01-tipo_de_vehiculo/tipo_de_vehiculo.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el campo tipo vehículo');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando campo tipo vehículo:', error));
}