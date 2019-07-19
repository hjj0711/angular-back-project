import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagecenterRoutingModule } from './messagecenter-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MessagecenterRoutingModule
  ]
})
export class MessagecenterModule { }
