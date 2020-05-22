import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canLoad: [AuthGuard] },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), /*canLoad: [HomeGuard]*/ },
  // { path: '**', component: FourZeroFourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {paramsInheritanceStrategy: 'always', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
