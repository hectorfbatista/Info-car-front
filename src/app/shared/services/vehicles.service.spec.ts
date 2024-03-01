import { TestBed } from '@angular/core/testing';

import { Vehicle, VehiclesService } from './vehicles.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('VehiclesService', () => {
  let service: VehiclesService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [VehiclesService],
    });
    service = TestBed.inject(VehiclesService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get vehicles', () => {
    const url = 'http://localhost:3000/vehicles';
    const response = { vehicles: [ { marca: 'Jeep'} as Vehicle]};

    service.getVehicles().subscribe((data) => {
      expect(data).toEqual(response)
    });

    const req = http.expectOne({ method: 'GET'});
    req.flush(response);

    expect(req.request.urlWithParams).toEqual(url);
  });

  it('should create vehicles', () => {
    const url = 'http://localhost:3000/vehicles';
    const response = { vehicles: [ { marca: 'Jeep'} as Vehicle]};

    const vehicle = {marca: 'Jeep'} as Vehicle;

    service.addVehicle(vehicle).subscribe((data) => {
      expect(data).toEqual(response)
    });

    const req = http.expectOne({ method: 'POST'});
    req.flush(response);

    expect(req.request.urlWithParams).toEqual(url);
  });

  it('should delete vehicles', () => {
    const url = 'http://localhost:3000/vehicles/1';
    const response = { vehicles: [ { marca: 'Jeep'} as Vehicle]};

    service.deleteVehicle(1).subscribe((data) => {
      expect(data).toEqual(response)
    });

    const req = http.expectOne({ method: 'DELETE'});
    req.flush(response);

    expect(req.request.urlWithParams).toEqual(url);
  });

  it('should edit vehicles', () => {
    const url = 'http://localhost:3000/vehicles/1';
    const response = { vehicles: [ { marca: 'Jeep'} as Vehicle]};

    const vehicle = {
      marca: 'Jeep',
      _id: '1'
    } as Vehicle;

    service.changeVehicle(vehicle).subscribe((data) => {
      expect(data).toEqual(response)
    });

    const req = http.expectOne({ method: 'PUT'});
    req.flush(response);

    expect(req.request.urlWithParams).toEqual(url);
  });
});
