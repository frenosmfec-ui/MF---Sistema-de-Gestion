import { useState } from 'react';
import { auth, googleProvider } from '../services/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup
} from 'firebase/auth';
import './Login.css';

export default function Login() {
  const [modo, setModo] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (modo === 'registro') {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: nombre });
        alert('✅ Cuenta creada exitosamente');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert('✅ Bienvenido de vuelta');
      }
      
      setEmail('');
      setPassword('');
      setNombre('');
      
    } catch (error) {
      console.error('Error:', error);
      handleError(error.code);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    
    try {
      await signInWithPopup(auth, googleProvider);
      alert('✅ Inicio de sesión con Google exitoso');
    } catch (error) {
      console.error('Error con Google:', error);
      handleError(error.code);
    } finally {
      setLoading(false);
    }
  };

  const handleError = (code) => {
    switch (code) {
      case 'auth/email-already-in-use':
        setError('Este correo ya está registrado');
        break;
      case 'auth/invalid-email':
        setError('Correo electrónico inválido');
        break;
      case 'auth/weak-password':
        setError('La contraseña debe tener al menos 6 caracteres');
        break;
      case 'auth/user-not-found':
        setError('Usuario no encontrado');
        break;
      case 'auth/wrong-password':
        setError('Contraseña incorrecta');
        break;
      case 'auth/popup-closed-by-user':
        setError('Ventana de Google cerrada. Intenta de nuevo.');
        break;
      default:
        setError('Error al autenticar. Intenta de nuevo.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <span className="logo-m">M</span>
            <span className="logo-f">F</span>
          </div>
          <h1>Mantenimiento en Frenos</h1>
          <p>Sistema de Gestión</p>
        </div>

        <div className="login-tabs">
          <button 
            className={`tab ${modo === 'login' ? 'active' : ''}`}
            onClick={() => setModo('login')}
          >
            Iniciar Sesión
          </button>
          <button 
            className={`tab ${modo === 'registro' ? 'active' : ''}`}
            onClick={() => setModo('registro')}
          >
            Crear Cuenta
          </button>
        </div>

        {error && <div className="error-message">⚠️ {error}</div>}

        {/* Botón Google - SIEMPRE VISIBLE */}
        <button 
          type="button"
          className="btn-google"
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          <svg className="google-icon" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continuar con Google
        </button>

        <div className="login-divider">
          <span>o</span>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {modo === 'registro' && (
            <div className="form-group">
              <label htmlFor="nombre">
                <span className="icon">👤</span>
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej: Juan Pérez"
                required={modo === 'registro'}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">
              <span className="icon">✉️</span>
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <span className="icon">🔒</span>
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength="6"
            />
          </div>

          <button 
            type="submit" 
            className="btn-login"
            disabled={loading}
          >
            {loading ? (
              <span className="loading-spinner"></span>
            ) : modo === 'login' ? (
              '🔑 Iniciar Sesión'
            ) : (
              '✅ Crear Cuenta'
            )}
          </button>
        </form>

        <div className="login-footer">
          <p>© 2026 MF - Mantenimiento en Frenos</p>
          <p className="small">Sistema de Gestión · Quito</p>
        </div>
      </div>
    </div>
  );
}