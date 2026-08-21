import { useState } from 'react';
import Accordion from './Accordion';
import './IngresoServicio.css';

export default function IngresoServicio() {
  // Estado para almacenar todos los datos del formulario
  const [formData, setFormData] = useState({
    fechaHora: new Date().toISOString().slice(0, 16),
    nombreCliente: '',
    telefonoCliente: '',
    emailCliente: '',
    tipoVehiculo: '',
    marcaVehiculo: '',
    modeloVehiculo: '',
    anioVehiculo: '',
    placa: '',
    kilometraje: '',
    combustible: '',
    observaciones: ''
  });

  // Función para actualizar campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Función para manejar el envío
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    // Aquí irá la lógica para guardar en Firebase
    alert('Formulario enviado (ver consola)');
  };

  return (
    <Accordion title="1. Ingreso de Servicio" defaultOpen={true} icon="">
      <form onSubmit={handleSubmit} className="form-ingreso">
        {/* Campo Fecha y Hora */}
        <div className="form-group">
          <label htmlFor="fechaHora">
            <span className="field-icon">📅</span>
            Fecha y Hora de Ingreso *
          </label>
          <input
            type="datetime-local"
            id="fechaHora"
            name="fechaHora"
            value={formData.fechaHora}
            onChange={handleChange}
            required
          />
        </div>

        {/* Datos del Cliente - Sub Acordeón */}
        <Accordion title="👤 Datos del Cliente" defaultOpen={false}>
          <div className="form-grid-cliente">
            <div className="form-group">
              <label htmlFor="nombreCliente">
                <span className="field-icon"></span>
                Nombre del Cliente *
              </label>
              <input
                type="text"
                id="nombreCliente"
                name="nombreCliente"
                value={formData.nombreCliente}
                onChange={handleChange}
                placeholder="Ej: Juan Pérez"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefonoCliente">
                <span className="field-icon">📱</span>
                Teléfono del Cliente *
              </label>
              <input
                type="tel"
                id="telefonoCliente"
                name="telefonoCliente"
                value={formData.telefonoCliente}
                onChange={handleChange}
                placeholder="Ej: 0998123456"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="emailCliente">
                <span className="field-icon">✉️</span>
                Email del Cliente
                <span className="optional-badge">(Opcional)</span>
              </label>
              <input
                type="email"
                id="emailCliente"
                name="emailCliente"
                value={formData.emailCliente}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
              />
            </div>
          </div>
        </Accordion>

        {/* Datos del Vehículo - Sub Acordeón */}
        <Accordion title=" Datos del Vehículo" defaultOpen={false}>
          <div className="form-grid-vehiculo">
            <div className="form-group">
              <label htmlFor="tipoVehiculo">
                <span className="field-icon">🚙</span>
                Tipo de Vehículo *
              </label>
              <select
                id="tipoVehiculo"
                name="tipoVehiculo"
                value={formData.tipoVehiculo}
                onChange={handleChange}
                required
              >
                <option value="">Seleccionar...</option>
                <option value="Sedán">Sedán</option>
                <option value="SUV">SUV</option>
                <option value="Camioneta">Camioneta</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Coupé">Coupé</option>
                <option value="Pick-up">Pick-up</option>
                <option value="Van">Van</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="marcaVehiculo">
                <span className="field-icon">🏭</span>
                Marca del Vehículo *
              </label>
              <input
                type="text"
                id="marcaVehiculo"
                name="marcaVehiculo"
                value={formData.marcaVehiculo}
                onChange={handleChange}
                placeholder="Ej: Toyota, Chevrolet"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="modeloVehiculo">
                <span className="field-icon">🚘</span>
                Modelo del Vehículo *
              </label>
              <input
                type="text"
                id="modeloVehiculo"
                name="modeloVehiculo"
                value={formData.modeloVehiculo}
                onChange={handleChange}
                placeholder="Ej: Corolla, Spark"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="anioVehiculo">
                <span className="field-icon">📆</span>
                Año del Vehículo *
              </label>
              <input
                type="number"
                id="anioVehiculo"
                name="anioVehiculo"
                value={formData.anioVehiculo}
                onChange={handleChange}
                placeholder="Ej: 2020"
                min="1990"
                max="2030"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="placa">
                <span className="field-icon">🔢</span>
                Placa / Patente *
              </label>
              <input
                type="text"
                id="placa"
                name="placa"
                value={formData.placa}
                onChange={handleChange}
                placeholder="Ej: ABC-1234"
                style={{ textTransform: 'uppercase' }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="kilometraje">
                <span className="field-icon">️</span>
                Kilometraje Actual *
              </label>
              <input
                type="number"
                id="kilometraje"
                name="kilometraje"
                value={formData.kilometraje}
                onChange={handleChange}
                placeholder="Ej: 45000"
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="combustible">
                <span className="field-icon"></span>
                Nivel de Combustible *
              </label>
              <select
                id="combustible"
                name="combustible"
                value={formData.combustible}
                onChange={handleChange}
                required
              >
                <option value="">Seleccionar...</option>
                <option value="Vacío">Vacío</option>
                <option value="1/4">1/4</option>
                <option value="1/2">1/2</option>
                <option value="3/4">3/4</option>
                <option value="Lleno">Lleno</option>
              </select>
            </div>

            <div className="form-group form-full">
              <label htmlFor="observaciones">
                <span className="field-icon">📝</span>
                Observaciones Generales
              </label>
              <textarea
                id="observaciones"
                name="observaciones"
                value={formData.observaciones}
                onChange={handleChange}
                rows="3"
                placeholder="Rayones, golpes previos, estado general..."
              />
            </div>
          </div>
        </Accordion>

        {/* Botón de envío */}
        <button type="submit" className="btn-primary">
          💾 Guardar Registro
        </button>
      </form>
    </Accordion>
  );
}