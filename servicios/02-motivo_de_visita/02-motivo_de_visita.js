// servicios/02-motivo_de_visita/02-motivo_de_visita.js
import { cargarCampoMotivoPrincipal } from './01-motivo_principal/motivo_principal.js';
import { cargarCampoEjeAfectado } from './02-eje_afectado/eje_afectado.js';
import { cargarCampoSintomas } from './03-sintomas_reportados/sintomas_reportados.js';

// Cargar el HTML de la sección motivo de visita
export function cargarSeccionMotivoVisita(contenedorId) {
  return fetch('servicios/02-motivo_de_visita/02-motivo_de_visita.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar la sección motivo de visita');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
      
      // Cargar todos los campos de esta sección
      return Promise.all([
        cargarCampoMotivoPrincipal('campo-motivo-principal'),
        cargarCampoEjeAfectado('campo-eje-afectado'),
        cargarCampoSintomas('campo-sintomas')
      ]);
    })
    .catch(error => console.error('Error cargando sección motivo de visita:', error));
}

// Recopilar datos de motivo de visita
export function obtenerDatosMotivoVisita() {
  // Obtener síntomas seleccionados
  const sintomasSeleccionados = [];
  const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked');
  checkboxes.forEach(cb => {
    if (cb.value === 'Otro') {
      const detalle = document.getElementById('servSintomaOtroDetalle')?.value;
      sintomasSeleccionados.push(detalle ? `Otro: ${detalle}` : 'Otro');
    } else {
      sintomasSeleccionados.push(cb.value);
    }
  });

  return {
    motivoPrincipal: document.getElementById('servMotivoPrincipal')?.value || '',
    ejeAfectado: document.getElementById('servEjeAfectado')?.value || '',
    sintomasReportados: sintomasSeleccionados
  };
}

// Limpiar formulario de motivo de visita
export function limpiarFormularioMotivoVisita() {
  const motivoPrincipal = document.getElementById('servMotivoPrincipal');
  const ejeAfectado = document.getElementById('servEjeAfectado');
  const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
  const inputOtroDetalle = document.getElementById('servSintomaOtroDetalle');
  
  if (motivoPrincipal) motivoPrincipal.value = '';
  if (ejeAfectado) ejeAfectado.value = '';
  checkboxes.forEach(cb => cb.checked = false);
  if (inputOtroDetalle) {
    inputOtroDetalle.value = '';
    inputOtroDetalle.style.display = 'none';
  }
}