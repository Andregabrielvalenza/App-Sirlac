import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pedido-programado',
  templateUrl: './pedido-programado.page.html',
  styleUrls: ['./pedido-programado.page.scss'],
})
export class PedidoProgramadoPage implements OnInit {

  constructor(private navController: NavController,) { }

  ngOnInit() {
  }

  back(){
    this.navController.back ();
  }
  
  pedidoSabor(){
    this.navController.navigateForward(['pedido-programdo-sabor'])
  }

}
