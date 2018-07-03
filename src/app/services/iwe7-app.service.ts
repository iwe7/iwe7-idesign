import { Iwe7AppAddComponent } from '../iwe7-pages/iwe7-app/iwe7-app-add/iwe7-app-add.component';
import { UpsertIwe7App } from './../actions/iwe7-app.actions';
import { Iwe7App } from './../models/iwe7-app.model';
import { NzModalService } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class Iwe7AppService {

  constructor(
    public modal: NzModalService,
    public store: Store<any>
  ) { }

  create(item: Iwe7App) {
    const modal = this.modal.create({
      nzTitle: '添加应用',
      nzComponentParams: { default: item },
      nzContent: Iwe7AppAddComponent,
      nzFooter: [{
        label: '保存',
        type: 'primary',
        onClick: (ins: Iwe7AppAddComponent) => {
          const value = ins.value;
          this.store.dispatch(new UpsertIwe7App({
            Iwe7App: value
          }));
          modal.close();
        }
      }]
    });
  }
}
