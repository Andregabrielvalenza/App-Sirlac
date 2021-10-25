import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiosAgregarSaborPageRoutingModule } from './cambios-agregar-sabor-routing.module';

import { CambiosAgregarSaborPage } from './cambios-agregar-sabor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiosAgregarSaborPageRoutingModule
  ],
  declarations: [CambiosAgregarSaborPage]
})
export class CambiosAgregarSaborPageModule {}
