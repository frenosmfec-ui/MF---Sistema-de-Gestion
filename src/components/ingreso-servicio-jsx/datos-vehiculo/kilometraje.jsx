export default function Kilometraje({ formData, handleChange }) {
  return (
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
  );
}