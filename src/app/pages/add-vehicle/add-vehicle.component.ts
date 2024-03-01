import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { VehiclesService } from 'src/app/shared/services/vehicles.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {
  @ViewChild('formDirective') private formDirective!: NgForm;
  form: FormGroup = new FormGroup({});

  constructor( 
    private fb: FormBuilder,
    private vehiclesService: VehiclesService,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.createForm();
  }

  addVehicle() {
    if(this.form.valid) {
      this.vehiclesService.addVehicle(this.form.value).subscribe( () => {
        this.openSnackBar();
        this.form.reset();
        this.formDirective.resetForm();
      })
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.markAsTouched();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  private openSnackBar() {
    this._snackBar.open("Veículo criado com sucesso!", undefined, { duration: 2000, panelClass: [ 'sucess'] });
  }

  private createForm() {
    this.form = this.fb.group({
      modelo: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      ano: ['', [Validators.required]],
      placa: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
      renavam: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      chassi: ['', [Validators.required, Validators.minLength(17), Validators.maxLength(17)]],
    })
  }

}
