import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/request/requests.service';

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
}
