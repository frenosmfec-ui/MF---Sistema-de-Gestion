import { useState } from 'react';
import Accordion from './Accordion';
import SubSection from './SubSection';
import './IngresoServicio.css';

// Función para obtener la fecha y hora local real sin desfases de UTC
const getLocalISOString = () => {
  const now = new Date();
  const tzOffset = now.getTimezoneOffset() * 60000; // Desplazamiento en milisegundos
  const localDate = new Date(now.getTime() - tzOffset);
  return localDate.toISOString().slice(0, 16); // Formato: "YYYY-MM-DDTHH:mm"
};

export default function IngresoServicio() {
  const [formData, setFormData] = useState({
    fechaHora: getLocalISOString(), // Usamos la función corregida aquí
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    alert('Formulario enviado (ver consola)');
  };

  return (
    <Accordion 
        title={
          <>
            1. Ingreso de <span className="highlight">Servicio</span>
          </>
        } 
        defaultOpen={false} 
        icon=""
      >
      <form onSubmit={handleSubmit} className="form-ingreso">
        {/* Campo Fecha y Hora - Siempre visible cuando el acordeón principal está abierto */}
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

        {/* Datos del Cliente - SubSección (empieza CERRADA) */}
        <SubSection title={<>Datos del <span className="highlight">Cliente</span></>} defaultOpen={false} icon="👤">
          <div className="form-grid-cliente">
            <div className="form-group">
              <label htmlFor="nombreCliente">Nombre del Cliente *</label>
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
              <label htmlFor="telefonoCliente">Teléfono del Cliente *</label>
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
        </SubSection>

        {/* Datos del Vehículo - SubSección (empieza CERRADA) */}
        <SubSection title={<>Datos del <span className="highlight">Vehículo</span></>} defaultOpen={false} icon="🚗">
          <div className="form-grid-vehiculo">
            <div className="form-group">
              <label htmlFor="tipoVehiculo">Tipo de Vehículo *</label>
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
              <label htmlFor="marcaVehiculo">Marca del Vehículo *</label>
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
              <label htmlFor="modeloVehiculo">Modelo del Vehículo *</label>
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
              <label htmlFor="anioVehiculo">Año del Vehículo *</label>
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
              <label htmlFor="placa">Placa / Patente *</label>
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
              <label htmlFor="kilometraje">Kilometraje Actual *</label>
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
              <label htmlFor="combustible">Nivel de Combustible *</label>
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
              <label htmlFor="observaciones">Observaciones Generales</label>
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
        </SubSection>

        {/* Botón de envío */}
        <button type="submit" className="btn-primary">
          💾 Guardar Registro
        </button>
      </form>
    </Accordion>
  );
}