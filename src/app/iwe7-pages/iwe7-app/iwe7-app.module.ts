import { RouterModule } from '@angular/router';
import { DelonFormModule } from '@delon/form';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AdSimpleTableModule } from '@delon/abc';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iwe7AppComponent } from './iwe7-app.component';
import { Iwe7AppAddComponent } from './iwe7-app-add/iwe7-app-add.component';

@NgModule({
  imports: [
    CommonModule,
    AdSimpleTableModule,
    NgZorroAntdModule,
    DelonFormModule,
    RouterModule.forChild([{ path: '', component: Iwe7AppComponent }])
  ],
  declarations: [Iwe7AppComponent, Iwe7AppAddComponent],
  exports: [Iwe7AppComponent],
  entryComponents: [Iwe7AppAddComponent]
})
export class Iwe7AppModule { }
