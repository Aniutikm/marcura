import { Component } from '@angular/core';
import { MapComponent } from './map/map.component';
import { RoutePickerComponent } from './route-picker/route-picker.component';
import { SpeedChartComponent } from './speed-chart/speed-chart.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MapComponent,
    RoutePickerComponent,
    SpeedChartComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
