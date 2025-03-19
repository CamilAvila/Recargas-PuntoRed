# RecargasPuntoRed

Este proyecto es una aplicación web desarrollada en Angular que permite gestionar recargas y transacciones para puntos de red.

## Requisitos Previos

- Node.js (versión compatible con Angular 16.2.0)
- npm (gestor de paquetes de Node.js)
- Angular CLI (~16.2.0)

## Instalación

1. Clona este repositorio
2. Instala las dependencias:
```bash
npm install
```

## Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm test` - Ejecuta las pruebas unitarias
- `npm run watch` - Construye la aplicación en modo observador

## Características Principales

- Gestión de recargas
- Panel de control (Dashboard)
- Sistema de autenticación
- Gestión de transacciones
- Integración con proveedores
- Interfaz de navegación intuitiva

## Tecnologías Utilizadas

- Angular 16.2.0
- RxJS
- TailwindCSS
- TypeScript
- Jasmine (para pruebas)
- Karma (para ejecución de pruebas)

## Estructura del Proyecto

El proyecto está organizado en los siguientes módulos principales:

- `/auth` - Componentes y servicios de autenticación
- `/buy-reloads` - Funcionalidad de recargas
- `/dashboard` - Panel de control principal
- `/nav` - Componentes de navegación
- `/servicio` - Servicios compartidos
- `/suppliers` - Gestión de proveedores
- `/transaction` - Gestión de transacciones

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200/`
