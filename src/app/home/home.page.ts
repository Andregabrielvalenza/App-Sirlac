import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalPage  } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController, private navController: NavController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  detallePedido(){
    this.navController.navigateForward(['detalle-pedido-programado'])
  }

  carga(){
    this.navController.navigateForward(['carga-asignada'])
  }

}
