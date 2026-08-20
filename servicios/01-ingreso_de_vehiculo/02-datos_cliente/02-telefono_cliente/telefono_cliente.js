export function cargarCampoTelefono(contenedorId) {
  return fetch('servicios/01-ingreso_de_vehiculo/03-telefono_cliente/telefono_cliente.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el campo teléfono');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando campo teléfono:', error));
}