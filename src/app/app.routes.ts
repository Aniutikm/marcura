import { Routes } from '@angular/router';
import { map } from 'leaflet';
import { MainPageComponent } from './main-page/main-page.component';
import { MapComponent } from './main-page/map/map.component';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
    }
];
