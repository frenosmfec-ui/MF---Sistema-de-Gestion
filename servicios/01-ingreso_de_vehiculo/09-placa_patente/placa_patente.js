export function cargarCampoPlaca(contenedorId) {
  return fetch('servicios/01-ingreso_de_vehiculo/09-placa_patente/placa_patente.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el campo placa');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando campo placa:', error));
}