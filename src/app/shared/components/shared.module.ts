import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContainer, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { CardVehicleComponent } from './card-vehicle/card-vehicle.component';
import { FormFieldErrorComponent } from './form-field-error/form-field-error.component';
import { ModalEditVehicleComponent } from './modal-edit-vehicle/modal-edit-vehicle.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    NavBarComponent,
    FormFieldErrorComponent,
    CardVehicleComponent,
    ModalEditVehicleComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTooltipModule
  ],
  exports: [
    NavBarComponent,
    CommonModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    FormFieldErrorComponent,
    MatSnackBarModule,
    CardVehicleComponent,
    ModalEditVehicleComponent,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }