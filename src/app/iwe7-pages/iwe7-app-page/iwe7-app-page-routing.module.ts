import { Iwe7AppPageComponent } from './iwe7-app-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'app/page/:id',
  component: Iwe7AppPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Iwe7AppPageRoutingModule { }
