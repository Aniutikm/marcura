import { Component, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '../../models/route.model';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MapComponent implements OnChanges, AfterViewInit {
  @Input() route: Route | null = null;
  private map: L.Map | undefined;

  ngAfterViewInit() {
    this.map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['route'] && this.route) {
      this.updateMap();
    }
  }

  updateMap() {
    if (this.map && this.route) {
      const points: L.LatLngTuple[] = this.route.points.map(p => [p[1], p[0]]); // latitude, longitude
      const polyline = L.polyline(points, { color: 'blue' }).addTo(this.map);
      this.map.fitBounds(polyline.getBounds());
    }
  }
}
