import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { Ang18Component } from './Vehicle/Components/vehicle-overview/vehicle-overview.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './Vehicle/Components/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, Ang18Component, HeaderComponent, RouterOutlet, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  name = "Bhargav";
  
  ngOnInit(): void {
    let x = 0;
    console.log(10 ?? '16-Question');

    let y = 10;
    console.log(y || '19-Question');
  }


  title = 'signals-17';

  value = signal(10);

  age = signal(20)

  increment() {
    this.value.update((val) => val+1);
  }

  someFun() {
    this.name = 'Bhargav R G';
  }
}
