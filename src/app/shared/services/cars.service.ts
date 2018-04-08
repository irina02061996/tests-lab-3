import {Injectable} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class CarsService {

  baseUrl = 'http://localhost:3000/cars/';

  constructor(private http: HttpClient) {
  }

  getCarById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + `${id}`);
  }

  getCars(): Observable<any> {
    return this.http.get(this.baseUrl);
  }


  changeCar(car: any): Observable<any> {
    return this.http.put(this.baseUrl + `${car.id}`, car);
  }

  deleteCar(car: any): Observable<any> {
    return this.http.delete(this.baseUrl + `${car.id}`);
  }

}
