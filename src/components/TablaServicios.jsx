import { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  getDoc
} from 'firebase/firestore';
import ModalEditar from './ModalEditar';
import './TablaServicios.css';

export default function TablaServicios() {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [servicioEditando, setServicioEditando] = useState(null);
  const [accionActual, setAccionActual] = useState(null); // 'editar' | 'ver'

  useEffect(() => {
    const q = query(collection(db, 'servicios'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const datos = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setServicios(datos);
      setLoading(false);
    }, (error) => {
      console.error('Error escuchando servicios:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Eliminar registro
  const handleEliminar = async (id, cliente) => {
    if (!window.confirm(`¿Estás seguro de eliminar el registro de "${cliente}"?\n\nEsta acción no se puede deshacer.`)) {
      return;
    }

    try {
      await deleteDoc(doc(db, 'servicios', id));
      alert('✅ Registro eliminado correctamente');
    } catch (error) {
      console.error('❌ Error al eliminar:', error);
      alert('Error al eliminar el registro');
    }
  };

  // Abrir modal para ver/editar
  const handleAccion = (servicio, accion) => {
    setServicioEditando(servicio);
    setAccionActual(accion);
    setModalOpen(true);
  };

  // Actualizar registro desde el modal
  const handleActualizar = async (datosActualizados) => {
    try {
      const docRef = doc(db, 'servicios', servicioEditando.id);
      await updateDoc(docRef, {
        ...datosActualizados,
        updatedAt: new Date()
      });
      alert('✅ Registro actualizado correctamente');
      setModalOpen(false);
      setServicioEditando(null);
    } catch (error) {
      console.error('❌ Error al actualizar:', error);
      alert('Error al actualizar el registro');
    }
  };

  const formatearFecha = (fecha) => {
    if (!fecha) return 'N/A';
    const date = fecha.toDate ? fecha.toDate() : new Date(fecha);
    return date.toLocaleString('es-EC', {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit'
    });
  };

  return (
    <>
      <div className="tabla-servicios-container">
        <div className="tabla-header">
          <h3><span className="tabla-icon">📋</span> Servicios Registrados</h3>
          <span className="tabla-badge">{servicios.length} registros</span>
        </div>

        {loading ? (
          <div className="tabla-loading">
            <div className="loading-spinner"></div>
            <span>Cargando registros...</span>
          </div>
        ) : servicios.length === 0 ? (
          <div className="tabla-vacia">
            <span className="tabla-vacia-icon">📭</span>
            <p>No hay servicios registrados aún</p>
            <p className="tabla-vacia-subtext">Los registros aparecerán aquí después de guardar</p>
          </div>
        ) : (
          <div className="tabla-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Cliente</th>
                  <th>Teléfono</th>
                  <th>Vehículo</th>
                  <th>Placa</th>
                  <th className="acciones-header">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {servicios.map((servicio) => (
                  <tr key={servicio.id}>
                    <td className="fecha-cell">{formatearFecha(servicio.createdAt)}</td>
                    <td className="cliente-cell">{servicio.nombreCliente || 'N/A'}</td>
                    <td className="telefono-cell">{servicio.telefonoCliente || 'N/A'}</td>
                    <td>{servicio.marcaVehiculo} {servicio.modeloVehiculo}</td>
                    <td className="placa-cell">{servicio.placa || 'N/A'}</td>
                    <td className="acciones-cell">
                      <div className="acciones-buttons">
                        <button 
                          className="btn-accion btn-ver"
                          onClick={() => handleAccion(servicio, 'ver')}
                          title="Ver detalles"
                        >
                          👁️
                        </button>
                        <button 
                          className="btn-accion btn-editar"
                          onClick={() => handleAccion(servicio, 'editar')}
                          title="Editar"
                        >
                          ✏️
                        </button>
                        <button 
                          className="btn-accion btn-eliminar"
                          onClick={() => handleEliminar(servicio.id, servicio.nombreCliente)}
                          title="Eliminar"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal para Editar/Ver */}
      {modalOpen && servicioEditando && (
        <ModalEditar
          servicio={servicioEditando}
          accion={accionActual}
          onClose={() => {
            setModalOpen(false);
            setServicioEditando(null);
          }}
          onActualizar={handleActualizar}
        />
      )}
    </>
  );
}