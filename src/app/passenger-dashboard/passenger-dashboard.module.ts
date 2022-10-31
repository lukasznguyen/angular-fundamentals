import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dashboard.component';
import {PassengerViewerComponent} from "./containers/passenger-viewer/passenger-viewer.component";

import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';

import {PassengerDashboardService} from './passenger-dashboard.service';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PassengerViewerComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {
}
