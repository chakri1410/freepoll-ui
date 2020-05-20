import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusListComponent } from './status-list/status-list.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import { StatusService } from './services/status/status.service';
import { NavigationMenuService } from './services/navigation-menu/navigation-menu.service';
import { ApiService } from './services/api/api.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { FreePollMaterialModules } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogPopupComponent } from './dialog-popup/dialog-popup.component';

@NgModule({
   declarations: [
      AppComponent,
      StatusListComponent,
      HeaderComponent,
      FooterComponent,
      DashboardComponent,
      CreatePollComponent,
      DialogPopupComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      FreePollMaterialModules
   ],
   providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    StatusService,
    NavigationMenuService,
    ApiService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
