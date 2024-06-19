import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private csvFilePath = 'assets/web_challenge.csv';

  constructor() { }

  getRoutesData(): Promise<any[]> {
    return d3.csv(this.csvFilePath).then(data => {
      return data.map(d => ({
        route_id: d['route_id'],
        from_port: d['from_port'],
        to_port: d['to_port'],
        leg_duration: +d['leg_duration'],
        points: JSON.parse(d['points'])
      }));
    });
  }
}
