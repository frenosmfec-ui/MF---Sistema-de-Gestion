export const getLocalISOString = () => {
  const now = new Date();
  const tzOffset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - tzOffset).toISOString().slice(0, 16);
};

export default function Fecha({ formData, handleChange }) {
  return (
    <div className="form-group">
      <label htmlFor="fechaHora">
        <span className="field-icon">📅</span>
        Fecha y Hora de Ingreso *
      </label>
      <input
        type="datetime-local"
        id="fechaHora"
        name="fechaHora"
        value={formData.fechaHora}
        onChange={handleChange}
        required
      />
    </div>
  );
}