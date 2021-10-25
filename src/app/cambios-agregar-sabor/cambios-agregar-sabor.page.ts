import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cambios-agregar-sabor',
  templateUrl: './cambios-agregar-sabor.page.html',
  styleUrls: ['./cambios-agregar-sabor.page.scss'],
})
export class CambiosAgregarSaborPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  back(){
    this.navController.back ();
  }

  next(){
    this.navController.navigateForward(['cambios-exitoso'])
  }

}
