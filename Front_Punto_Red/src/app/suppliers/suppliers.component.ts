import { Component, OnInit } from '@angular/core';
import { RecargasBackendService } from './../servicio/recargas-backend.service'; // Ajusta la ruta según la ubicación de tu servicio
import { Observable } from 'rxjs';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  suppliers: any[] = []; // Almacenamos los proveedores en un arreglo

  constructor(private recargasBackendService: RecargasBackendService) {}

  ngOnInit(): void {
    // Llamamos al servicio para obtener los proveedores cuando el componente se inicializa
    this.recargasBackendService.getSuppliers().subscribe(
      (response: any) => {
        console.log('Proveedores:', response); // Verifica la estructura de los datos
        // Asegúrate de acceder a los datos correctamente según la estructura del backend
        // Si la respuesta está anidada, ajusta esta línea
        this.suppliers = response.data || response; // Asignamos los proveedores a la variable 'suppliers'
      },
      (error) => {
        console.error('Error al cargar los proveedores:', error); // Manejo de errores
      }
    );
  }
}
