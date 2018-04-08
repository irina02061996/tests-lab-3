import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {AppComponent} from './app.component';
import {CarsPageComponent} from './cars-page/cars-page.component';
import {CarPageComponent} from './cars-page/components/car-page/car-page.component';

import {CarsService} from './cars-page/shared/services/cars.service';
import { FormCarPageComponent } from './cars-page/components/form-car-page/form-car-page.component';



@NgModule({
  declarations: [
    AppComponent,
    CarsPageComponent,
    CarPageComponent,
    FormCarPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    CarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
