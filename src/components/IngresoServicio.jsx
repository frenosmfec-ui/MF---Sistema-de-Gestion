import { useState } from 'react';
import Accordion from './Accordion';
import SubSection from './SubSection';

// Rutas actualizadas según tus nuevas subcarpetas
import Fecha, { getLocalISOString } from './ingreso-servicio-jsx/fecha';
import NombreCliente from './ingreso-servicio-jsx/datos-cliente/nombreCliente';
import TelefonoCliente from './ingreso-servicio-jsx/datos-cliente/telefonoCliente';
import EmailCliente from './ingreso-servicio-jsx/datos-cliente/emailCliente';
import TipoVehiculo from './ingreso-servicio-jsx/datos-vehiculo/tipoVehiculo';
import MarcaVehiculo from './ingreso-servicio-jsx/datos-vehiculo/marcaVehiculo';
import ModeloVehiculo from './ingreso-servicio-jsx/datos-vehiculo/modeloVehiculo';
import AnioVehiculo from './ingreso-servicio-jsx/datos-vehiculo/anioVehiculo';
import Placa from './ingreso-servicio-jsx/datos-vehiculo/placa';
import Kilometraje from './ingreso-servicio-jsx/datos-vehiculo/kilometraje';
import Combustible from './ingreso-servicio-jsx/datos-vehiculo/combustible';
import Observaciones from './ingreso-servicio-jsx/datos-vehiculo/observaciones';

import './IngresoServicio.css';

export default function IngresoServicio() {
  const [formData, setFormData] = useState({
    fechaHora: getLocalISOString(),
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    alert('Formulario enviado con éxito (ver consola)');
  };

  return (
    <Accordion 
      title={<>1. Ingreso de <span className="highlight">Servicio</span></>} 
      defaultOpen={false}
    >
      <form onSubmit={handleSubmit} className="form-ingreso">
        
        {/* Fecha */}
        <Fecha formData={formData} handleChange={handleChange} />

        {/* Cliente */}
        <SubSection title={<>Datos del <span className="highlight">Cliente</span></>} defaultOpen={false} icon="👤">
          <div className="form-grid-cliente">
            <NombreCliente formData={formData} handleChange={handleChange} />
            <TelefonoCliente formData={formData} handleChange={handleChange} />
            <EmailCliente formData={formData} handleChange={handleChange} />
          </div>
        </SubSection>

        {/* Vehículo */}
        <SubSection title={<>Datos del <span className="highlight">Vehículo</span></>} defaultOpen={false} icon="🚗">
          <div className="form-grid-vehiculo">
            <TipoVehiculo formData={formData} handleChange={handleChange} />
            <MarcaVehiculo formData={formData} handleChange={handleChange} />
            <ModeloVehiculo formData={formData} handleChange={handleChange} />
            <AnioVehiculo formData={formData} handleChange={handleChange} />
            <Placa formData={formData} handleChange={handleChange} />
            <Kilometraje formData={formData} handleChange={handleChange} />
            <Combustible formData={formData} handleChange={handleChange} />
            <Observaciones formData={formData} handleChange={handleChange} />
          </div>
        </SubSection>

        <button type="submit" className="btn-primary">
          💾 Guardar Registro
        </button>
      </form>
    </Accordion>
  );
}