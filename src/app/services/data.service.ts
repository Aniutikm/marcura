import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Route } from '../models/route.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000/data'; // URL of the Express server

  constructor(private http: HttpClient) {}

  getRoutes(): Observable<Route[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => data.map(item => ({
        route_id: item.route_id,
        from_port: item.from_port,
        to_port: item.to_port,
        leg_duration: +item.leg_duration,
        points: JSON.parse(item.points) as [number, number, number, number | null][]
      })))
    );
  }
}


