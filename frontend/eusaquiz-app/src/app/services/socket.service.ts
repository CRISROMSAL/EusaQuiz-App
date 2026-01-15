import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SocketService {
  private socket!: Socket;

  connect(baseUrl: string): void {
    if (this.socket && this.socket.connected) return;

    this.socket = io(baseUrl, {
      transports: ['websocket', 'polling'],
      withCredentials: false
    });
  }

  disconnect(): void {
    if (this.socket) this.socket.disconnect();
  }

  joinRoom(payload: { pin: string; idPartida?: string; idAlumno?: string }): void {
    this.socket.emit('join_room', payload);
  }

  onUsuarioDesconectado(): Observable<{ modo: 'juego' | 'lobby'; idAlumno: string; totalParticipantes: number }> {
    return new Observable((subscriber) => {
      this.socket.on('usuario_desconectado', (data) => subscriber.next(data));
      return () => this.socket.off('usuario_desconectado');
    });
  }
}
