import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {

    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'Fernando Herrera');

    // const headers = new HttpHeaders({
    //   'token-usuario': 'dlksfklsdahffh6df'
    // });

    return this.http.get('https://reqres111111.in/api/user', {
      params
    }).pipe(
      map(resp => resp['data']),
      // catchError(this.manejarError)
    );
  }

  manejarError(error: HttpErrorResponse) {
    console.log('Sucedió un error');
    console.log('Registrado en el log file');
    console.warn(error);
    return throwError('Error personalizado');
  }
}
