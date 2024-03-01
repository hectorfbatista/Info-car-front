import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Vehicle } from '../../services/vehicles.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface DialogData {
  vehicle: Vehicle
}

@Component({
  selector: 'app-modal-edit-vehicle',
  templateUrl: './modal-edit-vehicle.component.html',
  styleUrls: ['./modal-edit-vehicle.component.scss']
})
export class ModalEditVehicleComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalEditVehicleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private createForm() {
    this.form = this.fb.group({
      modelo: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      ano: ['', [Validators.required]],
      placa: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
      renavam: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      chassi: ['', [Validators.required, Validators.minLength(17), Validators.maxLength(17)]],
    });

    this.form.patchValue(this.data.vehicle);
  }

}
