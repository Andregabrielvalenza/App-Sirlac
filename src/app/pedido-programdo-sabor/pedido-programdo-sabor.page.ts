import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pedido-programdo-sabor',
  templateUrl: './pedido-programdo-sabor.page.html',
  styleUrls: ['./pedido-programdo-sabor.page.scss'],
})
export class PedidoProgramdoSaborPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  back(){
    this.navController.back ();
  }
  next(){
    this.navController.navigateForward(['pedido-agregar-sabor'])
  }

}
