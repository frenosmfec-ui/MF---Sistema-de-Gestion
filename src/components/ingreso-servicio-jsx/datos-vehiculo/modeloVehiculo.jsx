export default function ModeloVehiculo({ formData, handleChange }) {
  return (
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
  );
}