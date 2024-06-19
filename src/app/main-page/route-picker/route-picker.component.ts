import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Route } from '../../models/route.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-route-picker',
  templateUrl: './route-picker.component.html',
  styleUrls: ['./route-picker.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [DataService],
})
export class RoutePickerComponent implements OnInit {
  routes: Route[] = [];
  @Output() routeSelected = new EventEmitter<Route>();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getRoutes().subscribe((routes) => {
      console.log('Routes fetched:', routes);
      this.routes = routes;
    });
  }

  onRouteChange(event: any) {
    const routeId = event.target.value;
    const selectedRoute = this.routes.find(route => route.route_id === routeId);
    if (selectedRoute) {
      this.routeSelected.emit(selectedRoute);
    }
  }
}
