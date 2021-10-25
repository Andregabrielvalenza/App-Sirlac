import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoProgramadoPageRoutingModule } from './pedido-programado-routing.module';

import { PedidoProgramadoPage } from './pedido-programado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoProgramadoPageRoutingModule
  ],
  declarations: [PedidoProgramadoPage]
})
export class PedidoProgramadoPageModule {}
