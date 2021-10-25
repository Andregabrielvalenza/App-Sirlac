import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalfacuracionPageRoutingModule } from './modalfacuracion-routing.module';

import { ModalfacuracionPage } from './modalfacuracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalfacuracionPageRoutingModule
  ],
  declarations: [ModalfacuracionPage]
})
export class ModalfacuracionPageModule {}
