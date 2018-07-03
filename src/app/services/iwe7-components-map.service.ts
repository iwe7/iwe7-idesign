import { Injectable, InjectionToken } from '@angular/core';

export const DefaultData = new InjectionToken('DefaultData', {
  providedIn: 'root',
  factory: () => ({})
});

@Injectable({
  providedIn: 'root'
})
export class Iwe7ComponentsMapService {
  map: Map<string, any> = new Map();
  constructor() {
    this.map.set('iwe7-app-page', 'iwe7-app-page-add');
  }

  get(name: string): any {
    return this.map.get(name);
  }

  set(name: string, comp: any) {
    this.map.set(name, comp);
  }
}
