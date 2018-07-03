import { Store } from '@ngrx/store';
import { Iwe7Components } from './../../../models/iwe7-components.model';
import { SFSchema, SFUISchemaItem } from '@delon/form';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iwe7-components-add',
  templateUrl: './iwe7-components-add.component.html',
  styleUrls: ['./iwe7-components-add.component.scss']
})
export class Iwe7ComponentsAddComponent implements OnInit {

  schema: SFSchema = {
    properties: {
      title: {
        type: 'string',
        title: '组件名'
      },
      description: {
        type: 'string',
        title: '组件简介'
      },
      preview: {
        type: 'string',
        title: '预览组件'
      },
      setting: {
        type: 'string',
        title: '设置组件'
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
  @Input() default: Iwe7Components;
  constructor(
    public store: Store<any>
  ) { }

  ngOnInit() {
  }

  _value: Iwe7Components;
  get value() {
    return this._value;
  }

  formChange(val: Iwe7Components) {
    this._value = val;
  }

}
