import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { BookStoreService } from '../../shared/book-store.service';
import { Book } from '../../shared/book';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'bm-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  imports: [BookFormComponent],
  standalone: true
})
export class BookCreateComponent {
  private service = inject(BookStoreService);
  private router = inject(Router);

  create(book: Book) {
    this.service.create(book).subscribe(createdBook => {
      this.router.navigate(['/books', createdBook.isbn]);
    });
  }

}
