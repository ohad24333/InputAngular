import { Component } from '@angular/core';
import { CarsEnum } from './child/enums/carEnum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InputAndOutput';

  carsEnaum = CarsEnum;
  isCarSelected: boolean = false;
  car: string = "";


  handleSelectCar(car: string) {


    if (car != "Select Car") {
      this.car = car;
      this.isCarSelected = true;
    }else this.isCarSelected = false;
  }
}
