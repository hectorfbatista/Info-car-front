import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { VehiclesService } from 'src/app/shared/services/vehicles.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[
        HttpClientModule,
      ],
      providers: [
        VehiclesService,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
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

    component['getVehicles']();

    expect(service.getVehicles).toHaveBeenCalled();
  });
});
