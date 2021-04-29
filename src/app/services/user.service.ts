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

  // obterAcessoSituacao(ativos: any) {
  //   return this.http.get<any>(
  //     `${environment.prucUrl}/perfil/obter-ativos-inativos`,
  //     {
  //       headers: this.httpHeaders,
  //       params: { ativos },
  //     }
  //   );
  // }
}
