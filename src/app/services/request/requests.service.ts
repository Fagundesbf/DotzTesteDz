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

  buscarProdutos() {
    return this.http.get<any>(
      `${environment.apiInterna}/requestsCart`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  cadastrarProdutoCarinho(produto) {
    return this.http.post<any>(
      `${environment.apiInterna}/requests`,produto,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  cadastrarProduto(produto) {
    return this.http.post<any>(
      `${environment.apiInterna}/requestsCart`,produto,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  deleteProdutoCarinho(produto) {
    return this.http.delete<any>(
      `${environment.apiInterna}/requests/${produto}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  deleteProduto(produto) {
    return this.http.delete<any>(
      `${environment.apiInterna}/requestsCart/${produto}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }

}
