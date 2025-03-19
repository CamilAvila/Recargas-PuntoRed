package com.puntored.recargas.service;

import com.puntored.recargas.models.Transaction;
import com.puntored.recargas.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.json.JSONObject;

import java.util.Date;
import java.util.List;

@Service
public class PuntoRedService {

    private String puntoRedEndpoint = "https://us-central1-puntored-dev.cloudfunctions.net/technicalTest-developer/api";
    private String apiKey = "mtrQF6Q11eosqyQnkMY0JGFbGqcxVg5icvfVnX1ifIyWDvwGApJ8WUM8nHVrdSkN";  // Tu apiKey

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private TransactionRepository transactionRepository;

    // Método para autenticar
    public String autenticar(String user, String password) {
        String url = puntoRedEndpoint + "/auth";

        // Crear los datos para la solicitud
        String jsonBody = String.format("{\"user\": \"%s\", \"password\": \"%s\"}", user, password);

        // Configurar los headers, incluyendo la API key
        HttpHeaders headers = new HttpHeaders();
        headers.set("x-api-key", apiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);

        // Crear la entidad con el cuerpo de la solicitud y los headers
        HttpEntity<String> entity = new HttpEntity<>(jsonBody, headers);

        try {
            // Hacer la solicitud POST a la API externa
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
            // Extraer y devolver el token de la respuesta
            String responseBody = response.getBody();
            if (responseBody != null && responseBody.contains("token")) {
                // Aquí obtienes el token de la respuesta JSON
                String token = responseBody.split(":")[1].replace("\"", "").replace("}", "").trim();

                // Crear un JSONObject para envolver el token y devolverlo como JSON
                JSONObject jsonResponse = new JSONObject();
                jsonResponse.put("token", token);  // Agregar el token al JSON

                return jsonResponse.toString();  // Devolver el token en formato JSON como String
            } else {
                return "{\"error\": \"No se obtuvo el token\"}";  // Devolver un error como JSON
            }
        } catch (Exception e) {
            return "{\"error\": \"Error al autenticar: " + e.getMessage() + "\"}";  // Devolver el error como JSON
        }
    }

    // Método para obtener los proveedores
    public String getSuppliers(String token) {
        String url = puntoRedEndpoint + "/getSuppliers";

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + token);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        try {
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
            return response.getBody();
        } catch (Exception e) {
            return "Error al obtener proveedores: " + e.getMessage();
        }
    }

    // Método para realizar la compra de recarga
    // Método para realizar la compra de recarga y guardar en la base de datos
    public String buy(String telefono, String valor, String proveedor, String token) {
        String url = puntoRedEndpoint + "/buy";

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + token);
        headers.setContentType(MediaType.APPLICATION_JSON);

        String transactionDetails = String.format("{\"cellPhone\": \"%s\", \"value\": \"%s\", \"supplierId\": \"%s\"}", telefono, valor, proveedor);

        HttpEntity<String> entity = new HttpEntity<>(transactionDetails, headers);

        try {
            // Hacer la solicitud POST a la API externa
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
            String responseBody = response.getBody();

            // Aquí puedes interpretar el estado de la respuesta, asumiendo que la respuesta contiene un campo "status"
            String status = responseBody.contains("error") ? "Fallido" : "Exitoso";  // Ejemplo de cómo determinar el estado de la transacción

            // Crear la entidad Transaction y guardarla en la base de datos
            Double valorDouble = Double.parseDouble(valor);  // Convertir el valor a tipo Double
            Transaction transaction = new Transaction(telefono, valorDouble, proveedor, status);
            transactionRepository.save(transaction);  // Guardar la transacción

            // Devolver la respuesta de la API o cualquier mensaje que desees
            return responseBody;  // Retornar el cuerpo de la respuesta (por ejemplo, mensaje de éxito o error)
        } catch (Exception e) {
            return "Error al realizar la compra: " + e.getMessage();
        }
    }

    // Método para obtener el historial de transacciones
    public List<Transaction> getTransactionHistory() {
        return transactionRepository.findAll();
    }
}
