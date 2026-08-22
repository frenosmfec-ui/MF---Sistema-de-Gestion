import { useState, useEffect } from 'react';
import { auth } from '../services/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './Header.css';

export default function Header() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Escuchar cambios en la sesión (login / logout)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Función para cerrar sesión
  const handleLogout = async () => {
    if (window.confirm('¿Estás seguro de que deseas cerrar sesión?')) {
      try {
        await signOut(auth);
        // El componente ProtectedRoute se encargará de mostrar el Login automáticamente
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
        alert("Error al cerrar sesión");
      }
    }
  };

  const obtenerFechaFormateada = () => {
    const opciones = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date().toLocaleDateString('es-EC', opciones);
  };

  if (loading) return null; // Evita parpadeos mientras carga

  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="logo-block">
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
          
          <div className="app-title">
            <span className="m">M</span>
            <span className="f">F</span>
          </div>
          
          <div className="title-separator"></div>
          
          <div className="app-brand-text">
            <div className="app-brand-main">
              MANTENIMIENTO EN <span className="highlight">FRENOS</span>
            </div>
            <div className="app-subtitle">Sistema de Gestión · Quito</div>
          </div>
        </div>
        
        <div className="header-meta">
          <span className="meta-date">{obtenerFechaFormateada()}</span>
          
          {/* Sección del Usuario Logueado */}
          {user && (
            <div className="user-info-wrapper">
              <div className="user-details">
                {user.photoURL && (
                  <img src={user.photoURL} alt="Avatar" className="user-avatar" />
                )}
                <div className="user-text">
                  <span className="user-name">{user.displayName || 'Usuario'}</span>
                  <span className="user-email">{user.email}</span>
                </div>
              </div>
              <button className="btn-logout" onClick={handleLogout} title="Cerrar sesión">
                🚪 Salir
              </button>
            </div>
          )}
          
          <span className="meta-badge">v1.0</span>
        </div>
      </div>
    </header>
  );
}