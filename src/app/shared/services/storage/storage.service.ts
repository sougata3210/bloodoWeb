import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookiesStorageService, LocalStorageService, SessionStorageService } from '@efaps/ngx-store';
import { isNullOrUndefined } from 'src/app/utils/app.utils';
import { environment } from 'src/environments/environment';
import { AbstractHttpService } from '../base/abstract-http.service';
import { LoggerService } from '../log/logger.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService extends AbstractHttpService {

  constructor(
    protected http: HttpClient,
    protected snackBar: MatSnackBar,
    protected logger: LoggerService,
    private localStorageService: LocalStorageService,
    // private encryptDecryptService: EncryptDecryptService,
    private sessionStorageService: SessionStorageService,
    private cookieStorageService: CookiesStorageService,
    private router: Router
  ) {
    super('StorageService', http, snackBar, logger);
    this.startListen();
  }

  startListen() {
    this.cookieStorageService.observe(environment.LOGIN_PERSISTENCE_NAME).subscribe(val => {
      if (isNullOrUndefined(val)) {
        this.router.navigateByUrl('/auth/login');
      }
    });
  }

  getCookieData<T>(param: any): T {
    this.logger.debug(this.className, `getCookieData() Data`);
    // const data: T = this.encryptDecryptService.decryptData<T>(this.cookieStorageService.get(param));
    const data: T = this.cookieStorageService.get(param);
    return data;
  }

}
