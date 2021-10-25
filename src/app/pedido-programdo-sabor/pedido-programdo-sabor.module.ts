import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoProgramdoSaborPageRoutingModule } from './pedido-programdo-sabor-routing.module';

import { PedidoProgramdoSaborPage } from './pedido-programdo-sabor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoProgramdoSaborPageRoutingModule
  ],
  declarations: [PedidoProgramdoSaborPage]
})
export class PedidoProgramdoSaborPageModule {}
