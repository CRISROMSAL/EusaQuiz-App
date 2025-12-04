import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api';

@Component({
  selector: 'app-dashboard-alumno',
  templateUrl: './dashboard-alumno.html',
  styleUrls: ['./dashboard-alumno.css']
})
export class DashboardAlumno implements OnInit {

  backendMsg: string = '';  // lo guardamos como texto

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.testConnection().subscribe({
      next: (data: any) => {
        // Lo convertimos a JSON bonito para verlo en pantalla
        this.backendMsg = JSON.stringify(data, null, 2);
        console.log('Respuesta del backend:', data);
      },
      error: (err: any) => {
        this.backendMsg = 'ERROR: ' + JSON.stringify(err);
        console.error('Error hablando con el backend:', err);
      }
    });
  }

}

