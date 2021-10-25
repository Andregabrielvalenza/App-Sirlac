import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-verificar-carga',
  templateUrl: './verificar-carga.page.html',
  styleUrls: ['./verificar-carga.page.scss'],
})
export class VerificarCargaPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  next(){
    this.navController.navigateForward (['iniciar-ruta']);
  }

}
