import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  private _sidenavMenu: Array<any>;

  constructor() { }

  public get sidenavMenu(): Array<any> {
    return this._sidenavMenu;
  }
  public set sidenavMenu(value: Array<any>) {
    this._sidenavMenu = value;
  }
}
