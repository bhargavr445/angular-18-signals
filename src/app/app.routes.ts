import { Routes } from '@angular/router';
import { Ang18Component } from './Vehicle/Components/vehicle-overview/vehicle-overview.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './Vehicle/Components/vehicles-table/cart.component';

export const routes: Routes = [
    { path: '', redirectTo: 'vehicle', pathMatch: 'full' },
    { path: 'vehicle', component: Ang18Component },
    { path: 'cart', component: CartComponent },
    { path: 'home', component: HomeComponent },
];
