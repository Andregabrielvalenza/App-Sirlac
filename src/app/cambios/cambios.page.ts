import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cambios',
  templateUrl: './cambios.page.html',
  styleUrls: ['./cambios.page.scss'],
})
export class CambiosPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  back(){
    this.navController.back ();
  }

  next(){
    this.navController.navigateForward(['cambios-agregar-sabor'])
  }

}
