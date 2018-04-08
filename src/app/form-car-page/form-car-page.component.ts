import {Component, OnInit} from '@angular/core';
import {CarsService} from '../shared/services/cars.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from '../shared/models/car';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ErrorMessage} from '../shared/models/error-message';

declare let $: any;

@Component({
    selector: 'app-form-car-page',
    templateUrl: './form-car-page.component.html',
    styleUrls: ['./form-car-page.component.scss']
})
export class FormCarPageComponent implements OnInit {

    id: number;

    car: Car;

    form: FormGroup;

    description;
    year;

    colors = [
        'red',
        'blue',
        'yellow',
        'green',
        'pink'
    ];

    errorMessage: ErrorMessage;

    constructor(private route: ActivatedRoute,
                private carsService: CarsService,
                private router: Router) {
    }

    ngOnInit() {
        this.id = +this.route.snapshot.params['id'];
        this.getCar();

        this.form = new FormGroup({
            'color': new FormControl(
                this.colors[0],
                []),
            'description': new FormControl(
                null,
                [Validators.required]),
            'year': new FormControl(
                null,
                [Validators.required])

        });
    }

    getCar() {
        this.carsService.getCarById(this.id)
            .subscribe(car => {
                this.car = car;

                this.description = this.car.description;
                this.year = this.car.year;
            });
    }

    onSubmit() {

        // this.showMessage({
        //     text: 'Форма содержит ошибки',
        //     type: 'danger'
        // });

        if (this.form.valid && this.description !== '' && this.year !== '') {

          this.car.color = this.form.value.color;
          this.car.description = this.form.value.description;
          this.car.year = this.form.value.year;

          this.carsService.changeCar(this.car)
            .subscribe(car =>
              this.router.navigate(['', this.car.id]));

        } else {
          this.showMessage({
            text: 'Форма содержит ошибки',
            type: 'danger'
          });
        }
    }


    showMessage(errorMessage: ErrorMessage) {
        this.errorMessage = errorMessage;

        $('.alert').css({
            'display': 'block'
        });

        window.setTimeout(() => {
            $('.alert').css({
                'display': 'none'
            });
        }, 3000);
    }
}
