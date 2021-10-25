import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sabores',
  templateUrl: './sabores.page.html',
  styleUrls: ['./sabores.page.scss'],
})
export class SaboresPage implements OnInit {

  constructor(private navController: NavController,) { }

  ngOnInit() {
  }

  back(){
    this.navController.back ();
  }

  next(){
    this.navController.navigateForward(['venta-agregar-sabores'])
  }

}
