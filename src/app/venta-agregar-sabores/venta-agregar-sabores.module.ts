import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentaAgregarSaboresPageRoutingModule } from './venta-agregar-sabores-routing.module';

import { VentaAgregarSaboresPage } from './venta-agregar-sabores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentaAgregarSaboresPageRoutingModule
  ],
  declarations: [VentaAgregarSaboresPage]
})
export class VentaAgregarSaboresPageModule {}
