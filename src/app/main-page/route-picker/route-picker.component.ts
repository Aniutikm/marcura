import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-route-picker',
  templateUrl: './route-picker.component.html',
  styleUrls: ['./route-picker.component.css']
})
export class RoutePickerComponent implements OnInit {
  routes: any[] = [];
  selectedRoute: any;

  @Output() routeSelected = new EventEmitter<any>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRoutesData().then(routes => {
      this.routes = routes;
    });
  }

  onRouteChange(event: any): void {
    this.routeSelected.emit(this.selectedRoute);
  }
}
