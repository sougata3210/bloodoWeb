import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import { WebStorageModule } from '@efaps/ngx-store';
import { environment } from 'src/environments/environment';
import { HttpLoaderComponent } from './components/http-loader/http-loader.component';
import { NoNetworkComponent } from './components/no-network/no-network.component';
import { MenuLoaderService } from './services/loader/menu-loader.service';
import { LoggerService } from './services/log/logger.service';
import { SharedRoutingModule } from './shared-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HttpLoaderComponent, NoNetworkComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,
    // TranslationModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    WebStorageModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatTooltipModule,
    MatMenuModule,
    MatDialogModule,
    // NoDataComponent,
    // SpeedDialFabComponent,
    // ComponentLoadingComponent,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    MatCheckboxModule,
    // SearchPipe,
    MatStepperModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatMomentDateModule,
    MatProgressBarModule,
    // MatExpansionModule,
    // RandomColorsDirective,
    // MatRadioModule,
    // ConfirmDialogComponent,
    // CommonConfirmDialogComponent,
    // MatTabsModule,
    // ScrollingModule,
    // MatSlideToggleModule,
    // DragDropModule,
    // MatChipsModule,
    // MatCustomToolbarComponent,
    // UserPermissionModule
  ],
  providers: [
    // { provide: FALLBACK_PROFILE_IMAGE_URL, useValue: environment.FALLBACK_PROFILE_IMAGE_URL },
    MenuLoaderService,
    TitleCasePipe,
    // CacheMapService,
    // { provide: Cache, useClass: CacheMapService },
    DatePipe
  ],
  exports: [
    MatBadgeModule,
    MatSnackBarModule,
    NoNetworkComponent,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,
    // TranslationModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    WebStorageModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatTooltipModule,
    MatMenuModule,
    MatDialogModule,
    // NoDataComponent,
    // SpeedDialFabComponent,
    // ComponentLoadingComponent,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    MatCheckboxModule,
    // SearchPipe,
    MatStepperModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatMomentDateModule,
    MatProgressBarModule,
    HttpLoaderComponent,
    // MatExpansionModule,
    // RandomColorsDirective,
    // MatRadioModule,
    // ConfirmDialogComponent,
    // CommonConfirmDialogComponent,
    // MatTabsModule,
    // ScrollingModule,
    // MatSlideToggleModule,
    // DragDropModule,
    // MatChipsModule,
    // MatCustomToolbarComponent,
    // LoggerService,
  ]
})
export class SharedModule {
  constructor(iconReg: MatIconRegistry, sanitize: DomSanitizer) {
    iconReg.addSvgIcon('app-logo', sanitize.bypassSecurityTrustResourceUrl('../../assets/icons/logo/app-logo.svg'));
    iconReg.addSvgIconSet(sanitize.bypassSecurityTrustResourceUrl('../../assets/icons/mdi.svg'));
    sanitize.bypassSecurityTrustUrl(environment.FALLBACK_PROFILE_IMAGE_URL);
    iconReg.addSvgIcon('delete-alert', sanitize.bypassSecurityTrustResourceUrl('../../assets/icons/custom/delete-alert.svg'));
    iconReg.addSvgIcon('upload-alert', sanitize.bypassSecurityTrustResourceUrl('../../assets/icons/custom/upload-alert.svg'));
    iconReg.addSvgIcon('check-lock', sanitize.bypassSecurityTrustResourceUrl('../../assets/icons/custom/check-lock.svg'));
    iconReg.addSvgIcon('calendar-alert', sanitize.bypassSecurityTrustResourceUrl('../../assets/icons/custom/calendar.svg'));
    iconReg.addSvgIcon('auth-error-alert', sanitize.bypassSecurityTrustResourceUrl('../../assets/icons/custom/auth-error-alert.svg'));
    iconReg.addSvgIcon('books-alert', sanitize.bypassSecurityTrustResourceUrl('../../assets/icons/custom/books-alert.svg'));
    iconReg.addSvgIcon('auth-access-alert', sanitize.bypassSecurityTrustResourceUrl('../../assets/icons/custom/auth-access-alert.svg'));
  }
}
