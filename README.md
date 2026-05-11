![Diagram](docs/navium-banner.png)

Librería de componentes UI React con estilos reutilizables para Navium.

### Para instalar librería en tu proyecto:

```bash
npm install navium-ui-lib
```

```
# o
yarn add navium-ui-lib
```

### Cómo usar un componente

Para más información sobre los componentes, revisar [componentes.md](docs/componentes.md) c:

```jsx
import React from 'react';
import { Button } from 'navium-ui-lib';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  );
}
```

La librería utiliza variables CSS que se pueden sobreescribir:

```css
:root {
  --color-primary: #tu-color;
  --color-secondary: #tu-color;
  --color-success: #tu-color;
  --color-warning: #tu-color;
  --color-error: #tu-color;
  --font-family-sans: 'Tu Font', sans-serif;
  --border-radius-lg: 12px;
}
```

### Uso de Tipografía

La librería incluye variables CSS para tipografía que puedes usar en tu proyecto:

```css
:root {
  /* Fuente para títulos principales */
  --font-family-title: 'Inter', sans-serif;
  
  /* Fuente para acentuación (títulos destacados) */
  --font-family-accent: 'Bebas Neue', sans-serif;
  
  /* Fuente para texto general y párrafos */
  --font-family-sans: 'Lato', sans-serif;
}
```

Cómo usar en el proyecto mediante CSS:

```css
.my-title {
  font-family: var(--font-family-title);
}

.my-accent {
  font-family: var(--font-family-accent);
}

.my-text {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-base);
}
```

### Tamaños Estándar de Elementos HTML

La librería define tamaños estandarizados para elementos HTML:

```css
h1 { font-size: var(--font-size-h1); }  /* 2.85rem */
h2 { font-size: var(--font-size-h2); }  /* 2.25rem */
h3 { font-size: var(--font-size-h3); }  /* 1.5rem */
p  { font-size: var(--font-size-p); }  /* 1rem */
```

Sobrescribe estos valores en tu proyecto si necesitas ajustarlos.


### Entorno de  Desarrollo de UI Lib

Prerrequisitos

- Node.js 18+
- React 18+ o 19+

Instalación Local

1. Clonar el repositorio
```bash
git clone <repository-url>
cd navium-ui-lib
```
Instalar dependencias
```
npm install
```

### Notas

```bash
# Desarrollo con watch
npm run dev

# Build para producción
npm run build

# Ejecutar tests
npm test

# Tests con watch
npm run test:watch

# Coverage de tests
npm run test:coverage

# Iniciar demo local
npm run demo
```

Esta es la estructura del Proyecto navium-ui-lib

```
navium-ui-lib/
├── src/
│   ├── components/          # Componentes UI
│   │   └── Button/
│   ├── styles/              # Estilos globales
│   ├── demo/                # Demo interactivo
│   └── index.js             # Export principal
├── tests/                   # Tests unitarios
├── dist/                    # Build de producción
├── rollup.config.js         # Configuración de Rollup
└── package.json
```

Para más información acerca de cómo actualizar libreria, revisar wiki del proyecto.
