import { Component, OnInit } from '@angular/core';
import { RecargasBackendService } from './../servicio/recargas-backend.service';  // Importamos el servicio
import { Router } from '@angular/router';  // Para redirigir o hacer otras acciones después del envío

@Component({
  selector: 'app-buy-reloads',
  templateUrl: './buy-reloads.component.html',
  styleUrls: ['./buy-reloads.component.css']
})
export class BuyReloadsComponent implements OnInit {
  reloadData = {
    operador: '',
    telefono: '',
    valor: 0,
  };

  suppliers: any[] = [];  // Variable para almacenar los proveedores
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private recargasService: RecargasBackendService, private router: Router) {}

  ngOnInit(): void {
    // Llamamos al servicio para obtener los proveedores directamente
    this.recargasService.getSuppliers().subscribe(
      (data) => {
        this.suppliers = data;  // Asignamos los proveedores a la variable suppliers
      },
      (error) => {
        this.errorMessage = 'Error al cargar los proveedores.';
        console.error(error);
      }
    );
  }
  
  // BuyReloadsComponent
onSubmit() {
  if (!this.reloadData.telefono || !this.reloadData.valor || !this.reloadData.operador) {
    this.errorMessage = 'Por favor, complete todos los campos.';
    return;
  }

  // Llamar al servicio con un objeto que contiene los tres parámetros
  const transactionDetails = {
    telefono: this.reloadData.telefono,
    valor: String(this.reloadData.valor),  // Convertir valor a string
    proveedor: this.reloadData.operador
  };

  console.log(transactionDetails);

  this.recargasService.buy(transactionDetails).subscribe(
    response => {
      this.successMessage = 'Recarga realizada con éxito.';
      this.errorMessage = '';
    },
    error => {
      this.errorMessage = 'Hubo un error al procesar la recarga. Intenta nuevamente.';
      this.successMessage = '';
    }
  );
}


}
