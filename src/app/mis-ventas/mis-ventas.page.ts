import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mis-ventas',
  templateUrl: './mis-ventas.page.html',
  styleUrls: ['./mis-ventas.page.scss'],
})
export class MisVentasPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }


  back(){
    this.navController.back ();
  }

  detalleVentas(){
    this.navController.navigateForward(['detalle-ventas']);
  }
}
