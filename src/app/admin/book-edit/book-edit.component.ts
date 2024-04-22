import { AsyncPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'bm-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  imports: [AsyncPipe, BookFormComponent],
  standalone: true
})
export class BookEditComponent {
  private service = inject(BookStoreService);
  private router = inject(Router);
  isbn = input.required<string>();
  book$ = toObservable(this.isbn).pipe(
    switchMap(isbn => this.service.getSingle(isbn))
  );

  update(book: Book) {
    this.service.update(book).subscribe(updatedBook => {
      this.router.navigate(['/books', updatedBook.isbn]);
    });
  }
}
