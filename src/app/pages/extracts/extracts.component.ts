import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/request/requests.service';

@Component({
  selector: 'app-extracts',
  templateUrl: './extracts.component.html',
  styleUrls: ['./extracts.component.scss']
})
export class ExtractsComponent implements OnInit {

  pedidos = [];
  total = 0;

  constructor(
    private servicePedidos: RequestsService
  ) { }

  ngOnInit() {
    this.servicePedidos.buscarPedidos().subscribe((resp)=>{
      this.pedidos = resp;
      this.pedidos.forEach(element => {
        this.total = this.total + element.valorProduto;
      });
    })
  }
}
