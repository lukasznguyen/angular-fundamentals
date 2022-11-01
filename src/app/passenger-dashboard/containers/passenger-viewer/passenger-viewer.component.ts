import {Component, OnInit} from '@angular/core';
import {PassengerDashboardService} from "../../passenger-dashboard.service";
import {Passenger} from "../../models/passenger.interface";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {switchMap} from "rxjs";

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  templateUrl: `passenger-viewer.component.html`
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private passengerService: PassengerDashboardService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((param: Params) => this.passengerService.getPassenger(param['id']))
    ).subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService.updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event);
      })
  }
}
