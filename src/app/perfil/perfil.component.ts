import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  nombreUsuario: string | null = '';
  @Input() rutaFotoPerfil: string = '';
  @Input() rutaFotoPortada: string = '';

  cambiarFotoPerfil(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.rutaFotoPerfil = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  cambiarFotoPortada(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.rutaFotoPortada = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  ngOnInit(): void {
    const usuarioDatos = JSON.parse(localStorage.getItem('usuarioDatos') || '{}');
    if (usuarioDatos && usuarioDatos.nombre) {
      this.nombreUsuario = usuarioDatos.nombre;
      // y otros campos que necesites
    }
  }
}
