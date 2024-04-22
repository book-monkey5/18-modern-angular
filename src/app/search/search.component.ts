import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, Observable, Subject, switchMap, tap } from 'rxjs';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [RouterLink, AsyncPipe],
  standalone: true
})
export class SearchComponent {
  private service = inject(BookStoreService)
  input$ = new Subject<string>();
  isLoading = signal(false);
  results$: Observable<Book[]>;

  constructor() {
    this.results$ = this.input$.pipe(
      filter(term => term.length >= 3),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading.set(true)),
      switchMap(term => this.service.getAllSearch(term)),
      tap(() => this.isLoading.set(false))
    );
  }
}
