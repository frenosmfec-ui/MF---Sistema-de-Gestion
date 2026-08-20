export function cargarCampoCombustible(contenedorId) {
  return fetch('servicios/01-ingreso_de_vehiculo/11-nivel_de_combustible/nivel_de_combustible.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el campo combustible');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
    })
    .catch(error => console.error('Error cargando campo combustible:', error));
}