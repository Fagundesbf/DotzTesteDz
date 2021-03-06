import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  buscarPorCep(cep) {
    return this.http.get<any>(
      `${environment.apiExterna}/ws/${cep}/json/`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  buscarUsario(email, senha) {
    return this.http.get<any>(
      `${environment.apiInterna}/users?email=${email}&senha=${senha}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  cadastrarUsuario(usuario) {
    return this.http.post<any>(
      `${environment.apiInterna}/users`,usuario,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
