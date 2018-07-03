import { Iwe7ComponentsMapService, DefaultData } from './../../../services/iwe7-components-map.service';
import { map, tap, filter } from 'rxjs/operators';
import { Observable, merge } from 'rxjs';
import { Iwe7AppPage } from './../../../models/iwe7-app-page.model';
import { Iwe7AppContent } from './../../../models/iwe7-app-content.model';
import { selectIwe7AppContentId } from './../../../reducers/iwe7-app-content.reducer';
import { Component, OnInit, ViewContainerRef, Injector, ReflectiveInjector } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIwe7AppPageId } from '../../../reducers/iwe7-app-page.reducer';

@Component({
  selector: 'iwe7-app-content-add',
  templateUrl: './iwe7-app-content-add.component.html',
  styleUrls: ['./iwe7-app-content-add.component.scss']
})
export class Iwe7AppContentAddComponent implements OnInit {
  currentPage: Observable<Iwe7AppPage>;
  currentAppContent: Observable<Iwe7AppContent>;

  myComponent: Observable<any>;
  myInjector: Injector;
  myContent: any;

  constructor(
    public view: ViewContainerRef,
    public store: Store<any>,
    public _map: Iwe7ComponentsMapService,
    public injector: Injector
  ) {
    this.currentPage = this.store.select(selectIwe7AppPageId);
    this.currentAppContent = this.store.select(selectIwe7AppContentId);
    this.myComponent = merge(
      this.currentPage.pipe(
        filter(res => !!res),
        map(res => {
          return {
            component: this._map.get('iwe7-app-page'),
            injector: ReflectiveInjector.resolveAndCreate([{
              provide: DefaultData,
              useValue: res
            }], injector)
          };
        })
      ),
      this.currentAppContent.pipe(
        filter(res => !!res),
        map(res => {
          return {
            component: this._map.get(res.name),
            injector: ReflectiveInjector.resolveAndCreate([{
              provide: DefaultData,
              useValue: res.setting
            }], injector)
          };
        })
      )
    );
  }

  ngOnInit() { }

}
