import React from 'react';
import './Footer.css';

const Footer = ({ 
  logo = null,
  moduleLinks = [],
  showLegalLinks = true,
  copyrightYear = new Date().getFullYear(),
  className = '',
  ...props 
}) => {
  // Enlaces legales comunes
  const legalLinks = [
    { label: 'Términos y Condiciones', href: '#terms' },
    { label: 'Política de Privacidad', href: '#privacy' },
    { label: 'Política de Cookies', href: '#cookies' },
  ];

  return (
    <footer className={`footer ${className}`} {...props}>
      <div className="footer__container">
        {/* Logo y información de la empresa */}
        {logo && (
          <div className="footer__brand">
            <img 
              src={logo} 
              alt="Logo" 
              className="footer__logo"
            />
            <p className="footer__tagline">
              Plataforma integral de gestión portuaria
            </p>
          </div>
        )}
        {!logo && (
          <div className="footer__brand">
            <p className="footer__tagline">
              Plataforma integral de gestión portuaria
            </p>
          </div>
        )}

        {/* Enlaces específicos del módulo */}
        {moduleLinks.length > 0 && (
          <div className="footer__section">
            <h4 className="footer__section-title">Enlaces del Módulo</h4>
            <ul className="footer__links">
              {moduleLinks.map((link, index) => (
                <li key={index} className="footer__links-item">
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Enlaces legales */}
        {showLegalLinks && (
          <div className="footer__section">
            <h4 className="footer__section-title">Legal</h4>
            <ul className="footer__links">
              {legalLinks.map((link, index) => (
                <li key={index} className="footer__links-item">
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Información de contacto */}
        <div className="footer__section">
          <h4 className="footer__section-title">Contacto</h4>
          <ul className="footer__contact">
            <li className="footer__contact-item">
              <span className="footer__contact-label">Email:</span>
              <a href="mailto:soporte@navium.com" className="footer__contact-link">
                soporte@navium.com
              </a>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-label">Tel:</span>
              <a href="tel:+56123456789" className="footer__contact-link">
                +56 123 456 789
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra inferior con copyright */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © {copyrightYear} Navium. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
