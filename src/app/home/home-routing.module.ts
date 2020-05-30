import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [], children: [
      // tslint:disable-next-line: max-line-length
      { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule), /*canLoad: [HomeGuard]*/ },
       { path: 'donors', loadChildren: () => import('../donors/donors.module').then(m => m.DonorsModule), /*canLoad: [HomeGuard]*/ }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
