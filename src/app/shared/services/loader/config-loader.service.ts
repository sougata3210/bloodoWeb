import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigClass } from '../../models/config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigLoaderService {

  private config: ConfigClass;

  constructor(private http: HttpClient) {
    this.config = new ConfigClass();
  }

  public getConfigData(): ConfigClass {
    return this.config;
  }

  load(): Promise<any> {
    console.log(`getting config data`);
    const promise = this.http.get(environment.CONFIG_LOCATION)
      .toPromise()
      .then((settings: ConfigClass) => {
        this.config = settings;
        return settings;
      }).catch(this.handleError());

    return promise;
  }

  private handleError(data?: any) {
    return (error: any) => {
      console.log(error);
    };
  }
}
