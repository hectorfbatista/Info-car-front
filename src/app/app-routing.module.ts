import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'vehicles',
    loadChildren: () => import('./pages/vehicles/vehicles.module').then(m => m.VehiclesModule)
  },
  {
    path:'add-vehicle',
    loadChildren: () => import('./pages/add-vehicle/add-vehicle.module').then(m => m.AddVehicleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
