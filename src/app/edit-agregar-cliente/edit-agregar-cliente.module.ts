import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAgregarClientePageRoutingModule } from './edit-agregar-cliente-routing.module';

import { EditAgregarClientePage } from './edit-agregar-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAgregarClientePageRoutingModule
  ],
  declarations: [EditAgregarClientePage]
})
export class EditAgregarClientePageModule {}
