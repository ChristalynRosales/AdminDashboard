import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-queueing',
  templateUrl: './queueing.component.html',
  styleUrl: './queueing.component.css'
})
export class QueueingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  searchQueueing(event: any) {
    const searchTerm = (event as any).searchTerm;
    // Implement your search logic here
  }
}