import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalEditVehicleComponent } from 'src/app/shared/components/modal-edit-vehicle/modal-edit-vehicle.component';
import { Vehicle, VehiclesService } from 'src/app/shared/services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  displayedColumns: string[] = ['marca', 'modelo', 'ano', 'placa', 'renavam', 'chassi', 'acoes'];
  dataSource!: MatTableDataSource<Vehicle>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  vehicles: Vehicle[] = [];

  constructor(
    private vehiclesService: VehiclesService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.getVehicle();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private getVehicle() {
    this.vehiclesService.getVehicles().subscribe((response: any) => {
      this.vehicles = response.vehicles;

      this.dataSource = new MatTableDataSource(this.vehicles);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  deleteVehicle(id: number) {
    this.vehiclesService.deleteVehicle(id).subscribe( () => {
      this._snackBar.open("Veículo excluído com sucesso!", undefined, { duration: 2000, panelClass: [ 'sucess'] });

      this.getVehicle();
    })
  }

  editVehicle(vehicle: Vehicle) {
    const dialogRef = this.dialog.open(ModalEditVehicleComponent, {
      data: {vehicle: vehicle},
    });

    dialogRef.afterClosed().subscribe(result => {
      result._id = vehicle._id;
      this.vehiclesService.changeVehicle(result).subscribe( () => {
        this._snackBar.open("Veículo alterado com sucesso!", undefined, { duration: 2000, panelClass: [ 'sucess'] });
        this.getVehicle();
      })
    });

  }
}



