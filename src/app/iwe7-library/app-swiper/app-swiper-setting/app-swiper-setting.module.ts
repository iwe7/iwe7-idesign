import { DelonFormModule } from '@delon/form';
import { Iwe7ComponentsMapService } from './../../../services/iwe7-components-map.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSwiperSettingComponent } from './app-swiper-setting.component';

@NgModule({
  imports: [
    CommonModule,
    DelonFormModule
  ],
  declarations: [AppSwiperSettingComponent],
  exports: [AppSwiperSettingComponent],
  entryComponents: [AppSwiperSettingComponent]
})
export class AppSwiperSettingModule {
  constructor(map: Iwe7ComponentsMapService) {
    map.set('app-swiper', AppSwiperSettingComponent);
  }
}
