import { DefaultData } from './../../../services/iwe7-components-map.service';
import { SFSchema, SFUISchemaItem } from '@delon/form';
import { Store } from '@ngrx/store';
import { Iwe7AppPage } from './../../../models/iwe7-app-page.model';
import { Component, OnInit, Input, Optional, Injector, Inject } from '@angular/core';

@Component({
  selector: 'iwe7-app-page-add',
  templateUrl: './iwe7-app-page-add.component.html',
  styleUrls: ['./iwe7-app-page-add.component.scss']
})
export class Iwe7AppPageAddComponent implements OnInit {
  schema: SFSchema = {
    properties: {
      title: {
        type: 'string',
        title: '应用名'
      },
      description: {
        type: 'string',
        title: '页面简介'
      }
    }
  };
  ui: SFUISchemaItem = {
    $title: {
      autofocus: true
    },
    $description: {
      widget: 'textarea',
      autosize: { minRows: 2, maxRows: 6 }
    }
  };
  @Input() default: Iwe7AppPage;
  constructor(
    public store: Store<any>,
    @Inject(DefaultData)
    public _default: Iwe7AppPage
  ) {
    if (this._default) {
      this.default = this._default;
    }
  }

  ngOnInit() {
  }

  _value: Iwe7AppPage;
  get value() {
    return this._value;
  }

  formChange(val: Iwe7AppPage) {
    this._value = val;
  }

}
