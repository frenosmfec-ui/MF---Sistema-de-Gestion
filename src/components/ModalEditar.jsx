import { useState, useEffect } from 'react';
import './ModalEditar.css';

export default function ModalEditar({ servicio, accion, onClose, onActualizar }) {
  const [formData, setFormData] = useState({ ...servicio });

  useEffect(() => {
    setFormData({ ...servicio });
  }, [servicio]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onActualizar(formData);
  };

  const esSoloLectura = accion === 'ver';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>
            {accion === 'editar' ? '✏️ Editar Servicio' : '️ Ver Detalles'}
          </h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          {/* Fecha */}
          <div className="form-group">
            <label>Fecha y Hora de Ingreso</label>
            <input
              type="datetime-local"
              name="fechaHora"
              value={formData.fechaHora || ''}
              onChange={handleChange}
              disabled={esSoloLectura}
            />
          </div>

          {/* Cliente */}
          <div className="form-row">
            <div className="form-group">
              <label>Nombre del Cliente</label>
              <input
                type="text"
                name="nombreCliente"
                value={formData.nombreCliente || ''}
                onChange={handleChange}
                disabled={esSoloLectura}
                required={!esSoloLectura}
              />
            </div>
            <div className="form-group">
              <label>Teléfono</label>
              <input
                type="tel"
                name="telefonoCliente"
                value={formData.telefonoCliente || ''}
                onChange={handleChange}
                disabled={esSoloLectura}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="emailCliente"
              value={formData.emailCliente || ''}
              onChange={handleChange}
              disabled={esSoloLectura}
            />
          </div>

          {/* Vehículo */}
          <div className="form-row">
            <div className="form-group">
              <label>Tipo de Vehículo</label>
              <select
                name="tipoVehiculo"
                value={formData.tipoVehiculo || ''}
                onChange={handleChange}
                disabled={esSoloLectura}
              >
                <option value="">Seleccionar...</option>
                <option value="Sedán">Sedán</option>
                <option value="SUV">SUV</option>
                <option value="Camioneta">Camioneta</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Pick-up">Pick-up</option>
              </select>
            </div>
            <div className="form-group">
              <label>Marca</label>
              <input
                type="text"
                name="marcaVehiculo"
                value={formData.marcaVehiculo || ''}
                onChange={handleChange}
                disabled={esSoloLectura}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Modelo</label>
              <input
                type="text"
                name="modeloVehiculo"
                value={formData.modeloVehiculo || ''}
                onChange={handleChange}
                disabled={esSoloLectura}
              />
            </div>
            <div className="form-group">
              <label>Año</label>
              <input
                type="number"
                name="anioVehiculo"
                value={formData.anioVehiculo || ''}
                onChange={handleChange}
                disabled={esSoloLectura}
                min="1990"
                max="2030"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Placa</label>
              <input
                type="text"
                name="placa"
                value={formData.placa || ''}
                onChange={handleChange}
                disabled={esSoloLectura}
                style={{ textTransform: 'uppercase' }}
              />
            </div>
            <div className="form-group">
              <label>Kilometraje</label>
              <input
                type="number"
                name="kilometraje"
                value={formData.kilometraje || ''}
                onChange={handleChange}
                disabled={esSoloLectura}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Nivel de Combustible</label>
            <select
              name="combustible"
              value={formData.combustible || ''}
              onChange={handleChange}
              disabled={esSoloLectura}
            >
              <option value="">Seleccionar...</option>
              <option value="Vacío">Vacío</option>
              <option value="1/4">1/4</option>
              <option value="1/2">1/2</option>
              <option value="3/4">3/4</option>
              <option value="Lleno">Lleno</option>
            </select>
          </div>

          <div className="form-group">
            <label>Observaciones</label>
            <textarea
              name="observaciones"
              value={formData.observaciones || ''}
              onChange={handleChange}
              disabled={esSoloLectura}
              rows="3"
            />
          </div>

          {/* Botones */}
          <div className="modal-actions">
            <button type="button" className="btn-cancelar" onClick={onClose}>
              {esSoloLectura ? 'Cerrar' : 'Cancelar'}
            </button>
            {!esSoloLectura && (
              <button type="submit" className="btn-guardar">
                💾 Guardar Cambios
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}