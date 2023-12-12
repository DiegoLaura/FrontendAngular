import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://127.0.0.1:8000/api'; // URL de tu API Django

  constructor(private http: HttpClient) { }

  register(userData: any) {
    return this.http.post(`${this.apiUrl}/usuarios/`, userData);
  }

  login(nombre: string, contrasena: string) {
    return this.http.post(`${this.apiUrl}/login/`, { nombre, contrasena }).pipe(
      tap((res: any) => {
        if (res.success && res.user) {
          localStorage.setItem('usuarioDatos', JSON.stringify(res.user));
        }
      })
    );
  }

  getUserProfile(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/usuarios/${id}`);
  }
}
