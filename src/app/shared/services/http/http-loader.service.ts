import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from '../../interfaces/loader-state';

@Injectable({
  providedIn: 'root'
})
export class HttpLoaderService {


  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();

  constructor(
    private ngZone: NgZone
  ) { }

  show() {
    this.ngZone.runOutsideAngular(() => {
      this.loaderSubject.next({ show: true });
    });
  }
  hide() {
    this.ngZone.runOutsideAngular(() => {
      this.loaderSubject.next({ show: false });
    });
  }
}
