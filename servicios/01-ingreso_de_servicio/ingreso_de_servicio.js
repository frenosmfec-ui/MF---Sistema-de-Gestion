// servicios/01-ingreso_de_servicio/ingreso_de_servicio.js

// 1. Importar las funciones de los contenedores hijos
import { cargarCampoFecha } from './01-fecha_hora_ingreso/fecha.js';
import { cargarDatosCliente } from './02-datos_cliente/datos_cliente.js';
import { cargarDatosVehiculo } from './03-datos_vehiculo/datos_vehiculo.js';

// 2. Función principal para cargar todo el bloque de ingreso
export function cargarFormularioIngreso(contenedorId) {
  return fetch('servicios/01-ingreso_de_servicio/ingreso_de_servicio.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el formulario de ingreso');
      return response.text();
    })
    .then(data => {
      // Insertar el HTML contenedor principal
      document.getElementById(contenedorId).innerHTML = data;
      
      // Cargar los sub-módulos en paralelo
      return Promise.all([
        cargarCampoFecha('campo-fecha'),
        cargarDatosCliente('seccion-datos-cliente'),
        cargarDatosVehiculo('seccion-datos-vehiculo')
      ]);
    })
    .catch(error => console.error('❌ Error cargando formulario de ingreso:', error));
}

// 3. Recopilar todos los datos del formulario
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

// 4. Limpiar el formulario
export function limpiarFormularioIngreso() {
  const form = document.getElementById('form-ingreso-vehiculo');
  if (form) form.reset();
}