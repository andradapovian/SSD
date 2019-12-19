import { Component, OnInit } from '@angular/core';
import {Event} from 'src/app/events/shared/event.model';
import {EventService} from 'src/app/events/shared/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  
  // events: Event[];

  //constructor(private eventService: EventService) { }
  

  // ngOnInit() {
    
  //   this.eventService.getEvents().subscribe(data => {
  //     this.events = data.map(e => {
  //       return{
  //         id: e.payload.doc.id,
  //       //  ...e.payload.doc.data()

  //       }as Event;
  //     })
  //   });
  // }

  constructor(private eventService: EventService) { }

  ngOnInit(){this.getEvents();}

  eventlist;

  getEvents = () =>
  this.eventService
  .getEvents()
  .subscribe(res => (this.eventlist = res));

  removeEvent = data =>{
    this.eventService.deleteEvent(data)
  }
}
