import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { BookStoreService } from '../../shared/book-store.service';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
  imports: [BookListItemComponent]
})
export class BookListComponent {
  books = toSignal(inject(BookStoreService).getAll());
}

