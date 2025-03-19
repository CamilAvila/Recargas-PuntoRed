package com.puntored.recargas.models;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String telefono;  // Teléfono del usuario
    private Double valor;  // Monto de la recarga
    private String proveedor;  // ID del proveedor
    private Date transactionDate;  // Fecha de la transacción
    private String status;  // Estado de la transacción (ej: "Exitoso", "Fallido")

    public Transaction() {}

    public Transaction(String telefono, Double valor, String proveedor, String status) {
        this.telefono = telefono;
        this.valor = valor;
        this.proveedor = proveedor;
        this.transactionDate = new Date();  // Se asigna la fecha actual al realizar la transacción
        this.status = status;
    }

    // Getters y setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public String getProveedor() {
        return proveedor;
    }

    public void setProveedor(String proveedor) {
        this.proveedor = proveedor;
    }

    public Date getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(Date transactionDate) {
        this.transactionDate = transactionDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
