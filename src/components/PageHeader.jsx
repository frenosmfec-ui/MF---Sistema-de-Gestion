import './PageHeader.css';

export default function PageHeader({ title, subtitle, icon = '🔧' }) {
  return (
    <div className="page-header">
      <div className="page-header-content">
        <span className="page-header-icon">{icon}</span>
        <div>
          <h2>{title}</h2>
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </div>
      </div>
      <div className="page-header-badge">
        <span className="badge-dot"></span>
        Activo
      </div>
    </div>
  );
}