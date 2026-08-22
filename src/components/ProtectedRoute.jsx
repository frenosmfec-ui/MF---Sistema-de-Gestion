import { useState, useEffect } from 'react';
import { auth } from '../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './Login';

export default function ProtectedRoute({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Escuchar cambios de autenticación en tiempo real
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Mientras verifica si hay usuario logueado
  if (loading) {
    return (
      <div className="loading-app">
        <div className="loading-spinner-large"></div>
        <p>Cargando sistema...</p>
      </div>
    );
  }

  // Si NO hay usuario, muestra el Login
  if (!usuario) {
    return <Login />;
  }

  // Si hay usuario, muestra la aplicación principal
  return children;
}