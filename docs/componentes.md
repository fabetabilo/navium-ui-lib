### Componentes

#### Button

Botón con múltiples variantes, tamaños y estados.

```jsx
import { Button } from 'navium-ui-lib';

// variantes de color
<Button variant="primary">Primario</Button>
<Button variant="secondary">Secundario</Button>
<Button variant="success">Éxito</Button>
<Button variant="warning">Advertencia</Button>
<Button variant="error">Error</Button>
<Button variant="ghost">Ghost</Button>

// tamanos
<Button size="sm">Pequeño</Button>
<Button size="md">Mediano</Button>
<Button size="lg">Grande</Button>

// estados
<Button disabled>Deshabilitado</Button>
```

#### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'ghost'` | `'primary'` | Variante visual del botón |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño del botón |
| `disabled` | `boolean` | `false` | Si el botón está deshabilitado |
| `onClick` | `function` | - | Función al hacer clic |
| `type` | `string` | `'button'` | Tipo del botón |
| `className` | `string` | `''` | Clases CSS adicionales |