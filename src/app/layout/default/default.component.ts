import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  RouteConfigLoadStart,
  Router
} from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LayoutInfo } from 'src/app/core/settings/models/layout-info';
import { SettingsService } from 'src/app/core/settings/settings.service';

@Component({
  selector: 'layout-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class LayoutDefaultComponent implements OnInit, OnDestroy{

  private unsubscribe$ = new Subject<void>();
  triggerTemplate = null;
  isFetching = false;
  layout: LayoutInfo;

  @ViewChild('trigger', {static: false}) customTrigger: TemplateRef<void>; // ???

  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  constructor(
    private router: Router,
    private settingsService: SettingsService,
    private notification: NzNotificationService
  ) {}
  ngOnInit(): void {
    this.layout = this.settingsService.getLayout();
    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe(evt => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
      }
      if (evt instanceof NavigationError || evt instanceof NavigationCancel) {
        this.isFetching = false;
        if (evt instanceof NavigationError) {
          this.notification.create(
            'error',
            '错误通知',
            `无法加载${evt.url}路由`
          );
        }

        return;
      }
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      setTimeout(() => {
        this.isFetching = false;
      }, 100);
    });
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
