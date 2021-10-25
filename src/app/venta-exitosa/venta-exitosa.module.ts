import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentaExitosaPageRoutingModule } from './venta-exitosa-routing.module';

import { VentaExitosaPage } from './venta-exitosa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentaExitosaPageRoutingModule
  ],
  declarations: [VentaExitosaPage]
})
export class VentaExitosaPageModule {}
