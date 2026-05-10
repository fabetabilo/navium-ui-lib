Librería de componentes React con estilos reutilizables para Navium.
Para instalar librería:

```bash
npm install navium-ui-lib
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

### Entorno de  Desarrollo

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
