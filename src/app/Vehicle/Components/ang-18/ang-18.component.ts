import { Component, inject, signal } from '@angular/core';
import { Ang18SignalComponent } from '../ang-18-signal/ang-18-signal.component';
import { Ang18SignalService } from '../../Services/ang-18-signal.service';
import { VehiclesResponseI } from '../../Models/VehiclesI';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ang-18-comp',
  standalone: true,
  imports: [Ang18SignalComponent, FormsModule],
  template: `
    @if(response()?.Results?.length > 0){
      <ang-18-comp-signal-comp [vehicleList]="response().Results" />
    }
   `
})
export class Ang18Component {

  ang18SignalService = inject(Ang18SignalService);
  response = signal<VehiclesResponseI>({ Count: null, Message: '', SearchCriteria: '', Results: [] });

  constructor() {
    this.fetchData();
  }

  fetchData() {
    this.ang18SignalService.getVehicleData().subscribe({
      next: (resp: VehiclesResponseI) => this.handleSuccess(resp),
      error: (err) => this.handleError(err)
    });
  }

  handleSuccess(resp: VehiclesResponseI) {
    this.response.set(resp);
    // this.response = resp;
  }

  handleError(error) {
    console.log(error);
  }

}
