import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    nombre: '',
    contrasena: ''
  };

  registerData = {
    nombre: '',
    correo: '',
    contrasena: ''
  }

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {}

  login() {
    this.auth.login(this.loginData.nombre, this.loginData.contrasena).subscribe(
      (response: any) => {
        if(response.success) {
          this.router.navigate(['/']); // Redirige al home
        } else {
          console.error('Error de inicio de sesión');
          // Manejar el mensaje de error en la UI
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  register() {
    this.auth.register(this.registerData).subscribe(
      success => {
        console.log('Registration Success');
        this.router.navigate(['/']); // Redirige al home
      },
      err => console.error(err),
    );
  }

}
