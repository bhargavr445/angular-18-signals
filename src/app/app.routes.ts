import { Routes } from '@angular/router';
import { Ang18Component } from './Vehicle/Components/ang-18/ang-18.component';
import { VehiclesTableComponent } from './Vehicle/Components/vehicles-table/vehicles-table.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'vehicle', pathMatch: 'full' },
    { path: 'vehicle', component: Ang18Component },
    { path: 'cart', component: VehiclesTableComponent },
    { path: 'home', component: HomeComponent },
];
