export function cargarCampoMarcaVehiculo(contenedorId) {
  return fetch('servicios/01-ingreso_de_servicio/03-datos_vehiculo/02-marca_de_vehículo/marca_de_vehículo.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar marca_de_vehículo');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando marca_de_vehículo:', error));
}