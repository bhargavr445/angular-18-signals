
import { Component, computed, input } from '@angular/core';
import { Result } from '../../Models/VehiclesI';
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';

@Component({
  selector: 'ang-18-comp-signal-comp',
  standalone: true,
  imports: [VehicleCardComponent],
  templateUrl: './ang-18-signal.component.html',
  styleUrl: './ang-18-signal.component.scss'
})
export class Ang18SignalComponent {

  tableData = input.required<Result[]>({
    alias: 'vehicleList'
  });

  value = input(10, {
    alias: "counter",
    transform: (value: number) => value * 100,
  });
  
  derivedMakeIds = computed(() => {
    const makeIds = this.tableData().map((res) => res.MakeId)
    return makeIds;
  });

  addedToCart(value) {

  }


}
