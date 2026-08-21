import { useState } from 'react';
import './Nav.css';

export default function Nav() {
  // Estado para saber qué pestaña está activa
  const [activeTab, setActiveTab] = useState('servicios');

  // Array de pestañas (fácil de escalar)
  const tabs = [
    { id: 'servicios', label: 'Servicios', icon: '🔧' },
    // Descomenta estas líneas cuando quieras agregar más pestañas:
    // { id: 'clientes', label: 'Clientes', icon: '👥' },
    // { id: 'inventario', label: 'Inventario', icon: '📦' },
    // { id: 'reportes', label: 'Reportes', icon: '📊' }
  ];

  return (
    <nav className="tab-nav">
      <div className="tab-nav-inner">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            data-tab={tab.id}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}