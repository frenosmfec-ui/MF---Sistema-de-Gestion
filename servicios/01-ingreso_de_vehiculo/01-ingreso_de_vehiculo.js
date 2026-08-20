// servicios/01-ingreso_de_vehiculo/01-ingreso_de_vehiculo.js

// Importar funciones de carga de cada campo
import { cargarCampoFecha } from './01-fecha_hora_ingreso/fecha.js';
import { cargarCampoNombreCliente } from './02-nombre_cliente/nombre_cliente.js';
import { cargarCampoTelefono } from './03-telefono_cliente/telefono_cliente.js';
import { cargarCampoEmail } from './04-email_cliente/email_cliente.js';
import { cargarCampoTipoVehiculo } from './05-tipo_de_vehiculo/tipo_de_vehiculo.js';
import { cargarCampoMarcaVehiculo } from './06-marca_de_vehículo/marca_de_vehículo.js';
import { cargarCampoModeloVehiculo } from './07-modelo_de_vehiculo/modelo_de_vehiculo.js';
import { cargarCampoAnioVehiculo } from './08-anio_del_vehiculo/anio_del_vehiculo.js';
import { cargarCampoPlaca } from './09-placa_patente/placa_patente.js';
import { cargarCampoKilometraje } from './10-kilometraje_actual/kilometraje_actual.js';
import { cargarCampoCombustible } from './11-nivel_de_combustible/nivel_de_combustible.js';
import { cargarCampoObservaciones } from './12-observaciones_generales/observaciones_generales.js';

// Cargar el HTML del formulario de ingreso
export function cargarFormularioIngreso(contenedorId) {
  return fetch('servicios/01-ingreso_de_vehiculo/01-ingreso_de_vehiculo.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el formulario de ingreso');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorId).innerHTML = data;
      
      // Cargar todos los campos individuales
      return Promise.all([
        cargarCampoFecha('campo-fecha'),
        cargarCampoNombreCliente('campo-nombre'),
        cargarCampoTelefono('campo-telefono'),
        cargarCampoEmail('campo-email'),
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
    .catch(error => console.error('Error cargando formulario de ingreso:', error));
}

// Recopilar todos los datos del formulario
export function obtenerDatosIngreso() {
  return {
    fechaHora: document.getElementById('servFechaHora')?.value || '',
    nombreCliente: document.getElementById('servNombreCliente')?.value || '',
    telefonoCliente: document.getElementById('servTelefonoCliente')?.value || '',
    emailCliente: document.getElementById('servEmailCliente')?.value || '',
    tipoVehiculo: document.getElementById('servTipoVehiculo')?.value || '',
    marcaVehiculo: document.getElementById('servMarcaVehiculo')?.value || '',
    modeloVehiculo: document.getElementById('servModeloVehiculo')?.value || '',
    anioVehiculo: document.getElementById('servAnioVehiculo')?.value || '',
    placa: document.getElementById('servPlaca')?.value || '',
    kilometraje: document.getElementById('servKilometraje')?.value || '',
    combustible: document.getElementById('servCombustible')?.value || '',
    observaciones: document.getElementById('servObservaciones')?.value || ''
  };
}

// Limpiar el formulario
export function limpiarFormularioIngreso() {
  const form = document.getElementById('form-ingreso-vehiculo');
  if (form) form.reset();
}