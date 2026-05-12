import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Button, Footer, FormGroup } from '../index';
import naviumLogo from './navium-v1.png';
import './demo.css';

const App = () => {
  const [buttonClickCount, setButtonClickCount] = useState(0);

  const handleButtonClick = () => {
    setButtonClickCount(prev => prev + 1);
  };

  return (
    <div className="demo">
      <header className="demo-header">
        <h1 className="title-demo">Navium UI Lib Demo</h1>
        <p className="demo-subtitle">
          Componentes React para plataforma Navium
        </p>
      </header>

      <main className="demo-content">
        {/* Color Palette Section */}
        <section className="demo-section">
          <h2 className="section-title">Paleta de Colores de la Plataforma</h2>
          <div className="component-showcase">
            <div className="showcase-group">
              <div className="color-palette">
                <div className="color-swatch">
                  <div className="color-box" style={{ backgroundColor: 'var(--color-surface)' }}></div>
                  <span className="color-label">Surface</span>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ backgroundColor: 'var(--color-bg)' }}></div>
                  <span className="color-label">Background</span>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                  <span className="color-label">Color Primary</span>
                </div>
                <div className="color-swatch">
                  <div className="color-box" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
                  <span className="color-label">Color Secondary</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="typography-section">
          <h2 className="typography-title">Tipografía</h2>
          <h3 className="title-demo-title">Títulos de Plataforma</h3>
          <h3 className="title-demo">Título de Acentuación - Bebas Neue - Navium</h3>
          <p className="paragraph-demo">
            Este es un párrafo de prueba utilizando la fuente Lato. La tipografía es fundamental para el diseño de interfaces de usuario, ya que establece la jerarquía visual y mejora la legibilidad del contenido.
          </p>
        </section>

        {/* Button Section - Variants */}
        <section className="demo-section">
          <h2 className="section-title">Variantes de Botones</h2>
          <div className="component-showcase">
            <div className="showcase-group">
              <h3 className="showcase-subtitle">Colores</h3>
              <div className="button-group">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="error">Error</Button>
                <Button variant="info">Info</Button>
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
            {['primary', 'secondary', 'success', 'warning', 'error', 'info', 'ghost'].map(variant => (
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

        {/* FormGroup Section */}
        <section className="demo-section">
          <h2 className="section-title">Inputs</h2>
          <div className="component-showcase">
            <div className="input-grid">
              <FormGroup
                label="Correo"
                id="email"
                required
                helperText="Ingresa tu correo electrónico"
              >
                <input type="email" placeholder="nombre@navium.com" />
              </FormGroup>

              <FormGroup
                label="Usuario"
                id="user"
                helperText="Estado focus (Contorno color primario)"
              >
                <input type="text" placeholder="navium.user" />
              </FormGroup>

              <FormGroup
                label="Contraseña"
                id="password"
                required
                error
                helperText="La contraseña es incorrecta, Intentalo de nuevo."
              >
                <input type="password" placeholder="••••••••" />
              </FormGroup>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="demo-section">
          <h2 className="section-title">Footer Component</h2>
          <p className="showcase-subtitle">El Footer ocupa todo el ancho de la pantalla (fuera del contenedor blanco)</p>
          <p className="showcase-subtitle">Haz clic en los botones para cambiar entre las 3 vistas:</p>
          <div className="button-group">
            <Button variant="primary" onClick={() => window.location.hash = 'comando'}>Centro de Mando</Button>
            <Button variant="secondary" onClick={() => window.location.hash = 'operario'}>Operario de Patio</Button>
            <Button variant="primary" onClick={() => window.location.hash = 'sucursal'}>Sucursal</Button>
          </div>
        </section>
      </main>

      {/* Footer examples outside main to show full width */}
      {window.location.hash === '#operario' ? (
        <Footer 
          logo={naviumLogo}
          moduleLinks={[
            { label: 'Mi Turno', href: '#shift' },
            { label: 'Tareas Pendientes', href: '#tasks' },
            { label: 'Reportar Incidente', href: '#incident' },
          ]}
        />
      ) : window.location.hash === '#sucursal' ? (
        <Footer 
          logo={naviumLogo}
          moduleLinks={[
            { label: 'Agendar Bloque', href: '#schedule' },
            { label: 'Mis Reservas', href: '#reservations' },
            { label: 'Historial de Agendamientos', href: '#history' },
          ]}
        />
      ) : (
        <Footer 
          logo={naviumLogo}
          moduleLinks={[
            { label: 'Dashboard', href: '#dashboard' },
            { label: 'Reportes', href: '#reports' },
            { label: 'Configuración', href: '#settings' },
          ]}
        />
      )}

      <footer className="demo-footer">
        <p>Navium UI Lib - Demo Interactiva</p>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
