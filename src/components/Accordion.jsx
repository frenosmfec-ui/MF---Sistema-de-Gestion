import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ title, children, defaultOpen = false, icon = '' }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`section-accordion ${isOpen ? 'active' : ''}`}>
      <div 
        className="section-accordion-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {icon && <span className="accordion-icon">{icon}</span>}
          {title}
        </span>
        <span className="toggle-icon">▼</span>
      </div>
      <div className="section-accordion-content">
        {children}
      </div>
    </div>
  );
}