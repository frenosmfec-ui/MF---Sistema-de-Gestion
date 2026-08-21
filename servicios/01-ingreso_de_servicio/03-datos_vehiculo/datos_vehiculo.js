import { cargarCampoTipoVehiculo } from './01-tipo_de_vehiculo/tipo_de_vehiculo.js';
import { cargarCampoMarcaVehiculo } from './02-marca_de_vehículo/marca_de_vehículo.js';
import { cargarCampoModeloVehiculo } from './03-modelo_de_vehiculo/modelo_de_vehiculo.js';
import { cargarCampoAnioVehiculo } from './04-anio_del_vehiculo/anio_del_vehiculo.js';
import { cargarCampoPlaca } from './05-placa_patente/placa_patente.js';
import { cargarCampoKilometraje } from './06-kilometraje_actual/kilometraje_actual.js';
import { cargarCampoCombustible } from './07-nivel_de_combustible/nivel_de_combustible.js';
import { cargarCampoObservaciones } from './08-observaciones_generales/observaciones_generales.js';

export function cargarDatosVehiculo(contenedorPadreId) {
  return fetch('servicios/01-ingreso_de_servicio/03-datos_vehiculo/datos_vehiculo.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar datos del vehículo');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorPadreId).innerHTML = data;
      
      return Promise.all([
        cargarCampoTipoVehiculo('campo-tipo-vehiculo'),
        cargarCampoMarcaVehiculo('campo-marca'),
        cargarCampoModeloVehiculo('campo-modelo'),
        cargarCampoAnioVehiculo('campo-anio'),
        cargarCampoPlaca('campo-placa'),
        cargarCampoKilometraje('campo-kilometraje'),
        cargarCampoCombustible('campo-combustible'),
        cargarCampoObservaciones('campo-observaciones')
      ]);
    })
    .then(() => {
      // Agregar event listener al header del acordeón
      const accordion = document.getElementById('accordion-datos-vehiculo');
      const header = accordion?.querySelector('.section-accordion-header');
      
      if (header && accordion) {
        header.addEventListener('click', () => {
          accordion.classList.toggle('active');
        });
      }
    })
    .catch(error => console.error('❌ Error cargando datos del vehículo:', error));
}