export function cargarCampoEjeAfectado(contenedorId) {
  return fetch('servicios/02-motivo_de_visita/02-eje_afectado/eje_afectado.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el campo eje afectado');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando campo eje afectado:', error));
}