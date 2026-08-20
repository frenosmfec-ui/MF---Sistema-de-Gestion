export function cargarCampoModeloVehiculo(contenedorId) {
  return fetch('servicios/01-ingreso_de_vehiculo/07-modelo_de_vehiculo/modelo_de_vehiculo.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el campo modelo');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando campo modelo:', error));
}