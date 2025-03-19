import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/config/environment'; // Importamos la configuración del entorno
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecargasBackendService {
  private apiUrl: string = environment.javaUrl; // Usamos la URL del backend desde el entorno

  constructor(private http: HttpClient) {}

  // Método para autenticarse y obtener el token
  authenticate(user: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/auth`; // Concatenamos la URL del backend

    const body = {
      user: user,
      password: password,
    };

    const headers = new HttpHeaders()
      .set(
        'x-api-key',
        'mtrQF6Q11eosqyQnkMY0JGFbGqcxVg5icvfVnX1ifIyWDvwGApJ8WUM8nHVr'
      )
      .set('Content-Type', 'application/json');

    return this.http.post(url, body, { headers });
  }

  // Método para obtener los proveedores (con token dinámico)
  getSuppliers(): Observable<any[]> {
    const token = this.getTokenFromStorage();
    const url = `${this.apiUrl}/proveedores`; // Concatenamos la URL del backend

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Usamos el token obtenido

    return this.http.get<any[]>(url, { headers });
  }

  // Método para realizar una compra de recarga (con token dinámico)
  buy(transactionDetails: {
    telefono: string;
    valor: string;
    proveedor: string;
  }): Observable<any> {
    const token = this.getTokenFromStorage();
    const url = `${this.apiUrl}/comprar`; // Concatenamos la URL del backend

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`) // Usamos el token obtenido
      .set('Content-Type', 'application/json'); // Aseguramos el tipo de contenido JSON

    const body = JSON.stringify(transactionDetails);

    return this.http.post(url, body, { headers });
  }

  // Método para obtener el historial de transacciones (con token dinámico)
  getTransactionHistory(): Observable<any[]> {
    const token = this.getTokenFromStorage();
    const url = `${this.apiUrl}/historial`; // Concatenamos la URL del backend para obtener el historial

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Usamos el token obtenido

    return this.http.get<any[]>(url, { headers });
  }

  // Método para obtener el token desde el almacenamiento local
  private getTokenFromStorage(): string {
    return localStorage.getItem('authToken') || ''; // Devuelve el token almacenado o vacío si no existe
  }

  // Método para guardar el token en el almacenamiento local
  setTokenInStorage(token: string): void {
    localStorage.setItem('authToken', token); // Guardamos el token en el localStorage
  }
}
