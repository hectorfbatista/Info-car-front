import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-error',
  template: `
    <span>
      {{ errorMessage }}
    </span>
  `,
  styleUrls: ['./form-field-error.component.scss']
})
export class FormFieldErrorComponent {
  @Input('form-control') formControl!: FormControl | null;

  public get errorMessage(): string | null | undefined {
    return this.mustShowError() ? this.getErrorMessage() : null;
  }

  private mustShowError(): boolean {
    return !!(this.formControl?.invalid && this.formControl.touched);
  }

  private getErrorMessage(): string | undefined {
    if (this.formControl?.errors?.['required']) {
      return "Campo obrigatório";
    }
    else if (this.formControl?.errors?.['minlength']) {
      return `Deve ter no mínimo ${this.formControl.errors?.['minlength'].requiredLength} caracteries`;
    }
    else if (this.formControl?.errors?.['maxlength']) {
      return `Deve ter no máximo ${this.formControl.errors?.['maxlength'].requiredLength} caracteries`;
    }

    return undefined;
  }

}