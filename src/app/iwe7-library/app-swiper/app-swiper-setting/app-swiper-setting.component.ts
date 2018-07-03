import { AppSwiperModel } from './../app-swiper.model';
import { SFUISchemaItem, SFSchema } from '@delon/form';
import { Store } from '@ngrx/store';
import { DefaultData } from './../../../services/iwe7-components-map.service';
import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-swiper-setting',
  templateUrl: './app-swiper-setting.component.html',
  styleUrls: ['./app-swiper-setting.component.scss']
})
export class AppSwiperSettingComponent implements OnInit {

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
  @Input() default: AppSwiperModel;
  constructor(
    public store: Store<any>,
    @Inject(DefaultData)
    public _default: AppSwiperModel
  ) {
    if (this._default) {
      this.default = this._default;
    }
  }

  ngOnInit() { }

  _value: AppSwiperModel;
  get value() {
    return this._value;
  }

  formChange(val: AppSwiperModel) {
    this._value = val;
  }

}
