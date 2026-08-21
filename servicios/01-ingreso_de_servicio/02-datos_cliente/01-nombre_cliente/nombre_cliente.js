// servicios/01-ingreso_de_servicio/02-datos_cliente/01-nombre_cliente/nombre_cliente.js

export function cargarCampoNombreCliente(contenedorId) {
  return fetch('servicios/01-ingreso_de_servicio/02-datos_cliente/01-nombre_cliente/nombre_cliente.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar nombre_cliente');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando nombre_cliente:', error));
}