import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-modalfacuracion',
  templateUrl: './modalfacuracion.page.html',
  styleUrls: ['./modalfacuracion.page.scss'],
})
export class ModalfacuracionPage implements OnInit {

  constructor(public modalController: ModalController, private navController: NavController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  factura(){
    this.navController.navigateForward(['factura'])
  }

  boleta(){
    this.navController.navigateForward(['venta-exitosa'])
  }

}
