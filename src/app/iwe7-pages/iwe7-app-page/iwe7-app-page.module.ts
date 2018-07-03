import { Iwe7ComponentsMapService } from './../../services/iwe7-components-map.service';
import { Iwe7AppContentModule } from './../iwe7-app-content/iwe7-app-content.module';
import { Iwe7ComponentsModule } from './../iwe7-components/iwe7-components.module';
import { DelonFormModule } from '@delon/form';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Iwe7AppPageRoutingModule } from './iwe7-app-page-routing.module';
import { Iwe7AppPageComponent } from './iwe7-app-page.component';
import { Iwe7AppPageAddComponent } from './iwe7-app-page-add/iwe7-app-page-add.component';

@NgModule({
  imports: [
    CommonModule,
    Iwe7AppPageRoutingModule,
    NgZorroAntdModule,
    DelonFormModule,
    Iwe7ComponentsModule,
    Iwe7AppContentModule
  ],
  declarations: [Iwe7AppPageComponent, Iwe7AppPageAddComponent],
  exports: [Iwe7AppPageComponent, Iwe7AppPageAddComponent],
  entryComponents: [Iwe7AppPageAddComponent]
})
export class Iwe7AppPageModule {
  constructor(map: Iwe7ComponentsMapService) {
    map.set('iwe7-app-page', Iwe7AppPageAddComponent);
  }
}
