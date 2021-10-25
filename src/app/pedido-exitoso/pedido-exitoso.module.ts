import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoExitosoPageRoutingModule } from './pedido-exitoso-routing.module';

import { PedidoExitosoPage } from './pedido-exitoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoExitosoPageRoutingModule
  ],
  declarations: [PedidoExitosoPage]
})
export class PedidoExitosoPageModule {}
