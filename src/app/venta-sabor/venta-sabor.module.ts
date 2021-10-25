import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentaSaborPageRoutingModule } from './venta-sabor-routing.module';

import { VentaSaborPage } from './venta-sabor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentaSaborPageRoutingModule
  ],
  declarations: [VentaSaborPage]
})
export class VentaSaborPageModule {}
