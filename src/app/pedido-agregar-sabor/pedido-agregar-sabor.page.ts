import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pedido-agregar-sabor',
  templateUrl: './pedido-agregar-sabor.page.html',
  styleUrls: ['./pedido-agregar-sabor.page.scss'],
})
export class PedidoAgregarSaborPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  back(){
    this.navController.back ();
  }

  next(){
    this.navController.navigateForward(['pedido-exitoso'])
  }

}
