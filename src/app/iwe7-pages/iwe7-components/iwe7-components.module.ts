import { DelonFormModule } from '@delon/form';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Iwe7ComponentsRoutingModule } from './iwe7-components-routing.module';
import { Iwe7ComponentsComponent } from './iwe7-components.component';
import { Iwe7ComponentsAddComponent } from './iwe7-components-add/iwe7-components-add.component';

@NgModule({
  imports: [
    CommonModule,
    Iwe7ComponentsRoutingModule,
    DelonFormModule
  ],
  declarations: [Iwe7ComponentsComponent, Iwe7ComponentsAddComponent],
  exports: [Iwe7ComponentsComponent, Iwe7ComponentsAddComponent],
  entryComponents: [Iwe7ComponentsAddComponent]
})
export class Iwe7ComponentsModule { }
