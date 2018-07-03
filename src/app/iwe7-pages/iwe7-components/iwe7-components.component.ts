import { UpsertIwe7AppContent } from './../../actions/iwe7-app-content.actions';
import { Iwe7ComponentsService } from './../../services/iwe7-components.service';
import { selectAllIwe7Components } from './../../reducers/iwe7-components.reducer';
import { LoadIwe7Componentss } from './../../actions/iwe7-components.actions';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Iwe7Components } from '../../models/iwe7-components.model';
import { Store } from '@ngrx/store';
import { Iwe7AppPage } from '../../models/iwe7-app-page.model';
import { selectIwe7AppPageId } from '../../reducers/iwe7-app-page.reducer';

@Component({
  selector: 'iwe7-components',
  templateUrl: './iwe7-components.component.html',
  styleUrls: ['./iwe7-components.component.scss']
})
export class Iwe7ComponentsComponent implements OnInit {

  list: Observable<Iwe7Components[]>;
  currentPage: Observable<Iwe7AppPage>;
  page_id: string;
  constructor(
    public store: Store<any>,
    public service: Iwe7ComponentsService
  ) {
    this.list = this.store.select(selectAllIwe7Components);
    this.currentPage = this.store.select(selectIwe7AppPageId);
    this.currentPage.subscribe(res => {
      if (res) {
        this.page_id = res.id;
      }
    });
  }

  ngOnInit() {
    this.store.dispatch(new LoadIwe7Componentss({}));
  }

  addComponents() {
    this.service.create({});
  }

  addToContent(item: Iwe7Components) {
    this.store.dispatch(new UpsertIwe7AppContent({
      Iwe7AppContent: {
        name: item.preview,
        setting: {},
        page_id: this.page_id
      }
    }));
  }

}
