import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

import { IsbnPipe } from '../../shared/isbn.pipe';
import { Book } from '../../shared/book';

@Component({
  selector: 'bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css'],
  standalone: true,
  imports: [RouterLink, IsbnPipe, NgOptimizedImage]
})
export class BookListItemComponent {
  book = input.required<Book>();
}
