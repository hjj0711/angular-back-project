import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
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
      },
      {
        path: 'appversion',
        loadChildren: './appversion/appversion.module#AppVersionModule'
      },
      {
        path: 'exception',
        loadChildren: './exception/exception.module#ExceptionModule'
      },

    ]
  },
  // {
  //   path: 'fullscreen',
  //   component: LayoutFullScreenComponent,
  //   children: []
  // },
  {
  path: 'user',
  loadChildren: './user/user.module#UserModule'
},
{ path: '**', redirectTo: 'exception/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment.useHash })],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
