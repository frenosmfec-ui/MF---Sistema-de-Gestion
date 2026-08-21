export function cargarCampoModeloVehiculo(contenedorId) {
  return fetch('servicios/01-ingreso_de_servicio/03-datos_vehiculo/03-modelo_de_vehiculo/modelo_de_vehiculo.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar modelo_de_vehiculo');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando modelo_de_vehiculo:', error));
}