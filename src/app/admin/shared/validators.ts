import { inject } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, isFormArray, ValidatorFn } from '@angular/forms';
import { map } from 'rxjs';

import { BookStoreService } from '../../shared/book-store.service';

export const isbnFormat: ValidatorFn = function (control) {
  if (!control.value || typeof control.value !== 'string') {
    return null;
  }

  const isbnWithoutDashes = control.value.replace(/-/g, '');
  const length = isbnWithoutDashes.length;

  if (length === 10 || length === 13) {
    return null;
  } else {
    return { isbnformat: true };
  }
};

export const atLeastOneValue: ValidatorFn = function (control) {
  if (!isFormArray(control)) {
    return null;
  }

  if (control.controls.some(el => !!el.value)) {
    return null;
  } else {
    return { atleastonevalue: true };
  }
};

export function isbnExists(): AsyncValidatorFn {
  const service = inject(BookStoreService);
  return (control: AbstractControl) => {
    return service
      .check(control.value)
      .pipe(map((exists) => (exists ? { isbnexists: true } : null)));
  };
};
