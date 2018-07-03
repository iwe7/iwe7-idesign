import { SelectIwe7AppContent } from './../../actions/iwe7-app-content.actions';
import { Iwe7AppContent } from './../../models/iwe7-app-content.model';
import { Iwe7AppPageAddComponent } from './iwe7-app-page-add/iwe7-app-page-add.component';
import { Iwe7AppPageService } from './../../services/iwe7-app-page.service';
import { Iwe7AppPage } from './../../models/iwe7-app-page.model';
import { LoadIwe7AppPages, SelectIwe7AppPage, DeleteIwe7AppPage, UpsertIwe7AppPage } from './../../actions/iwe7-app-page.actions';
import { selectIwe7RouterParams } from './../../reducers/iwe7-router.reducer';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, ComponentRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllIwe7AppPage } from '../../reducers/iwe7-app-page.reducer';
import { Iwe7ComponentsMapService } from '../../services/iwe7-components-map.service';

@Component({
  selector: 'iwe7-app-page',
  templateUrl: './iwe7-app-page.component.html',
  styleUrls: ['./iwe7-app-page.component.scss']
})
export class Iwe7AppPageComponent implements OnInit, AfterViewInit {

  params: Observable<any>;
  list: Observable<Iwe7AppPage[]>;
  currentPage: Observable<Iwe7AppPage>;
  currentAppContent: Observable<Iwe7AppContent>;
  appId: string;

  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  @ViewChild('setting', {
    read: ViewContainerRef
  }) settingContainer: ViewContainerRef;

  @ViewChild('preview', {
    read: ViewContainerRef
  }) previewContainer: ViewContainerRef;

  constructor(
    public store: Store<any>,
    public appPage: Iwe7AppPageService,
    public componentsMap: Iwe7ComponentsMapService,
    public resolver: ComponentFactoryResolver
  ) {
    this.params = this.store.select(selectIwe7RouterParams);
    this.list = this.store.select(selectAllIwe7AppPage);
    this.params.subscribe(res => {
      const { id } = res;
      this.appId = id;
      this.loadAppPage();
    });
  }

  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  ngOnInit() {

  }
  showSettingBtn: boolean = false;
  currentPageData: Iwe7AppPage;
  currentPageInstance: Iwe7AppPageAddComponent;
  ngAfterViewInit() { }

  deletePage() {
    this.store.dispatch(new DeleteIwe7AppPage({
      id: this.currentPageData.id
    }));
  }

  savePage() {
    this.store.dispatch(new UpsertIwe7AppPage({
      Iwe7AppPage: this.currentPageInstance.value
    }));
  }

  loadAppPage() {
    this.store.dispatch(new LoadIwe7AppPages({
      params: {
        app_id: this.appId
      }
    }));
  }

  createPage() {
    this.appPage.create({
      app_id: this.appId
    });
  }

  setCurrentPage(page: Iwe7AppPage) {
    this.store.dispatch(new SelectIwe7AppPage({
      id: page.id
    }));
    this.store.dispatch(new SelectIwe7AppContent({
      id: null
    }));
  }

}
