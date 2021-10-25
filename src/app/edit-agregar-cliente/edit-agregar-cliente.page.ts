import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-agregar-cliente',
  templateUrl: './edit-agregar-cliente.page.html',
  styleUrls: ['./edit-agregar-cliente.page.scss'],
})
export class EditAgregarClientePage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  back(){
    this.navController.back ();
  }

  next(){
    this.navController.navigateForward(['datos-guardados'])
  }

}
