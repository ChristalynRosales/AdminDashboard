import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../../search-bar/search-bar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent implements OnInit {
   //Add events
   events:any = [
    { title: 'Pauline Astorga', date: '2024-03-03', color: '#FFA44f'},
    { title: 'Lady Johan Canapate', date: '2024-03-05', color: '#FFA44f'},
    { title: 'Christalyn Rosales', date: '2024-03-11', color: '#FFA44f'}
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: this.events
  };
 
  constructor() {}

  ngOnInit() {}

  searchAppointments(event: any) {
    // Access search term from event object (assuming it's in a property named 'searchTerm')
    const searchTerm = event.searchTerm; // Type assertion (optional)
  
    // Filter appointments based on searchTerm
    // ... your filtering logic here ...
  }
}
