import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'bm-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [RouterLink, SearchComponent],
})
export class HomeComponent {}
