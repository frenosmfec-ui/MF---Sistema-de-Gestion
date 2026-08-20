export function cargarCampoMarcaVehiculo(contenedorId) {
  return fetch('servicios/01-ingreso_de_vehiculo/06-marca_de_vehículo/marca_de_vehículo.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el campo marca');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando campo marca:', error));
}