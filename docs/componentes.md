### Componentes

#### Button

Botón con múltiples variantes, tamaños y estados. Diseñado para ser consistente en toda la plataforma Navium.

**Instalación e importación:**

```jsx
import { Button } from 'navium-ui-lib';
```

**Variantes de color:**

```jsx
// Primary - Color principal de la plataforma (amarillo)
<Button variant="primary">Primario</Button>

// Secondary - Gris con borde
<Button variant="secondary">Secundario</Button>

// Tertiary - Gris
<Button variant="tertiary">Terciario</Button>

// Success - Verde para acciones exitosas
<Button variant="success">Éxito</Button>

// Warning - Amarillo para advertencias
<Button variant="warning">Advertencia</Button>

// Error - Rojo para errores
<Button variant="error">Error</Button>

// Info - Azul para información
<Button variant="info">Info</Button>

// Ghost - Transparente
<Button variant="ghost">Ghost</Button>
```

**Tamaños:**

```jsx
<Button size="sm">Pequeño</Button>
<Button size="md">Mediano (default)</Button>
<Button size="lg">Grande</Button>
```

**Estados:**

```jsx
// Deshabilitado
<Button disabled>Deshabilitado</Button>

// Con evento onClick
<Button onClick={() => alert('Click!')}>Click me</Button>

// Como submit en formularios
<Button type="submit">Enviar</Button>
```

**Ejemplo completo:**

```jsx
import { Button } from 'navium-ui-lib';

function MyComponent() {
  const handleClick = () => {
    console.log('Botón clickeado');
  };

  return (
    <div>
      <Button variant="primary" size="lg" onClick={handleClick}>
        Guardar Cambios
      </Button>
      <Button variant="secondary" size="md">
        Cancelar
      </Button>
    </div>
  );
}
```

**Props:**

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'ghost'` | `'primary'` | Variante visual del botón |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño del botón |
| `disabled` | `boolean` | `false` | Si el botón está deshabilitado |
| `onClick` | `function` | - | Función al hacer clic |
| `type` | `string` | `'button'` | Tipo del botón (`button`, `submit`, `reset`) |
| `className` | `string` | `''` | Clases CSS adicionales |

---

#### Footer

Componente Footer compartido para las 3 vistas de la plataforma: Centro de Mando, Operario de Patio y Sucursal. Permite enlaces específicos del módulo y muestra información común de la empresa.

**Instalación e importación:**

```jsx
import { Footer } from 'navium-ui-lib';
import logo from './assets/logo.png';
```

**Uso básico (sin logo):**

```jsx
<Footer 
  moduleLinks={[
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Configuración', href: '/settings' },
  ]}
/>
```

**Uso con logo:**

```jsx
<Footer 
  logo={logo}
  moduleLinks={[
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Reportes', href: '/reports' },
    { label: 'Configuración', href: '/settings' },
  ]}
/>
```

**Ejemplo por vista:**

```jsx
// Centro de Mando
<Footer 
  logo={logo}
  moduleLinks={[
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Reportes', href: '/reports' },
    { label: 'Configuración', href: '/settings' },
  ]}
/>

// Operario de Patio
<Footer 
  logo={logo}
  moduleLinks={[
    { label: 'Mi Turno', href: '/shift' },
    { label: 'Tareas Pendientes', href: '/tasks' },
    { label: 'Reportar Incidente', href: '/incident' },
  ]}
/>

// Sucursal
<Footer 
  logo={logo}
  moduleLinks={[
    { label: 'Agendar Bloque', href: '/schedule' },
    { label: 'Mis Reservas', href: '/reservations' },
    { label: 'Historial de Agendamientos', href: '/history' },
  ]}
/>
```

**Sin enlaces del módulo:**

```jsx
<Footer logo={logo} />
```

**Ocultar enlaces legales:**

```jsx
<Footer 
  logo={logo}
  showLegalLinks={false}
  moduleLinks={[...]}
/>
```

**Personalizar año de copyright:**

```jsx
<Footer 
  logo={logo}
  copyrightYear={2026}
  moduleLinks={[...]}
/>
```

**Props:**

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `logo` | `string` (URL) \| `null` | `null` | URL del logo de la empresa. Si es `null`, solo muestra el tagline |
| `moduleLinks` | `Array<{label: string, href: string}>` | `[]` | Enlaces específicos del módulo actual |
| `showLegalLinks` | `boolean` | `true` | Mostrar enlaces legales (Términos, Privacidad, Cookies) |
| `copyrightYear` | `number` | Año actual | Año del copyright |
| `className` | `string` | `''` | Clases CSS adicionales |

**Notas importantes:**

- El Footer ocupa todo el ancho de la pantalla (full width)
- El contenido interno tiene un máximo de 1400px con márgenes laterales
- El logo debe ser proporcionado por cada proyecto que consume la librería
- Los enlaces legales son comunes a todas las vistas
- La información de contacto es estándar para toda la plataforma