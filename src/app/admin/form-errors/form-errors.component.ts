import { Component, inject, input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'bm-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrl: './form-errors.component.css',
})
export class FormErrorsComponent {
  controlName = input.required<string>();
  messages = input.required<{ [errorCode: string]: string }>();

  private form = inject(FormGroupDirective)

  get errors(): string[] {
    const control = this.form.control.get(this.controlName());

    if (!control || !control.errors || !control.touched) {
      return [];
    }

    return Object.keys(control.errors).map(errorCode => {
      return this.messages()[errorCode];
    });
  }
}
