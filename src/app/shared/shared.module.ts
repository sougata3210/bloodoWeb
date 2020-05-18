import { CommonModule } from '@angular/common';
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
import { MatIconModule } from '@angular/material/icon';
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
import { WebStorageModule } from 'ngx-store';
import { HttpLoaderComponent } from './components/http-loader/http-loader.component';
import { NoNetworkComponent } from './components/no-network/no-network.component';
import { LoggerService } from './services/log/logger.service';
import { SharedRoutingModule } from './shared-routing.module';

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
  ], exports: [
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
    LoggerService
  ]
})
export class SharedModule { }
