export default function Observaciones({ formData, handleChange }) {
  return (
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
  );
}