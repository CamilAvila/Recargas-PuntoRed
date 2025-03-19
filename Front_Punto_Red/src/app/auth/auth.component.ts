import { Component } from '@angular/core';
import { RecargasBackendService } from 'src/app/servicio/recargas-backend.service'; // Asegúrate de importar el servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  email: string = '';
  password: string = '';

  constructor(
    private recargasBackendService: RecargasBackendService,
    private router: Router
  ) {}

  // Método para manejar el login
  login(): void {
    this.recargasBackendService
      .authenticate(this.email, this.password)
      .subscribe(
        (response) => {
          // Suponiendo que la respuesta contiene el token
          const token = response.token;
          this.recargasBackendService.setTokenInStorage(token); // Guardamos el token en el almacenamiento local

          // Redirigir al usuario a la página principal u otra página después de la autenticación exitosa
          this.router.navigate(['/dashboard']); // Cambia a la ruta que necesites
        },
        (error) => {
          console.error('Error en el login:', error);
        }
      );
  }
}
