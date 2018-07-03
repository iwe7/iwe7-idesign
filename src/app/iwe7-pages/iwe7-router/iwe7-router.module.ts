import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Iwe7RouterRoutingModule } from './iwe7-router-routing.module';
import { Iwe7RouterComponent } from './iwe7-router.component';
import { Iwe7RouterAddComponent } from './iwe7-router-add/iwe7-router-add.component';

@NgModule({
  imports: [
    CommonModule,
    Iwe7RouterRoutingModule
  ],
  declarations: [Iwe7RouterComponent, Iwe7RouterAddComponent],
  exports: [Iwe7RouterComponent, Iwe7RouterAddComponent]
})
export class Iwe7RouterModule { }
