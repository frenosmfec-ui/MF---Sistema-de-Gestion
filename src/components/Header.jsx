import './Header.css';

export default function Header() {
  // Función para obtener la fecha formateada
  const obtenerFechaFormateada = () => {
    const opciones = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date().toLocaleDateString('es-EC', opciones);
  };

  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="logo-block">
          {/* Logo SVG */}
          <div className="logo-icon">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="16" stroke="white" strokeWidth="2.5"/>
              <circle cx="18" cy="18" r="8" stroke="white" strokeWidth="2"/>
              <circle cx="18" cy="18" r="3" fill="white"/>
              <line x1="18" y1="2" x2="18" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="18" y1="28" x2="18" y2="34" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="2" y1="18" x2="8" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="28" y1="18" x2="34" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          
          {/* Título MF */}
          <div className="app-title">
            <span className="m">M</span>
            <span className="f">F</span>
          </div>
          
          {/* Separador */}
          <div className="title-separator"></div>
          
          {/* Texto del negocio */}
          <div className="app-brand-text">
            <div className="app-brand-main">
              MANTENIMIENTO EN <span className="highlight">FRENOS</span>
            </div>
            <div className="app-subtitle">Sistema de Gestión · Quito</div>
          </div>
        </div>
        
        {/* Meta info */}
        <div className="header-meta">
          <span className="meta-date">{obtenerFechaFormateada()}</span>
          <span className="meta-badge">v1.0</span>
        </div>
      </div>
    </header>
  );
}