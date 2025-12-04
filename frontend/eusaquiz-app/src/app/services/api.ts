import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // URL base de tu backend
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Petición de prueba
  testConnection(): Observable<any> {
  return this.http.get(`${this.baseUrl}/ping`);
}
}