import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MapComponent } from './main-page/map/map.component';
import { RoutePickerComponent } from './main-page/route-picker/route-picker.component';
import { SpeedChartComponent } from './main-page/speed-chart/speed-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MapComponent,
    RoutePickerComponent,
    SpeedChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
