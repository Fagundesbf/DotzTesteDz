import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/request/requests.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  pedidos = [];

  constructor(
    private servicePedidos: RequestsService
  ) { }

  ngOnInit() {
    this.servicePedidos.buscarPedidos().subscribe((resp)=>{
      this.pedidos = resp;
    })
  }

  removerPedido(pedido){
    this.servicePedidos
      .deleteProdutoCarinho(pedido.id)
      .subscribe((resp) => {
        Swal.fire({
          icon: "success",
          text: "Produto excluido com Sucesso!",
        }).then(()=>
        {
          this.servicePedidos
          .cadastrarProduto({
            nomeProduto: pedido.nomeProduto,
            valorProduto: pedido.valorProduto,
            statusProduto: "Disponível",
            descricao: pedido.descricao,
            tempo: 0,
          })
          .subscribe((resp) => {
           this.ngOnInit();
         });
        });
      });
  }
}
