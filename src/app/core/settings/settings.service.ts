import { Injectable } from '@angular/core';
import { AppInfo } from './models/app-info';
import { LayoutInfo } from './models/layout-info';

const APP = 'app';
const LAYOUT = 'layout';

@Injectable({ providedIn: 'root'})
export class SettingsService {
  private app: AppInfo;
  private layout: LayoutInfo;

  constructor() {
    this.app = {
      name: '后台管理系统',
      description: 'admin base on angular, ng-zorro'
    };
    this.layout = { collapsed: false }; 
  }
  private set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLayout(): any {
    return this.layout;
  }

  setLayout(name: string | LayoutInfo, value?: any): void {
    if (typeof name === 'string') {
      this.layout[name] = value;
    } else {
      this.layout = name;
    }
    this.set(LAYOUT, this.layout);
  }

  getApp(): any {
    return this.app;
  }

  setApp(value: AppInfo): void {
    this.app = value;
    this.set(APP, value);
  }
}
