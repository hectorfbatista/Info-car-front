import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface Vehicle {
  _id?: string;
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  marca: string;
  ano: string;
}

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private httpClient: HttpClient) { }

  getVehicles() {
    return this.httpClient.get('http://localhost:3000/vehicles');
  }

  addVehicle(vehicle: Vehicle) {
    return this.httpClient.post('http://localhost:3000/vehicles', vehicle);
  }

  deleteVehicle(id: number) {
    return this.httpClient.delete(`http://localhost:3000/vehicles/${id}`);
  }

  changeVehicle(vehicle: Vehicle) {
    return this.httpClient.put(`http://localhost:3000/vehicles/${vehicle._id}`, vehicle);
  }
}
