import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [], children: [
      // { path: '/dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule), /*canLoad: [HomeGuard]*/ }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
