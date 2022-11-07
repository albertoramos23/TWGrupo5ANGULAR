import { Component, OnInit } from '@angular/core';
import { Pedido } from '../model/pedido';
import { LogService } from '../servicios/log.service';
import { PedidoComponent } from './pedido/pedido.component';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {

pedidos : Pedido[] = [];

estadoListadoPeddos: String = 'noEntregado';
  
//Inyecta una instancia de logService
  constructor(private log:LogService) {
    this.pedidos = [
      {
        id: 1,
        user: "luis",
        desc: "pizza",
        fechaPedido: new Date(),
        entregado: false
      },
      {
        id: 2,
        user: "luis",
        desc: "Moto",
        fechaPedido: new Date(),
        entregado: true
      },
      {
        id: 3,
        user: "Maite",
        desc: "Camisa",
        fechaPedido: new Date(),
        entregado: false
      }


    ];



   }

  ngOnInit(): void {



  }

public onAltaPedido(){
  //console.log('abrir formulario edicion pedido')
  this.log.info("Abrir formulario alta nuevo pedido");
}

}
