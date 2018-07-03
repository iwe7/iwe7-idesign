import { NzModalService } from 'ng-zorro-antd';
import { Store } from '@ngrx/store';
import { Iwe7AppPage } from './../models/iwe7-app-page.model';
import { Iwe7AppPageAddComponent } from '../iwe7-pages/iwe7-app-page/iwe7-app-page-add/iwe7-app-page-add.component';
import { Injectable } from '@angular/core';
import { UpsertIwe7AppPage } from '../actions/iwe7-app-page.actions';

@Injectable({
  providedIn: 'root'
})
export class Iwe7AppPageService {

  constructor(
    public modal: NzModalService,
    public store: Store<any>
  ) { }

  create(item: Iwe7AppPage) {
    const modal = this.modal.create({
      nzTitle: '添加页面',
      nzComponentParams: { default: item },
      nzContent: Iwe7AppPageAddComponent,
      nzFooter: [{
        label: '保存',
        type: 'primary',
        onClick: (ins: Iwe7AppPageAddComponent) => {
          const value = ins.value;
          this.store.dispatch(new UpsertIwe7AppPage({
            Iwe7AppPage: value
          }));
          modal.close();
        }
      }]
    });
  }
}
