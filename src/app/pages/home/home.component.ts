import { Component, OnInit } from '@angular/core';
import { Vehicle, VehiclesService } from 'src/app/shared/services/vehicles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vehicles: Vehicle[] = []

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  private getVehicles() {
    this.vehiclesService.getVehicles().subscribe((response: any) => {
      this.vehicles  = response.vehicles.slice(0,3);
    });
  }

}
