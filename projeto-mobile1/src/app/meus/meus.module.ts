import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusPageRoutingModule } from './meus-routing.module';

import { MeusPage } from './meus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusPageRoutingModule
  ],
  declarations: [MeusPage]
})
export class MeusPageModule {}
