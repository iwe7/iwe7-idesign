import { SFUISchemaItem, SFSchema } from '@delon/form';
import { Component, OnInit, Input } from '@angular/core';
import { Iwe7App } from '../../../models/iwe7-app.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'iwe7-app-add',
  templateUrl: './iwe7-app-add.component.html',
  styleUrls: ['./iwe7-app-add.component.scss']
})
export class Iwe7AppAddComponent implements OnInit {
  schema: SFSchema = {
    properties: {
      title: {
        type: 'string',
        title: '应用名'
      }
    }
  };
  ui: SFUISchemaItem = {
    $title: {
      autofocus: true
    }
  };
  @Input() default: Iwe7App;
  constructor(
    public store: Store<any>
  ) { }

  ngOnInit() {
  }

  get value() {
    delete (this.default['_values']);
    return this.default;
  }

  formChange(val: Iwe7App) {
    this.default.title = val.title;
  }

}
