export default function AnioVehiculo({ formData, handleChange }) {
  return (
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
  );
}