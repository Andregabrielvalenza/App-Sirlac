import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-ventas',
  templateUrl: './detalle-ventas.page.html',
  styleUrls: ['./detalle-ventas.page.scss'],
})
export class DetalleVentasPage implements OnInit {

  constructor(private navController: NavController,) { }

  ngOnInit() {
  }

  back(){
    this.navController.back ();
  }

}
