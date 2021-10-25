import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ModalfacuracionPage } from '../modalfacuracion/modalfacuracion.page';

@Component({
  selector: 'app-venta-agregar-sabores',
  templateUrl: './venta-agregar-sabores.page.html',
  styleUrls: ['./venta-agregar-sabores.page.scss'],
})
export class VentaAgregarSaboresPage implements OnInit {

  constructor(private navController: NavController,public modalController: ModalController) { }

  ngOnInit() {
  }

  back(){
    this.navController.back ();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalfacuracionPage,
      cssClass: 'my-custom-class-facturacion'
    });
    return await modal.present();
  }
  

}
