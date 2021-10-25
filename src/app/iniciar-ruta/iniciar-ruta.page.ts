import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-iniciar-ruta',
  templateUrl: './iniciar-ruta.page.html',
  styleUrls: ['./iniciar-ruta.page.scss'],
})
export class IniciarRutaPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  next(){
    this.navController.navigateForward (['home']);
  }

}
