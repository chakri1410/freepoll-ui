import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusListComponent } from './status-list/status-list.component';
import { StatusService } from './status.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  MatButtonModule, MatSliderModule, MatMenuModule, MatCardModule, MatCardTitle } from '@angular/material';

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
    MatCardModule
  ],
  providers: [StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
