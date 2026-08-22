export default function Placa({ formData, handleChange }) {
  return (
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
  );
}