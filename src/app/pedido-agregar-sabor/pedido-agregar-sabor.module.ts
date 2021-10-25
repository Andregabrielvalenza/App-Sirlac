import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoAgregarSaborPageRoutingModule } from './pedido-agregar-sabor-routing.module';

import { PedidoAgregarSaborPage } from './pedido-agregar-sabor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoAgregarSaborPageRoutingModule
  ],
  declarations: [PedidoAgregarSaborPage]
})
export class PedidoAgregarSaborPageModule {}
