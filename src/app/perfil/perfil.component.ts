import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  nombreUsuario: string | null = '';

  ngOnInit(): void {
    const usuarioDatos = JSON.parse(localStorage.getItem('usuarioDatos') || '{}');
    if (usuarioDatos && usuarioDatos.nombre) {
      this.nombreUsuario = usuarioDatos.nombre;
      // y otros campos que necesites
    }
  }
}
