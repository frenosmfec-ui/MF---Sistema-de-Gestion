export default function NombreCliente({ formData, handleChange }) {
  return (
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
  );
}