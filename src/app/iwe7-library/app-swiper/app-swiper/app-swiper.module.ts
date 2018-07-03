import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSwiperComponent } from './app-swiper.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppSwiperComponent],
  exports: [AppSwiperComponent],
  entryComponents: [AppSwiperComponent]
})
export class AppSwiperModule { }
