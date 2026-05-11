import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from '../index';
import './demo.css';

const App = () => {
  const [buttonClickCount, setButtonClickCount] = useState(0);

  const handleButtonClick = () => {
    setButtonClickCount(prev => prev + 1);
  };

  return (
    <div className="demo">
      <header className="demo-header">
        <h1 className="demo-title">Navium UI Lib Demo</h1>
        <p className="demo-subtitle">
          Componentes React para plataforma Navium
        </p>
      </header>

      <main className="demo-content">
        {/* Button Section - Variants */}
        <section className="demo-section">
          <h2 className="section-title">Variantes de Botones</h2>
          <div className="component-showcase">
            <div className="showcase-group">
              <h3 className="showcase-subtitle">Colores</h3>
              <div className="button-group">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="error">Error</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Button Section - Sizes */}
        <section className="demo-section">
          <h2 className="section-title">Tamaños</h2>
          <div className="component-showcase">
            <div className="showcase-group">
              <h3 className="showcase-subtitle">Primary Variant</h3>
              <div className="button-group">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </div>
            <div className="showcase-group">
              <h3 className="showcase-subtitle">Secondary Variant</h3>
              <div className="button-group">
                <Button variant="secondary" size="sm">Small</Button>
                <Button variant="secondary" size="md">Medium</Button>
                <Button variant="secondary" size="lg">Large</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Button Section - States */}
        <section className="demo-section">
          <h2 className="section-title">Estados</h2>
          <div className="component-showcase">
            <div className="showcase-group">
              <h3 className="showcase-subtitle">Disabled</h3>
              <div className="button-group">
                <Button variant="primary" disabled>Primary Disabled</Button>
                <Button variant="secondary" disabled>Secondary Disabled</Button>
                <Button variant="success" disabled>Success Disabled</Button>
              </div>
            </div>
            <div className="showcase-group">
              <h3 className="showcase-subtitle">Interactive</h3>
              <div className="button-group">
                <Button variant="primary" onClick={handleButtonClick}>
                  Clicked {buttonClickCount} times
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Button Section - All Combinations */}
        <section className="demo-section">
          <h2 className="section-title">Todas las Combinaciones</h2>
          <div className="component-showcase">
            {['primary', 'secondary', 'success', 'warning', 'error', 'ghost'].map(variant => (
              <div key={variant} className="showcase-group">
                <h3 className="showcase-subtitle">{variant.charAt(0).toUpperCase() + variant.slice(1)}</h3>
                <div className="button-group">
                  <Button variant={variant} size="sm">Small</Button>
                  <Button variant={variant} size="md">Medium</Button>
                  <Button variant={variant} size="lg">Large</Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="demo-footer">
        <p>Navium UI Lib - Demo Interactiva</p>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
