// comentarios.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  comentarios: any[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getComentarios();
  }

  getComentarios() {
    this.authService.getComentarios().subscribe(
      (comentarios) => {
        this.comentarios = comentarios;
      },
      (error) => {
        console.error('Error obteniendo comentarios', error);
      }
    );
  }
}
