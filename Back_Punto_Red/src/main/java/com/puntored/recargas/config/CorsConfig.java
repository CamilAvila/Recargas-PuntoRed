package com.puntored.recargas.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Permitimos CORS para todas las rutas
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:4200", "http://tudominio.com")  // Puedes agregar los orígenes permitidos aquí
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Métodos HTTP permitidos
                .allowedHeaders("*")  // Cabeceras permitidas
                .allowCredentials(true);  // Si quieres permitir cookies o credenciales
    }
}
