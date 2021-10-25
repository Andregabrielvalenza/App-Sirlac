import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-venta-sabor',
  templateUrl: './venta-sabor.page.html',
  styleUrls: ['./venta-sabor.page.scss'],
})
export class VentaSaborPage implements OnInit {

  constructor(private navController: NavController,) { }

  ngOnInit() {
  }

  back(){
    this.navController.back ();
  }
  
  sabores(){
    this.navController.navigateForward (['sabores']);
  }

}
