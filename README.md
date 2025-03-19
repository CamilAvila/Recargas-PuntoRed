# Recargas-PuntoRed - Guía de Configuración

## **Introducción**
Recargas-PuntoRed es un sistema desarrollado con **Spring Boot** y **Angular** que permite gestionar transacciones de recarga a través de la plataforma PuntoRed. 

La aplicación cuenta con un backend robusto en Java que maneja la lógica de negocio y un frontend en Angular que ofrece una interfaz intuitiva para los usuarios.

---

## **1. Estructura del Proyecto**

### **Backend (Spring Boot)**
El proyecto está organizado en los siguientes paquetes principales:

- **config**: Configuraciones de la aplicación (incluyendo CORS).
- **controller**: Controladores REST para manejar las peticiones HTTP.
- **models**: Entidades y modelos de datos.
- **repositories**: Repositorios para la persistencia de datos.
- **service**: Servicios que implementan la lógica de negocio.

### **Frontend (Angular)**
El proyecto está estructurado en los siguientes módulos:

- `/auth` - Componentes y servicios de autenticación.
- `/buy-reloads` - Funcionalidad de recargas.
- `/dashboard` - Panel de control principal.
- `/nav` - Componentes de navegación.
- `/servicio` - Servicios compartidos.
- `/suppliers` - Gestión de proveedores.
- `/transaction` - Gestión de transacciones.

---

## **2. Tecnologías Utilizadas**

### **Backend**
- Java 8 o superior
- Spring Boot
- Maven
- Spring Data JPA
- Spring Security (para autenticación)

### **Frontend**
- Angular 16.2.0
- RxJS
- TailwindCSS
- TypeScript
- Jasmine y Karma (para pruebas)

---

## **3. Requisitos Previos**

### **Backend**
- Java 8 o superior
- Maven
- PostgreSQL

### **Frontend**
- Node.js (compatible con Angular 16.2.0)
- npm (gestor de paquetes de Node.js)
- Angular CLI (~16.2.0)

---

## **4. Instalación y Configuración**

### **Base de Datos**
1. Crear la base de datos `postgres` en PostgreSQL:
   ```sql
   CREATE DATABASE postgres;
   ```
2. No es necesario un script de creación de tablas, ya que Hibernate las genera automáticamente.
3. Configurar la conexión en `application.properties`:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
   spring.datasource.username=tu_usuario
   spring.datasource.password=tu_contraseña
   ```

### **Instalación de Dependencias**
Ejecutar los siguientes comandos en la terminal:

#### **Backend (Java - Spring Boot)**
```bash
mvn install
```

#### **Frontend (Angular)**
```bash
npm install
```

---

## **5. Ejecución de Servidores**

### **Backend (Java - Spring Boot)**
Ejecutar el servidor de Spring Boot en el puerto **8080**:
```bash
mvn spring-boot:run
```
Acceso: [http://localhost:8080](http://localhost:8080)

### **Frontend (Angular)**
Ejecutar el servidor de Angular en el puerto **4200**:
```bash
ng serve
```
Acceso: [http://localhost:4200](http://localhost:4200)

---

## **6. Endpoints Principales**
El servicio expone endpoints para:

- **Autenticación de usuarios**.
- **Gestión de transacciones de recarga**.
- **Consulta de estado de transacciones**.

---

## **9. Credenciales de Acceso**
user: user0147
password: #3Q345hONlDS

---

## **Conclusión**
Recargas-PuntoRed es un sistema eficiente para la gestión de recargas, combinando un backend robusto en **Spring Boot** con una interfaz amigable en **Angular**. La configuración es sencilla y escalable, permitiendo integraciones con distintos proveedores y personalización según las necesidades del negocio.

