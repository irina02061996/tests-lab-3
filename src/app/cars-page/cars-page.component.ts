import {Component, OnInit} from '@angular/core';
import {CarsService} from './shared/services/cars.service';
import {Car} from './shared/models/car';


@Component({
  selector: 'app-home-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.scss']
})

export class CarsPageComponent implements OnInit {

  colors = [
    'red',
    'blue',
    'yellow',
    'green',
    'pink'
  ];

  cars: Car[] = [];



  constructor(private carsService: CarsService) {
  }

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((cars: Car[]) => {
        this.cars = cars;
        });
  }






  deleteCar(car: Car) {

    this.carsService.deleteCar(car)
      .subscribe(data => {
        this.cars = this.cars.filter(c => c.id !== car.id);
      });
  }

}

