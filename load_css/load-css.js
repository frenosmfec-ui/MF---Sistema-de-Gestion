// js/load-css.js

/**
 * Carga dinámicamente un archivo CSS
 * @param {string} ruta - Ruta al archivo CSS
 * @returns {Promise}
 */
export function cargarCSS(ruta) {
  return new Promise((resolve, reject) => {
    // Verificar si ya está cargado
    const existente = document.querySelector(`link[href="${ruta}"]`);
    if (existente) {
      resolve();
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = ruta;
    
    link.onload = () => {
      console.log(`✅ CSS cargado: ${ruta}`);
      resolve();
    };
    
    link.onerror = () => {
      console.error(`❌ Error cargando CSS: ${ruta}`);
      reject(new Error(`No se pudo cargar ${ruta}`));
    };
    
    document.head.appendChild(link);
  });
}