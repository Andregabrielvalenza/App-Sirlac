import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cambios-exitoso',
  templateUrl: './cambios-exitoso.page.html',
  styleUrls: ['./cambios-exitoso.page.scss'],
})
export class CambiosExitosoPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }


  next(){
    this.navController.navigateForward(['home'])
  }
}
