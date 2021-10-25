import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pedido-exitoso',
  templateUrl: './pedido-exitoso.page.html',
  styleUrls: ['./pedido-exitoso.page.scss'],
})
export class PedidoExitosoPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  next(){
    this.navController.navigateForward(['home'])
  }

}
