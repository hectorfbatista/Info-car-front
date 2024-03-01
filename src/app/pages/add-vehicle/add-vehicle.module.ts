import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddVehicleRoutingModule } from './add-vehicle-routing.module';
import { AddVehicleComponent } from './add-vehicle.component';
import { SharedModule } from 'src/app/shared/components/shared.module';


@NgModule({
  declarations: [
    AddVehicleComponent
  ],
  imports: [
    CommonModule,
    AddVehicleRoutingModule,
    SharedModule
  ]
})
export class AddVehicleModule { }
