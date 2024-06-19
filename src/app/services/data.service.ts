import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Route } from '../models/route.model';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  private csvUrl = 'src/web_challenge.csv';

  constructor(private http: HttpClient) {}

  getRoutes(): Observable<Route[]> {
    return this.http.get(this.csvUrl, { responseType: 'text' }).pipe(
      map(csvData => this.parseCsv(csvData))
    );
  }

  private parseCsv(csvData: string): Route[] {
    const lines = csvData.split('\n');
    const headers = lines[0].split(',');
    const routes: Route[] = [];

    for (let i = 1; i < lines.length; i++) {
      const currentLine = lines[i].split(',');
      const points = JSON.parse(currentLine[4]);
      routes.push({
        route_id: currentLine[0],
        from_port: currentLine[1],
        to_port: currentLine[2],
        leg_duration: +currentLine[3],
        points: points,
      });
    }

    return routes;
  }
}


