import { Component, OnInit, OnDestroy, ViewChild, Injector } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { MatSidenav } from '@angular/material/sidenav';
import { ConfigClass } from 'src/app/shared/models/config';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoggerService } from 'src/app/shared/services/log/logger.service';
import { ConfigLoaderService } from 'src/app/shared/services/loader/config-loader.service';
import { Subscription } from 'rxjs';
import { DataHandlerService } from 'src/app/shared/services/storage/data-handler.service';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  preserveWhitespaces: false,
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('500ms ease-in-out')),
      transition('out => in', animate('500ms ease-in-out'))
    ]),
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class HomeComponent extends BaseComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav', { static: true }) menuSidenav: MatSidenav;
  links: any[];
  private config: ConfigClass;
  public isMobileView: boolean;
  watcher: Subscription;
  myProfileUrl: string;
  isHovered: boolean;
  userProfile: any;
  rootLogoUrl: string;
  menuState: boolean;
  showLinkNames: boolean;
  isDarkTheme: boolean;
  constructor(
    private storage: StorageService,
    public dataHandler: DataHandlerService,
    private injector: Injector,
    public snackBar: MatSnackBar,
    public logger: LoggerService,
    private configLoader: ConfigLoaderService,
    private router: Router,
  ) {
    super('HomeComponent', snackBar, logger);
    this.config = configLoader.getConfigData();
    this.showLinkNames = true;
    this.isDarkTheme = this.storage.getDarkTheme();
  }

  ngOnInit(): void {
    this.userProfile = {
      name: 'Aloke Tewary',
      emailId: 'aloketewary@gmail.com',
      profilePic: 'likn'
    };
    if (this.router.url.endsWith('/home')) {
      this.router.navigateByUrl(`/home/dashboard`);
    }
  }

  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }

  showHideNavMenu(link: any) {
    this.dataHandler.sidenavMenu.forEach(indLink => {
      if (indLink.name !== link.name) {
        indLink.isShow = false;
      }
    });
    this.dataHandler.sidenavMenu[this.dataHandler.sidenavMenu.indexOf(link)].isShow =
      !this.dataHandler.sidenavMenu[this.dataHandler.sidenavMenu.indexOf(link)].isShow;
  }

  /**
   * Remove logout
   */
  logoutDialog() {
    /* Confirm dialog passed optional parameters for better data handle*/
    // this.dialogService
    //   .confirm('LOGOUT.TITLE', 'LOGOUT.SURE_MESSAGE', 'logout', 'info', 'LOGOUT.BUTTON.LOGOUT_TEXT', 'LOGOUT.BUTTON.CANCEL')
    //   .subscribe(res => {
    //     try {
    //       if (res) {
    //         this.onLoggedOut();
    //         this.logger.debug(this.className, 'Logout Successfully');
    //         this.showMessage('Logout Successfully', '');
    //       }
    //     } catch (error) {
    //       this.logger.error(this.className, error);
    //       this.showMessage('Logout Error');
    //     }
    //   });
  }

  onLoggedOut(): void {
    // this.auth.logout();
    // this.router.navigate(['/auth/login']);
  }

  getUserProfilePic(url: string): string {
    return this.config.ROOT_URL + url;
  }

  routeIsActive(routePath: string) {
    const mainUrl = this.router.url;
    const splitUrls = mainUrl.split('/');
    return splitUrls[1] === routePath;
  }

  onLinkClick(): void {
    if (this.isMobileView) {
      this.menuSidenav.close();
    }
  }

  checkUrlAccessibleOrNot(roleList: string[], loginType: 'teacherapp' | 'adminapp'): boolean {
    let rtrn = true;
    // if (isNullOrUndefined(roleList)) {
    //   return true;
    // }
    // roleList.forEach((role: string) => {
    //   if (!rtrn) {
    //     rtrn = isEqualsIgnoreCase(this.config[role], this.userProfile.userType);
    //   }
    // });
    // return rtrn && (loginType === this.dataHandler.loginAs);
    return rtrn;
  }

  getFormattedMenu(menus: any[], year: string): any[] {
    // menus.forEach((menu) => {
    //   if (menu.isChildAvailable) {
    //     this.getFormattedMenu(menu.child, year);
    //   } else {
    //     menu.href = (menu.href as string)
    //       .replace('SCHOOL_ID', this.userProfile.schoolId)
    //       .replace('SCHOOL_YEAR', year)
    //       .replace('STUDENT_QUERY_REG', TypeOfStudentQuery.REG)
    //       .replace('STUDENT_QUERY_UNREG', TypeOfStudentQuery.UNREG)
    //       .replace('OPERATION_NEW', TypeOfOperation.NEW);
    //   }
    // });
    return menus;
  }

  removedSelectedSchoolYear() {
    // this.academicOrient.selectCurrentYear(this.userProfile.schoolYear);
  }

  toggleDarkTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.storage.setDarkTheme(this.isDarkTheme);
  }
}
