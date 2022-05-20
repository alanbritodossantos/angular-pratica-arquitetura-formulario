import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(
      'http://localhost:3000/user/login',
      {
        userName: usuario,
        password: senha,
      },
      { observe: 'response' }
    ).pipe(
      tap((res)=>{
        const authToken = res.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    );
  }
}
