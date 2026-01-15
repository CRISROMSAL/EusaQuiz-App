import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api';


@Component({
  selector: 'app-dashboard-alumno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-alumno.html',
  styleUrls: ['./dashboard-alumno.css']
})
export class DashboardAlumno implements OnInit {

  backendMsg: string = '';

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.testConnection().subscribe({
      next: (data: any) => {
        this.backendMsg = JSON.stringify(data, null, 2);
        console.log('Respuesta del backend:', data);
        console.log('Mensaje:', data?.message);
        console.log('Hora:', data?.time);
      },

      error: (err: any) => {
        this.backendMsg = 'ERROR: ' + JSON.stringify(err);
        console.error('Error hablando con el backend:', err);
      }
    });
  }
}
