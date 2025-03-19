import { Component, OnInit } from '@angular/core';
import { RecargasBackendService } from './../servicio/recargas-backend.service'; // Importa el servicio para obtener las transacciones

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions: any[] = []; // Propiedad para almacenar el historial de transacciones

  constructor(private recargasService: RecargasBackendService) {}

  ngOnInit(): void {
    this.getTransactionHistory(); // Llamamos al servicio para obtener el historial de transacciones
  }

  // Método para obtener el historial de transacciones
  getTransactionHistory(): void {
    this.recargasService.getTransactionHistory().subscribe(
      (data) => {
        this.transactions = data; // Asignamos las transacciones recibidas al array 'transactions'
      },
      (error) => {
        console.error('Error al obtener el historial de transacciones', error);
      }
    );
  }
}
