import { LoadIwe7Apps, SelectIwe7App } from './../../actions/iwe7-app.actions';
import { Iwe7AppService } from './../../services/iwe7-app.service';
import { selectAllIwe7App, selectIwe7AppLoaded } from './../../reducers/iwe7-app.reducer';
import { Observable } from 'rxjs';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Iwe7App } from '../../models/iwe7-app.model';

@Component({
  selector: 'iwe7-app',
  templateUrl: './iwe7-app.component.html',
  styleUrls: ['./iwe7-app.component.scss']
})
export class Iwe7AppComponent implements OnInit, AfterViewInit {
  list: Observable<Iwe7App[]>;
  loaded: Observable<boolean>;
  constructor(
    public store: Store<any>,
    public appService: Iwe7AppService
  ) {
    this.list = this.store.select(selectAllIwe7App);
    this.loaded = this.store.select(selectIwe7AppLoaded);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.store.dispatch(new LoadIwe7Apps({}));
  }

  setCurrentApp(app: Iwe7App) {
    this.store.dispatch(new SelectIwe7App({
      id: app.id
    }));
  }

}
