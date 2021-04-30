import { Component, OnInit } from "@angular/core";
import { RequestsService } from "src/app/services/request/requests.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  produtos = [];

  constructor(private serviceProdutos: RequestsService) {}

  ngOnInit() {
    this.serviceProdutos.buscarProdutos().subscribe((resp) => {
      this.produtos = resp;
    });
  }

  adicionarPedido(produto) {
    this.serviceProdutos
      .cadastrarProdutoCarinho({
        nomeProduto: produto.nomeProduto,
        valorProduto: produto.valorProduto,
        statusProduto: "Em separação",
        descricao: produto.descricao,
        tempo: 0,
      })
      .subscribe((resp) => {
        Swal.fire({
          icon: "success",
          text: "Produto adicionado com Sucesso!",
        }).then(()=>{
          this.serviceProdutos
          .deleteProduto(produto.id)
          .subscribe((resp) => {
              this.ngOnInit();
          });
        });
      });
  }
}
