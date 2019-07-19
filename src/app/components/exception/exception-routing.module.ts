import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Exception404Component } from './404/404.component';

const routes: Routes = [
  { path: '404', component: Exception404Component },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExceptionRoutingModule { }
