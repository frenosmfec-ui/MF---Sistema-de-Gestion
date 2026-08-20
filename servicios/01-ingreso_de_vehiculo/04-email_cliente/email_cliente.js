export function cargarCampoEmail(contenedorId) {
  return fetch('servicios/01-ingreso_de_vehiculo/04-email_cliente/email_cliente.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el campo email');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando campo email:', error));
}