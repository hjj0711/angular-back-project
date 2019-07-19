import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagecenterRoutingModule } from './messagecenter-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MessagecenterRoutingModule,
    NzLayoutModule,
    NzStepsModule,
    NzCarouselModule
  ]
})
export class MessagecenterModule { }
