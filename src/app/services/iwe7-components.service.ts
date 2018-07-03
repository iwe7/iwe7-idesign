import { Iwe7ComponentsAddComponent } from './../iwe7-pages/iwe7-components/iwe7-components-add/iwe7-components-add.component';
import { Iwe7Components } from './../models/iwe7-components.model';
import { Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';
import { UpsertIwe7Components } from '../actions/iwe7-components.actions';

@Injectable({
  providedIn: 'root'
})
export class Iwe7ComponentsService {

  constructor(
    public modal: NzModalService,
    public store: Store<any>
  ) { }

  create(item: Iwe7Components) {
    const modal = this.modal.create({
      nzTitle: '添加组件',
      nzComponentParams: { default: item },
      nzContent: Iwe7ComponentsAddComponent,
      nzFooter: [{
        label: '保存',
        type: 'primary',
        onClick: (ins: Iwe7ComponentsAddComponent) => {
          const value = ins.value;
          if (value) {
            this.store.dispatch(new UpsertIwe7Components({
              Iwe7Components: value
            }));
          }
          modal.close();
        }
      }]
    });
  }
}
