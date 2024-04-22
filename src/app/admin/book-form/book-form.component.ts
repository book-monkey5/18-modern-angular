import { Component, effect, inject, input, output } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Book } from '../../shared/book';
import { FormErrorsComponent } from '../form-errors/form-errors.component';
import { AsyncValidatorsService } from '../shared/async-validators.service';
import { atLeastOneValue, isbnFormat } from '../shared/validators';

@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  imports: [ReactiveFormsModule, FormErrorsComponent],
  standalone: true
})
export class BookFormComponent {
  book = input<Book>();
  submitBook = output<Book>();

  form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    subtitle: new FormControl('', { nonNullable: true }),
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, isbnFormat],
      asyncValidators: inject(AsyncValidatorsService).isbnExists(),
    }),
    description: new FormControl('', { nonNullable: true }),
    published: new FormControl('', { nonNullable: true }),
    authors: this.buildAuthorsArray(['']),
    thumbnailUrl: new FormControl('', { nonNullable: true }),
  });

  constructor() {
    effect(() => {
      const book = this.book();
      if (book) {
        this.setFormValues(book);
        this.setEditMode(true);
      } else {
        this.setEditMode(false);
      }
    });
  }

  private setFormValues(book: Book) {
    this.form.patchValue(book);

    this.form.setControl(
      'authors',
      this.buildAuthorsArray(book.authors)
    );
  }

  private setEditMode(isEditing: boolean) {
    const isbnControl = this.form.controls.isbn;

    if (isEditing) {
      isbnControl.disable();
    } else {
      isbnControl.enable();
    }
  }

  private buildAuthorsArray(authors: string[]) {
    return new FormArray(
      authors.map(v => new FormControl(v, { nonNullable: true })),
      atLeastOneValue
    );
  }

  get authors() {
    return this.form.controls.authors;
  }

  addAuthorControl() {
    this.authors.push(new FormControl('', { nonNullable: true }));
  }

  submitForm() {
    const formValue = this.form.getRawValue();
    const authors = formValue.authors.filter(author => !!author);

    const newBook: Book = {
      ...formValue,
      authors
    };

    this.submitBook.emit(newBook);
  }
}
