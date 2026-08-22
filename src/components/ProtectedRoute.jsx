import { useState, useEffect } from 'react';
import { auth } from '../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './Login';

//  LISTA DE CORREOS AUTORIZADOS
const ALLOWED_EMAILS = [
  'frenos.mf.ec@gmail.com',
  'tu_correo@gmail.com', // ← CAMBIA ESTO por tu email real
  // Agrega más emails aquí
];

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 1. Mientras carga Firebase
  if (loading) {
    return (
      <div className="loading-app">
        <div className="loading-spinner-large"></div>
        <p>Cargando sistema...</p>
      </div>
    );
  }

  // 2. Si NO hay usuario → Mostrar Login (NO bloquear)
  if (!user) {
    return <Login />;
  }

  // 3. Si hay usuario PERO no está autorizado → Mostrar Acceso Denegado
  if (!ALLOWED_EMAILS.includes(user.email)) {
    return (
      <div className="access-denied-container">
        <div className="access-denied">
          <div className="denied-icon">🚫</div>
          <h2>Acceso Denegado</h2>
          <p>La cuenta <strong>{user.email}</strong> no está autorizada.</p>
          <p className="denied-subtitle">Solo el personal registrado puede acceder al sistema.</p>
          <button 
            onClick={async () => {
              await auth.signOut();
              window.location.reload(); // Forzar recarga para limpiar estado
            }} 
            className="btn-logout-denied"
          >
            Volver al Login
          </button>
        </div>
      </div>
    );
  }

  // 4. Si está logueado Y autorizado → Mostrar la App
  return children;
}