import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesComponent } from './vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { Vehicle, VehiclesService } from 'src/app/shared/services/vehicles.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableDataSource } from '@angular/material/table';

describe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesComponent ],
      imports:[
        HttpClientModule,
        MatSnackBarModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      providers: [
        VehiclesService,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get vehicles', () => {
    const service = TestBed.inject(VehiclesService);
    spyOn(service, "getVehicles").and.returnValue(of({
      vehicles: [{1: 1}]
    }));

    component['getVehicle']();

    expect(service.getVehicles).toHaveBeenCalled();
  });

  it('should delete vehicle', () => {
    const service = TestBed.inject(VehiclesService);
    spyOn(service, "deleteVehicle").and.returnValue(of({
      vehicles: [{1: 1}]
    }));
    spyOn(component as any, "getVehicle")

    component.deleteVehicle(1);

    expect(service.deleteVehicle).toHaveBeenCalled();
    expect(component['getVehicle']).toHaveBeenCalled();
  });

  it('should edit vehicle', () => {
    const vehicle = {
      modelo: 'Jepp'
    } as Vehicle

    const service = TestBed.inject(VehiclesService);
    spyOn(service, "changeVehicle").and.returnValue(of({}))

    const dialog = TestBed.inject(MatDialog);
    spyOn(dialog, "open").and.returnValue({afterClosed: () => {return of({})}} as MatDialogRef<any>)

    component.editVehicle(vehicle)

    expect(dialog.open).toHaveBeenCalled();
    expect(service.changeVehicle).toHaveBeenCalled();
  });

  it('should apply filter', () => {
    const event = {target: {value: 'Jeep'}} as any as Event

    component.dataSource = new MatTableDataSource([{modelo: 'Jeep'} as Vehicle])

    component.applyFilter(event);

    expect(component.dataSource.filter).toEqual('jeep');
  });
});
