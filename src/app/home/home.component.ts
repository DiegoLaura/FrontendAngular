import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formData: any = {
    nombre: '',
    correo: '',
    celular: null,
    comentario: ''
  };
  formEnviado = false;

  constructor(private httpClient: HttpClient, private toastr: ToastrService, private router: Router, private auth: AuthService) { }

  handleFormSubmission() {
    const apiUrl = 'http://127.0.0.1:8000/api/comentarios/';

    // Realiza una solicitud POST a la API con los datos del formulario
    this.httpClient.post(apiUrl, this.formData).subscribe(response => {
      // Maneja la respuesta según tus necesidades
      console.log('Comentario enviado con éxito', response);

      // Recarga los comentarios después de enviar uno nuevo
      this.getComentarios();

      // Muestra la notificación de éxito
      this.toastr.success('Comentario enviado con éxito', 'Éxito', {
        positionClass: 'toast-top-right'
      });

      this.formEnviado = true;
    }, error => {
      // Maneja errores aquí
      console.error('Error al enviar el comentario', error);

      // Muestra la notificación de error
      this.toastr.error('Error al enviar el comentario', 'Error', {
        positionClass: 'toast-top-right'
      });
    });
  }

  logout() {
    this.auth.logout();
    // Redirige al usuario a la página de inicio de sesión u otra página según tus necesidades
    this.router.navigate(['/']);
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  private getComentarios() {
    const apiUrl = 'http://127.0.0.1:8000/api/comentarios/';
    this.httpClient.get<any[]>(apiUrl).subscribe(comentarios => {
      // Actualiza la lista de comentarios
    });
  }
}
