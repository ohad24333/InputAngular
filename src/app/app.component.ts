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
  car: string = "Select Car";

}
