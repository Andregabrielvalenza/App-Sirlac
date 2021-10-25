import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-venta-exitosa',
  templateUrl: './venta-exitosa.page.html',
  styleUrls: ['./venta-exitosa.page.scss'],
})
export class VentaExitosaPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  next(){
    this.navController.navigateForward(['home'])
  }

}
