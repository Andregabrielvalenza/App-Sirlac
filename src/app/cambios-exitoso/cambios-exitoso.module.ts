import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiosExitosoPageRoutingModule } from './cambios-exitoso-routing.module';

import { CambiosExitosoPage } from './cambios-exitoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiosExitosoPageRoutingModule
  ],
  declarations: [CambiosExitosoPage]
})
export class CambiosExitosoPageModule {}
