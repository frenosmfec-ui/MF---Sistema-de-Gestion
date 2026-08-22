export default function Combustible({ formData, handleChange }) {
  return (
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
  );
}