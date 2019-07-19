import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { Subscription } from 'rxjs';
import * as screenfull from 'screenfull';
import { AuthService } from 'src/app/core/auth/auth.service';         
import { UserInfo } from 'src/app/core/auth/models/user-info';
import { AppInfo } from 'src/app/core/settings/models/app-info';
import { LayoutInfo } from 'src/app/core/settings/models/layout-info';
import { SettingsService } from 'src/app/core/settings/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isSuppourtFullscreen: boolean = screenfull && screenfull.enabled; // ?
  isFullscreen: boolean;
  layout: LayoutInfo;
  app: AppInfo;
  user: UserInfo;
  currentUserSubscription: Subscription;
  constructor(
    private settingsService: SettingsService,
    private modalService: NzModalService,
    private authService: AuthService,
    private router: Router
    ) {
      this.layout = this.settingsService.getLayout();
      this.app = this.settingsService.getApp();
      this.currentUserSubscription = this.authService.currentUser.subscribe(
      user => {
        this.user = user;
      }
    );
    }
  @HostListener('window:resize')
    _resize(): any {
      if (screenfull && screenfull.enabled) {
        this.isFullscreen = screenfull.isFullscreen;
      }
    }
  
  ngOnInit() {}
  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.currentUserSubscription.unsubscribe();
    }t
  toggleCollapsedSidebar() {
      this.settingsService.setLayout('collapsed', !this.layout.collapsed);
    }
  
  toggleFullscreen() {
      if (screenfull && screenfull.enabled) {
        screenfull.toggle();
      }
    }
    clearLocalStorage() {
      this.modalService.confirm({
        nzTitle: '<i>确认操作</i>',
        nzContent: '<b>是否清除本地缓存?</b>',
        nzOnOk: () => localStorage.clear()
      });
    }
  
    logout() {
      this.modalService.confirm({
        nzTitle: '<i>确认操作</i>',
        nzContent: '<b>是否退出登录?</b>',
        nzOnOk: () => {
          this.authService.logout();
          this.router.navigate(['/user/account/login']);
          console.log('logout successed.');
        }
      });
    }
}
