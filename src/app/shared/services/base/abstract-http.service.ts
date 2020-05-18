import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { LoggerService } from '../log/logger.service';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractHttpService {

  protected constructor(
    protected className: string,
    protected http: HttpClient,
    protected snackBar: MatSnackBar,
    protected logger: LoggerService) {
    this.className = className;
  }

  protected handleError<T>(uri: string, result?: T) {
    return (error: any): Observable<T> => {
      this.logger.error(this.className, 'http request failed:', uri);
      this.logger.error(this.className, 'error', error);
      this.logger.error(this.className, 'response', JSON.stringify(result));
      return of(result);
    };
  }

  showMessage(message: string) {
    const config: MatSnackBarConfig = {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 5000,
    };
    this.snackBar.open(message || '', '', config);
  }

}
