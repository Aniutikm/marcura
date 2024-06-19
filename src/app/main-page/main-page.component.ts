import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route } from '../models/route.model';
import { MapComponent } from './map/map.component';
import { RoutePickerComponent } from './route-picker/route-picker.component';
import { SpeedChartComponent } from './speed-chart/speed-chart.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    MapComponent,
    RoutePickerComponent,
    SpeedChartComponent,
    HttpClientModule
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  selectedRoute: Route | null = null;

  onRouteSelected(route: Route) {
    this.selectedRoute = route;
  }
}
