export default function EmailCliente({ formData, handleChange }) {
  return (
    <div className="form-group">
      <label htmlFor="emailCliente">
        Email del Cliente
        <span className="optional-badge">(Opcional)</span>
      </label>
      <input
        type="email"
        id="emailCliente"
        name="emailCliente"
        value={formData.emailCliente}
        onChange={handleChange}
        placeholder="ejemplo@correo.com"
      />
    </div>
  );
}