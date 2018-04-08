import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsPageComponent} from './cars-page/cars-page.component';
import {CarPageComponent} from './cars-page/components/car-page/car-page.component';
import {FormCarPageComponent} from './cars-page/components/form-car-page/form-car-page.component';



const appRouts: Routes = [
  { path: '', component: CarsPageComponent},
  { path: ':id', component: CarPageComponent},
  { path: 'update/:id', component: FormCarPageComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRouts)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
