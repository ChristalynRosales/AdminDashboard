import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  searchHistory(event: any) {
    const searchTerm = (event as any).searchTerm;
    // Implement your search logic here
  }
}