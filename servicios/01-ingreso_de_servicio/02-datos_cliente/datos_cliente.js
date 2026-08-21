import { cargarCampoNombreCliente } from './01-nombre_cliente/nombre_cliente.js';
import { cargarCampoTelefono } from './02-telefono_cliente/telefono_cliente.js';
import { cargarCampoEmail } from './03-email_cliente/email_cliente.js';

export function cargarDatosCliente(contenedorPadreId) {
  return fetch('servicios/01-ingreso_de_servicio/02-datos_cliente/datos_cliente.html')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar datos del cliente');
      return response.text();
    })
    .then(data => {
      document.getElementById(contenedorPadreId).innerHTML = data;
      
      return Promise.all([
        cargarCampoNombreCliente('campo-nombre'),
        cargarCampoTelefono('campo-telefono'),
        cargarCampoEmail('campo-email')
      ]);
    })
    .then(() => {
      // Agregar event listener al header del acordeón
      const accordion = document.getElementById('accordion-datos-cliente');
      const header = accordion?.querySelector('.section-accordion-header');
      
      if (header && accordion) {
        header.addEventListener('click', () => {
          accordion.classList.toggle('active');
        });
      }
    })
    .catch(error => console.error('❌ Error cargando datos del cliente:', error));
}