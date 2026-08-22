export default function MarcaVehiculo({ formData, handleChange }) {
  return (
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
  );
}