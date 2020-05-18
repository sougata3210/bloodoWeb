import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from '../services/storage/storage.service';
import { isNullOrUndefined } from 'src/app/utils/app.utils';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private storage: StorageService
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canAccess();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canAccess();
  }

  canAccess(): boolean {
    if (!!isNullOrUndefined(this.storage.getCookieData(environment.LOGIN_PERSISTENCE_NAME))) {
      return true;
    }
    // const userData = this.storage.getUserData<UserProfile>();
    this.router.navigate([`/home/dashboard`]);
    return false;
  }
}
