export function cargarCampoNombreCliente(contenedorId) {
  return fetch('servicios/01-ingreso_de_vehiculo/02-nombre_cliente/nombre_cliente.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el campo nombre');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando campo nombre:', error));
}