import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
})
export class FacturaPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  next(){
    this.navController.navigateForward(['venta-exitosa'])
  }

}
