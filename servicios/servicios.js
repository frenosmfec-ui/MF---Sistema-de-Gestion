// servicios/servicios.js
import { db } from '../firebase/firebase.js';
import { collection, addDoc, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ✅ RUTAS CORREGIDAS (cambié 01-ingreso_de_vehiculo por 01-ingreso_de_servicio)
import { cargarFormularioIngreso, obtenerDatosIngreso, limpiarFormularioIngreso } from './01-ingreso_de_servicio/ingreso_de_servicio.js';
import { cargarSeccionMotivoVisita, obtenerDatosMotivoVisita, limpiarFormularioMotivoVisita } from './02-motivo_de_visita/02-motivo_de_visita.js';

// ... el resto del archivo permanece igual ...

// ==========================================
// 1. CARGAR CSS DINÁMICAMENTE
// ==========================================
function cargarCSS(ruta) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = ruta;
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
}

// Cargar todos los CSS modulares
Promise.all([
  cargarCSS('servicios/servicios.css'),
  cargarCSS('servicios/01-ingreso_de_vehiculo/01-ingreso_de_vehiculo.css'),
  cargarCSS('servicios/02-motivo_de_visita/02-motivo_de_visita.css')
]).then(() => {
  console.log('✅ CSS modulares cargados');
}).catch(error => {
  console.error('❌ Error cargando CSS:', error);
});

// ==========================================
// 2. FUNCIONES DE BASE DE DATOS
// ==========================================
export async function registrarServicio(datos) {
    try {
        await addDoc(collection(db, "servicios"), {
            ...datos,
            anioVehiculo: Number(datos.anioVehiculo),
            kilometraje: Number(datos.kilometraje),
            createdAt: new Date()
        });
        return true;
    } catch (error) {
        console.error("Error al guardar servicio: ", error);
        return false;
    }
}

export async function obtenerServicios() {
    const q = query(collection(db, "servicios"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// ==========================================
// 3. CARGAR LA SECCIÓN PRINCIPAL
// ==========================================
fetch('servicios/servicios.html')
  .then(response => {
    if (!response.ok) throw new Error('No se pudo cargar la sección de servicios');
    return response.text();
  })
  .then(data => {
    document.getElementById('servicios-container').innerHTML = data;
    
    // Cargar las secciones del formulario
    return Promise.all([
      cargarFormularioIngreso('seccion-ingreso-container'),
      cargarSeccionMotivoVisita('seccion-motivo-container')
    ]);
  })
  .then(() => {
    inicializarAcordeones();
    inicializarLogicaServicios();
  })
  .catch(error => console.error('Error cargando servicios:', error));

// ==========================================
// 4. LÓGICA DE ACORDEONES
// ==========================================
function inicializarAcordeones() {
  const acordeones = document.querySelectorAll('.section-accordion');
  
  acordeones.forEach(acordeon => {
    const header = acordeon.querySelector('.section-accordion-header');
    
    header.addEventListener('click', () => {
      acordeon.classList.toggle('active');
    });
  });
  
  // Abrir el primero por defecto
  if (acordeones.length > 0) {
    acordeones[0].classList.add('active');
  }
}

// ==========================================
// 5. LÓGICA DEL FORMULARIO Y TABLA
// ==========================================
function inicializarLogicaServicios() {
  const form = document.getElementById('form-servicio');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = e.target.querySelector('button[type="submit"]');
      const textoOriginal = btn.textContent;
      
      btn.textContent = 'Guardando...';
      btn.disabled = true;

      const datosIngreso = obtenerDatosIngreso();
      const datosMotivo = obtenerDatosMotivoVisita();
      
      const datosCompletos = {
        ...datosIngreso,
        ...datosMotivo
      };

      const exito = await registrarServicio(datosCompletos);
      
      if (exito) {
        alert('✅ Registro guardado exitosamente en la nube');
        limpiarFormularioIngreso();
        limpiarFormularioMotivoVisita();
        cargarTabla();
      } else {
        alert('❌ Error al guardar. Revisa la consola (F12)');
      }
      
      btn.textContent = textoOriginal;
      btn.disabled = false;
    });
  }

  cargarTabla();
}

async function cargarTabla() {
  const tbody = document.getElementById('tbody-servicios');
  if (!tbody) return;
  
  const servicios = await obtenerServicios();
  
  if (servicios.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">No hay servicios registrados aún.</td></tr>';
    return;
  }

  tbody.innerHTML = servicios.map(s => `
    <tr>
      <td>${new Date(s.fechaHora).toLocaleString('es-EC')}</td>
      <td>${s.nombreCliente}</td>
      <td>${s.marcaVehiculo} ${s.modeloVehiculo}</td>
      <td>${s.motivoPrincipal?.substring(0, 30) || 'N/A'}...</td>
      <td>${s.ejeAfectado || 'N/A'}</td>
    </tr>
  `).join('');
}