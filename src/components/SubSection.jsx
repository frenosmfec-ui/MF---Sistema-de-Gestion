import { useState } from 'react';
import './SubSection.css';

export default function SubSection({ title, children, defaultOpen = false, icon = '' }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`sub-section ${isOpen ? 'active' : ''}`}>
      <div 
        className="sub-section-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sub-section-title">
          {icon && <span className="sub-icon">{icon}</span>}
          {title}
        </span>
        <span className="sub-toggle-icon">▼</span>
      </div>
      <div className="sub-section-content">
        {children}
      </div>
    </div>
  );
}