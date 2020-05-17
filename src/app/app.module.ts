import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusListComponent } from './status-list/status-list.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  MatButtonModule, MatSliderModule, MatMenuModule, MatCardModule, MatCardTitle, MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule } from '@angular/material';

import { StatusService } from './services/status/status.service';
import { NavigationMenuService } from './services/navigation-menu/navigation-menu.service';
import { ApiService } from './services/api/api.service';

@NgModule({
  declarations: [
    AppComponent,
    StatusListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [StatusService,NavigationMenuService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
