import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { VehiclesService } from 'src/app/shared/services/vehicles.service';

import { AddVehicleComponent } from './add-vehicle.component';

describe('AddVehicleComponent', () => {
  let component: AddVehicleComponent;
  let fixture: ComponentFixture<AddVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVehicleComponent ],
      imports: [
        MatSnackBarModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        FormBuilder,
        VehiclesService,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add vehicle', () => {
    const service = TestBed.inject(VehiclesService);

    const vehicle = {
      modelo: 'Compass',
      marca: 'Jeep',
      ano: '2014',
      placa: 'HRT1B12',
      renavam: '12345678912',
      chassi: 'DDFAWE123412DFAEF'
    }
    
    component.form.patchValue(vehicle);

    spyOn(service, "addVehicle").and.returnValue(of({}));

    component.addVehicle();

    expect(service.addVehicle).toHaveBeenCalled();
  });

  it('should not add vehicle', () => {
    const service = TestBed.inject(VehiclesService);
    spyOn(service, "addVehicle").and.returnValue(of({}));

    component.addVehicle();

    expect(service.addVehicle).not.toHaveBeenCalled();
  });
});
