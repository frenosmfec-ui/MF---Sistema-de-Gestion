export function cargarCampoPlaca(contenedorId) {
  return fetch('servicios/01-ingreso_de_servicio/03-datos_vehiculo/05-placa_patente/placa_patente.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar placa_patente');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando placa_patente:', error));
}