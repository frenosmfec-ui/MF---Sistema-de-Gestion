export default function TipoVehiculo({ formData, handleChange }) {
  return (
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
  );
}