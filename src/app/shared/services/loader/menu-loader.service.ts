import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataHandlerService } from '../storage/data-handler.service';
import { LoggerService } from '../log/logger.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class MenuLoaderService {

  constructor(
    private http: HttpClient,
    private dataHandler: DataHandlerService,
    private logger: LoggerService) {
  }

  load(): Promise<any> {
    this.logger.log('MenuLoaderService', `getting menu details`);
    const promise = this.http.get(environment.MENU_LOCATION)
      .toPromise()
      .then((menus: any[]) => {
        this.dataHandler.sidenavMenu = menus;
        return menus;
      }).catch(this.handleError());

    return promise;
  }

  private handleError(data?: any) {
    return (error: any) => {
      console.log(error);
    };
  }
}
