import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type EstadoAlumno = 'conectado' | 'conectando' | 'no_conectado';

@Component({
  selector: 'app-lobby-profesor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lobby-profesor.html',
  styleUrls: ['./lobby-profesor.css'],
})
export class LobbyProfesor {
  pin = '4K2X9';
  tiempoTotal = '10:46';

  totalAlumnos = 25;
  conectados = 23;

  get porcentajeConectado(): number {
    if (!this.totalAlumnos) return 0;
    return Math.round((this.conectados / this.totalAlumnos) * 100);
  }

  alumnos: Array<{ nombre: string; estado: EstadoAlumno }> = [
    { nombre: 'Marco Antonio Ochoa Fernández', estado: 'conectado' },
    { nombre: 'Cristina Román Salvatierra', estado: 'conectado' },
    { nombre: 'Antonio Manuel Fernández Jiménez', estado: 'conectando' },
    { nombre: 'Francisco Mejías González', estado: 'no_conectado' },
  ];

  copiarUrl(): void {
    const url = `${location.origin}/live/alumno/lobby?pin=${this.pin}`;
    navigator.clipboard.writeText(url);
  }

  iniciarPartida(): void {
    console.log('Iniciar partida (pendiente socket)');
  }

  cancelar(): void {
    console.log('Cancelar (pendiente navegación)');
  }
}
