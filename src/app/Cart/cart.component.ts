import { Component, computed, effect, signal } from '@angular/core';
import { TestExtendComponent } from '../test-extend/test-extend.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  template: `
    <p>Counter:- {{counter()}}</p>
    <p>Double Counter:- {{doubleCounter()}}</p>
    <p>Customer Name:-{{customer().name || 'N/A'}}</p>
    <p>Customer ID:-{{customer().id || 'N/A'}}</p>
    <button (click)="updateCustomer()">Update Customer</button>
    <button (click)="increment()">Increment</button>
  `,
})
export class CartComponent extends TestExtendComponent {

  counter = signal<number>(0);
  customer = signal<CustomerI>({ name: '', id: null });
  doubleCounter = computed(() => this.counter() * 2);

  // constructor(router: Router, act: ActivatedRoute) {
  //  super(router, act)
  // }

  updateCustomer() {
    this.customer.set({ name: 'Signal', id: 18 });
  }

  increment() {
    // this.counter.set(this.counter() + 1); // Dont do this.❌
    this.counter.update((previousValue) => previousValue + 1); //✅
  }

}


interface CustomerI {
  name: string;
  id: number;
}


