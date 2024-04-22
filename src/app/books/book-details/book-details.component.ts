import { AsyncPipe, DatePipe, NgOptimizedImage } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';

import { BookStoreService } from '../../shared/book-store.service';
import { ConfirmDirective } from '../../shared/confirm.directive';
import { IsbnPipe } from '../../shared/isbn.pipe';
import { LoggedinOnlyDirective } from '../../shared/loggedin-only.directive';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  standalone: true,
  imports: [
    DatePipe,
    AsyncPipe,
    NgOptimizedImage,
    RouterLink,
    IsbnPipe,
    LoggedinOnlyDirective,
    ConfirmDirective
  ]
})
export class BookDetailsComponent {
  private service = inject(BookStoreService);
  private router = inject(Router);
  isbn = input.required<string>();
  book$ = toObservable(this.isbn).pipe(
    switchMap(isbn => this.service.getSingle(isbn))
  );

  removeBook(isbn: string) {
    this.service.remove(isbn).subscribe(() => {
      this.router.navigateByUrl('/books');
    });
  }
}
