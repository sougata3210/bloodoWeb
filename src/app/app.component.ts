import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseComponent } from './shared/components/base/base.component';
import { LoggerService } from './shared/services/log/logger.service';
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

  constructor(protected snackBar: MatSnackBar, protected logger: LoggerService) {
    super('AppComponent', snackBar, logger);
  }
}
