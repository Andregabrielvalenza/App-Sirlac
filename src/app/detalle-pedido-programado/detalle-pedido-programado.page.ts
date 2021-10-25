import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-pedido-programado',
  templateUrl: './detalle-pedido-programado.page.html',
  styleUrls: ['./detalle-pedido-programado.page.scss'],
})
export class DetallePedidoProgramadoPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  next(){
    this.navController.navigateForward(['venta-exitosa'])
  }

  back(){
    this.navController.back()
  }

}
