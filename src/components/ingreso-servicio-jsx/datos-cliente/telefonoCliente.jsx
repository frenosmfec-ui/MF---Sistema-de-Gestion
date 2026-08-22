export default function TelefonoCliente({ formData, handleChange }) {
  return (
    <div className="form-group">
      <label htmlFor="telefonoCliente">Teléfono del Cliente *</label>
      <input
        type="tel"
        id="telefonoCliente"
        name="telefonoCliente"
        value={formData.telefonoCliente}
        onChange={handleChange}
        placeholder="Ej: 0998123456"
        pattern="[0-9]{10}"
        required
      />
    </div>
  );
}