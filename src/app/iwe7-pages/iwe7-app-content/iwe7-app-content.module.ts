import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Iwe7AppContentRoutingModule } from './iwe7-app-content-routing.module';
import { Iwe7AppContentComponent } from './iwe7-app-content.component';
import { Iwe7AppContentAddComponent } from './iwe7-app-content-add/iwe7-app-content-add.component';

@NgModule({
  imports: [
    CommonModule,
    Iwe7AppContentRoutingModule
  ],
  declarations: [Iwe7AppContentComponent, Iwe7AppContentAddComponent],
  exports: [Iwe7AppContentComponent, Iwe7AppContentAddComponent],
  entryComponents: [Iwe7AppContentAddComponent]
})
export class Iwe7AppContentModule { }
