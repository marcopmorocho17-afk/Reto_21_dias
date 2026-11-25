# Reto 21 días

Aplicación móvil con React Native y Expo para registrar hábitos diarios durante un reto de 21 días.

## Funcionalidades

- Inicio/Hoy con progreso diario y navegación entre días.
- Hábitos predefinidos con marcado y desmarcado.
- Pantalla de progreso con resumen visual.
- Perfil y ajustes con modo claro/oscuro.
- Navegación con Stack, Drawer y Tabs.
- Datos locales tipados en TypeScript.

## Instalación

```bash
pnpm install
pnpm start
```

Para Android: `pnpm android`.

## Arquitectura

- `src/backend/habitos.ts`: datos, tipos y operaciones de hábitos.
- `src/frontend/contexts/AppContext.tsx`: estado React compartido y temas.
- `src/frontend/components`: componentes visuales reutilizables.
- `src/frontend/styles/tema.ts`: tema, estilos y opciones de navegación.
- `src/app`: rutas de Expo Router y layouts de Stack, Drawer y Tabs.
- `global.css` y `tailwind.config.js`: configuración de NativeWind.

## Generar APK

El perfil `preview` de `eas.json` configura un APK Android instalable:

```bash
npx eas-cli login
npx eas-cli build:configure
npx eas-cli build -p android --profile preview
```

Una vez finalizado, añadir el enlace público del APK o su código QR en esta sección.

## Evidencias

Añadir capturas de Inicio, Hábitos, Progreso y Ajustes, y registrar el enlace del screencast técnico de máximo cuatro minutos.
