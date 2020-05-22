import { Component, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { BaseComponent } from './shared/components/base/base.component';
import { HttpLoaderService } from './shared/services/http/http-loader.service';
import { MenuLoaderService } from './shared/services/loader/menu-loader.service';
import { LoggerService } from './shared/services/log/logger.service';
import { DataHandlerService } from './shared/services/storage/data-handler.service';

/**
 * App Component entry level lazy loading configuration
 *
 * @export
 * @class AppComponent
 * @extends {BaseComponent}
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {
  title = 'BlooddoWeb';

  constructor(
    protected snackBar: MatSnackBar,
    protected logger: LoggerService,
    public dataHandler: DataHandlerService,
    router: Router,
    private loader: HttpLoaderService,
    private ngZone: NgZone,
    private menuLoader: MenuLoaderService) {
    super('AppComponent', snackBar, logger);
    router.events.subscribe((event: RouterEvent) => {
      this._navigationInterceptor(event);
    });
    this.getMenuList();
  }

  // Shows and hides the loading spinner during RouterEvent changes
  private _navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      // We wanna run this function outside of Angular's zone to
      // bypass change detection
      // this.loader.show();
      this.ngZone.runOutsideAngular(() => {
        // For simplicity we are going to turn opacity on / off
        // you could add/remove a class for more advanced styling
        // and enter/leave animation of the spinner
        this.loader.show();
      });
    }
    if (event instanceof NavigationEnd) {
      this.loader.hide();
    }
    // Set loading state to false in both of the below events to
    // hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loader.hide();
    }
    if (event instanceof NavigationError) {
      this.loader.hide();
    }
  }

  getMenuList() {
    this.menuLoader.load();
  }
}
