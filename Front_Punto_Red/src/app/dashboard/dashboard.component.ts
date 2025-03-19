import { Component } from '@angular/core';
import { Location } from '@angular/common';  // Importar Location

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  activeView: string = 'dashboard'; // Vista activa inicial

  constructor(private location: Location) {}  // Inyectar Location

  // Cambiar la vista activa y actualizar la URL
  setActiveView(view: string) {
    this.activeView = view;
    this.location.replaceState(`/dashboard/${view}`);  // Cambia la URL sin navegar
  }
}
