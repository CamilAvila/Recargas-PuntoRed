package com.puntored.recargas.controller;

import com.puntored.recargas.models.AuthenticationRequest;
import com.puntored.recargas.models.Transaction;
import com.puntored.recargas.service.PuntoRedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recargas")
public class RecargaController {

    @Autowired
    private PuntoRedService puntoRedService;

    // Endpoint para autenticación
    @PostMapping("/auth")
    public String autenticarUsuario(@RequestBody AuthenticationRequest authRequest) {
        // Usamos el servicio para obtener el token de la API externa
        return puntoRedService.autenticar(authRequest.getUser(), authRequest.getPassword());
    }

    // Endpoint para obtener los proveedores de recarga (GET /proveedores)
    @GetMapping("/proveedores")
    public String obtenerProveedores(@RequestHeader("Authorization") String token) {
        return puntoRedService.getSuppliers(token.replace("Bearer ", ""));
    }

    // Endpoint para realizar una compra de recarga (POST /comprar)
    @PostMapping("/comprar")
    public String realizarCompra(@RequestBody Transaction transaction, @RequestHeader("Authorization") String token) {
        return puntoRedService.buy(transaction.getTelefono(), transaction.getValor().toString(), transaction.getProveedor(), token.replace("Bearer ", ""));
    }

    // Endpoint para obtener el historial de transacciones (GET)
    @GetMapping("/historial")
    public List<Transaction> obtenerHistorial() {
        return puntoRedService.getTransactionHistory();  // Consultamos todas las transacciones
    }
}
