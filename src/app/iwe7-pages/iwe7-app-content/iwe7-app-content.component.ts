import { Observable } from 'rxjs';
import { selectIwe7AppPageId } from './../../reducers/iwe7-app-page.reducer';
import { Store } from '@ngrx/store';
import { LoadIwe7AppContents, SelectIwe7AppContent } from './../../actions/iwe7-app-content.actions';
import { Component, OnInit, Input } from '@angular/core';
import { Iwe7AppPage } from '../../models/iwe7-app-page.model';
import { Iwe7AppContent } from '../../models/iwe7-app-content.model';
import { selectAllIwe7AppContent } from '../../reducers/iwe7-app-content.reducer';

@Component({
  selector: 'iwe7-app-content',
  templateUrl: './iwe7-app-content.component.html',
  styleUrls: ['./iwe7-app-content.component.scss']
})
export class Iwe7AppContentComponent implements OnInit {

  page_id: string;
  currentPage: Observable<Iwe7AppPage>;
  list: Observable<Iwe7AppContent[]>;
  constructor(
    public store: Store<any>
  ) {
    this.currentPage = this.store.select(selectIwe7AppPageId);
    this.list = this.store.select(selectAllIwe7AppContent);
    this.currentPage.subscribe(res => {
      if (res) {
        this.page_id = res.id;
        this.loadContent();
      }
    });
  }

  ngOnInit() { }

  loadContent() {
    this.store.dispatch(new LoadIwe7AppContents({
      params: {
        page_id: this.page_id
      }
    }));
  }

  setCurrentContent(item: any) {
    this.store.dispatch(new SelectIwe7AppContent({
      id: item.id
    }));
  }

}
