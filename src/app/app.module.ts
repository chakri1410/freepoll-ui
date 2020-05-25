import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusListComponent } from './status-list/status-list.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { GoogleChartsModule } from 'angular-google-charts';

import { StatusService } from './services/status/status.service';
import { NavigationMenuService } from './services/navigation-menu/navigation-menu.service';
import { ApiService } from './services/api/api.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { FreePollMaterialModules } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { ViewPollComponent } from './view-poll/view-poll.component';
import { ResultPollComponent } from './result-poll/result-poll.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { OverlayService } from './overlay/overlay.module';
import { ProgressSpinnerModule } from './progress-spinner/progress-spinner.module';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { SearchPollComponent } from './search-poll/search-poll.component';

const provide = [
  StatusService,
  NavigationMenuService,
  ApiService,
  OverlayService,
  { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }];

@NgModule({
   declarations: [
      ProgressSpinnerComponent,
      AppComponent,
      StatusListComponent,
      HeaderComponent,
      FooterComponent,
      DashboardComponent,
      CreatePollComponent,
      AlertDialogComponent,
      ViewPollComponent,
      ResultPollComponent,
      SearchPollComponent
   ],
   entryComponents: [
      ProgressSpinnerComponent,
      AppComponent,
      AlertDialogComponent
   ],
   imports: [
      CommonModule,
      MatProgressSpinnerModule,
      ProgressSpinnerModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      GoogleChartsModule,
      FreePollMaterialModules
   ],
   providers: [
      provide
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
