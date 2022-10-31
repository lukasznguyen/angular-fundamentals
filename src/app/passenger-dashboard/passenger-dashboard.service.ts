import {Passenger} from "./models/passenger.interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

import {catchError, Observable, throwError} from "rxjs";

const PASSENGER_API: string = "http://localhost:3000/passengers";

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {
  }

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(PASSENGER_API).pipe(
      catchError((error: any) => throwError(() => error.json()))
    );
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.http.get<Passenger>(`${PASSENGER_API}/${id}`).pipe(
      catchError((error: any) => throwError(() => error.json()))
    )
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this.http.put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger, {'headers': headers}).pipe(
      catchError((error: any) => throwError(() => error.json()))
    );
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.delete<Passenger>(`${PASSENGER_API}/${passenger.id}`).pipe(
      catchError((error: any) => throwError(() => error.json()))
    );
  }
}
