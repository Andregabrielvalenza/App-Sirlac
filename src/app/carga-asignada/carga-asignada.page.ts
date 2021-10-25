import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carga-asignada',
  templateUrl: './carga-asignada.page.html',
  styleUrls: ['./carga-asignada.page.scss'],
})
export class CargaAsignadaPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  stock(){
    this.navController.navigateForward('pedido-programado');
  }

  next(){
    this.navController.navigateForward('pedido-programado');
  }

}
