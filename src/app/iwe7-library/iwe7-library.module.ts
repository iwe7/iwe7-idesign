import { AppSwiperSettingModule } from './app-swiper/app-swiper-setting/app-swiper-setting.module';
import { AppSwiperModule } from './app-swiper/app-swiper/app-swiper.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AppSwiperModule,
    AppSwiperSettingModule
  ],
  declarations: []
})
export class Iwe7LibraryModule { }
