import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController, private navController: NavController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  ventas(){
    this.navController.navigateForward (['venta-sabor']);
  }
 
  misClientes(){
    this.navController.navigateForward (['mis-clientes']);
  }
  
  miCamion(){
    this.navController.navigateForward (['stock']);
  }

  pedidoProgramdo(){
    this.navController.navigateForward (['pedido-programado']);
  }

  misVentas(){
    this.navController.navigateForward (['mis-ventas']);
  }

  cambios(){
    this.navController.navigateForward(['cambios']);
  }

}
