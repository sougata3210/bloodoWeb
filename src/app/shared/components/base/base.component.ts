import { Observable, merge, of, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { LoggerService } from '../../services/log/logger.service';
import { Inject } from '@angular/core';

export abstract class BaseComponent {
  onlineOffline: Observable<boolean>;
  allowedExcelFileType = ['.csv', '.xls', '.xlsx'];
  allowedPdfFileType = ['.pdf'];
  allowedWordFileType = ['.doc', '.docx'];
  allowedImageFileType = ['.gif', '.jpg', '.jpeg', '.tiff', '.png'];
  allowedAnyFileType = this.allowedImageFileType.concat(this.allowedExcelFileType)
    .concat(this.allowedWordFileType)
    .concat(this.allowedPdfFileType);
  constructor(
    @Inject(String) protected className: string,
    @Inject(MatSnackBar) protected snackBar: MatSnackBar,
    @Inject(LoggerService) protected logger: LoggerService,
    // protected locale: LocaleService,
  ) {
    this.onlineOffline = merge(of(navigator.onLine),
      fromEvent(window, 'online').pipe(map(() => true)),
      fromEvent(window, 'offline').pipe(map(() => false))
    );
    this.onlineOffline.subscribe((val) => {
      this.logger.debug(this.className, `This App is now ${val ? 'Online' : 'Offline'}`);
    });
  }

  /**
   * Message Shown for different data handling
   * @param message Message to be daiplayed
   * @param panelClass Extra Class for Better approach
   */
  showMessage(message: string, panelClass?: string) {
    const config: MatSnackBarConfig = {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 5000,
      panelClass
    };
    this.snackBar.open(message || '', '', config);
  }
}
