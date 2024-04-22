import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { BookStoreService } from '../../shared/book-store.service';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: true,
  imports: [BookListItemComponent]
})
export class BookListComponent {
  books = toSignal(inject(BookStoreService).getAll());
}

