import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CarsService} from '../../shared/services/cars.service';
import {Car} from '../../shared/models/car';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss']
})
export class CarPageComponent implements OnInit {

  id: number;

  car: Car;

  constructor(private route: ActivatedRoute,
              private carsService: CarsService) {

  }


  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.getCar();
  }

  getCar() {
    this.carsService.getCarById(this.id)
      .subscribe(car => {
        this.car = car;
        console.log(this.car);
      });

  }

}
