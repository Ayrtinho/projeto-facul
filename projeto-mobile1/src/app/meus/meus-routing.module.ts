import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusPage } from './meus.page';

const routes: Routes = [
  {
    path: '',
    component: MeusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusPageRoutingModule {}

