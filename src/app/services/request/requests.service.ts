import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  constructor(private http: HttpClient) {}

  buscarPedidos() {
    return this.http.get<any>(
      `${environment.apiInterna}/requests`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }

}
