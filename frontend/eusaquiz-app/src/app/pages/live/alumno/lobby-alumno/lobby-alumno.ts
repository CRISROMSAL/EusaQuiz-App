import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type LobbyStatus = 'waiting' | 'live';

@Component({
  selector: 'app-lobby-alumno',
  standalone: true,
  templateUrl: './lobby-alumno.html',
  styleUrls: ['./lobby-alumno.css'],
})
export class LobbyAlumno implements OnInit, OnDestroy {

  // 🔁 Pon aquí tus datos reales cuando los tengas (auth/service)
  studentName: string = 'ALUMNO';
  gameCode: string = ''; // ejemplo: '7259'

  status: LobbyStatus = 'waiting';

  copied: boolean = false;
  year: number = new Date().getFullYear();

  private tipIndex: number = 0;
  private tipTimer: any;
  private copiedTimer: any;

  tips: string[] = [
    'Consejo: respira, lee rápido y responde seguro.',
    'Si algo no carga, pulsa “Actualizar”.',
    'En cuanto el profesor inicie, entrarás automáticamente.',
    'Si te equivocas, no pasa nada: ve pregunta a pregunta.',
    'Truco: si dudas entre 2, descarta la más rara.'
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Rotación de tips
    this.tipTimer = setInterval(() => {
      this.tipIndex = (this.tipIndex + 1) % this.tips.length;
    }, 3500);
  }

  ngOnDestroy(): void {
    clearInterval(this.tipTimer);
    clearTimeout(this.copiedTimer);
  }

  get studentInitial(): string {
    const name = (this.studentName || '').trim();
    return name.length ? name.charAt(0).toUpperCase() : 'A';
  }

  get codeChars(): string[] {
    const code = (this.gameCode || '').toUpperCase().trim();
    if (!code.length) return ['—', '—', '—', '—'];
    return code.split('');
  }

  get tipText(): string {
    return this.tips[this.tipIndex];
  }

  async copyCode(): Promise<void> {
    try {
      if (!this.gameCode) return;

      await navigator.clipboard.writeText(this.gameCode);
      this.copied = true;

      clearTimeout(this.copiedTimer);
      this.copiedTimer = setTimeout(() => {
        this.copied = false;
      }, 1200);

    } catch (e) {
      // fallback si clipboard no funciona
      this.copied = false;
      alert('No se pudo copiar. Copia el código manualmente.');
    }
  }

  // ✅ ESTO es lo que te faltaba (el HTML llama a refresh())
  refresh(): void {
    window.location.reload();
  }

  // ✅ Botón salir
  goBack(): void {
    this.router.navigate(['/']);
  }
}
