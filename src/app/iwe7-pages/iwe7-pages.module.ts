import { Iwe7LibraryModule } from './../iwe7-library/iwe7-library.module';
import { Iwe7AppPageModule } from './iwe7-app-page/iwe7-app-page.module';
import { Iwe7AppModule } from './iwe7-app/iwe7-app.module';
import { Iwe7StoreModule } from './../iwe7-store/iwe7-store.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    Iwe7StoreModule,
    Iwe7AppModule,
    Iwe7AppPageModule,
    Iwe7LibraryModule
  ],
  declarations: []
})
export class Iwe7PagesModule { }
