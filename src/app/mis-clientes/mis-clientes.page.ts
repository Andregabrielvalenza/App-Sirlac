import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mis-clientes',
  templateUrl: './mis-clientes.page.html',
  styleUrls: ['./mis-clientes.page.scss'],
})
export class MisClientesPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  back(){
    this.navController.back ();
  }

  editagregarCliente(){
    this.navController.navigateForward (['edit-agregar-cliente'])
  }

}
