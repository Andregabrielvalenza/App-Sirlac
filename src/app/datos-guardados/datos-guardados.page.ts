import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-datos-guardados',
  templateUrl: './datos-guardados.page.html',
  styleUrls: ['./datos-guardados.page.scss'],
})
export class DatosGuardadosPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  next(){
    this.navController.navigateForward(['mis-clientes'])
  }

}
