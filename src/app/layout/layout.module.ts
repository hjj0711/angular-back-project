import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LayoutDefaultComponent } from './default/default.component';
import { HeaderComponent } from './default/header/header.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  declarations: [LayoutDefaultComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    RouterModule,
    NzIconModule,
    NzToolTipModule,
    NzDropDownModule,
    NzTimelineModule,
    NzAvatarModule
  ],
  exports: [LayoutDefaultComponent]
})
export class LayoutModule { }
