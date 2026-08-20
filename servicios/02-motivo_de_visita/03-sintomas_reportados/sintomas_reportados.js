export function cargarCampoSintomas(contenedorId) {
  return fetch('servicios/02-motivo_de_visita/03-sintomas_reportados/sintomas_reportados.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el campo síntomas');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
      
      // Lógica para mostrar campo "Otro" cuando se selecciona
      const checkboxOtro = document.getElementById('sintoma-otro');
      const inputOtroDetalle = document.getElementById('servSintomaOtroDetalle');
      
      if (checkboxOtro && inputOtroDetalle) {
        checkboxOtro.addEventListener('change', (e) => {
          inputOtroDetalle.style.display = e.target.checked ? 'block' : 'none';
          if (!e.target.checked) {
            inputOtroDetalle.value = '';
          }
        });
      }
    })
    .catch(error => console.error('Error cargando campo síntomas:', error));
}