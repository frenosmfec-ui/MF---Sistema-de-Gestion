export function cargarCampoMotivoPrincipal(contenedorId) {
  return fetch('servicios/02-motivo_de_visita/01-motivo_principal/motivo_principal.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el campo motivo principal');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando campo motivo principal:', error));
}