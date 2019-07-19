import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../core/auth/auth.guard';
import { LayoutDefaultComponent } from './../layout/default/default.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutDefaultComponent,
    children: [
      {
        path: '',
        redirectTo: 'messagecenter',
        pathMatch: 'full'
      },
      {
        path: 'messagecenter',
        loadChildren: './messagecenter/messagecenter.module#MessagecenterModule'
      }
    ]
  },
  {
  path: 'user',
  loadChildren: './user/user.module#UserModule'
},
  { path: '**', redirectTo: 'user' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
