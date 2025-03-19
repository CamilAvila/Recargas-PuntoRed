# Sistema de Recargas PuntoRed

## Descripción
Este proyecto es un sistema de recargas desarrollado con Spring Boot que permite gestionar transacciones de recarga a través de la plataforma PuntoRed.

## Estructura del Proyecto
El proyecto está organizado en los siguientes paquetes principales:

- `config`: Contiene las configuraciones de la aplicación, incluyendo configuración CORS
- `controller`: Controladores REST para manejar las peticiones HTTP
- `models`: Entidades y modelos de datos
- `repositories`: Repositorios para la persistencia de datos
- `service`: Servicios que implementan la lógica de negocio

## Tecnologías Utilizadas
- Java
- Spring Boot
- Maven
- Spring Data JPA
- Spring Security (Autenticación)

## Requisitos
- Java 8 o superior
- Maven

## Instalación y Ejecución
1. Clonar el repositorio
2. Navegar al directorio del proyecto
3. Ejecutar el comando:
```bash
mvn spring-boot:run
```

## Endpoints Principales
El servicio expone endpoints para:
- Autenticación de usuarios
- Gestión de transacciones de recarga
- Consulta de estado de transacciones

## Configuración
La configuración de la aplicación se encuentra en el archivo `application.properties` donde se pueden ajustar parámetros como:
- Conexión a base de datos
- Configuración de seguridad
- Propiedades del servidor

## Pruebas
El proyecto incluye pruebas unitarias que se pueden ejecutar con:
```bash
mvn test
```

## Soporte
Para reportar problemas o solicitar nuevas características, por favor crear un issue en el repositorio.